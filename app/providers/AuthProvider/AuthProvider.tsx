import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

// ВКЛЮЧИ для автоматического входа demo@example.com
const AUTO_LOGIN_DEV = true

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		// Авто-логин для разработки
		if (AUTO_LOGIN_DEV && typeof window !== 'undefined') {
			const existingToken = Cookies.get('accessToken')
			if (!existingToken) {
				// Устанавливаем фейковые куки
				Cookies.set('accessToken', 'mock_access_token_12345')
				Cookies.set('refreshToken', 'mock_refresh_token_67890')
				localStorage.setItem(
					'user',
					JSON.stringify({
						_id: 'u1',
						email: 'demo@example.com',
						password: 'hidden',
						isAdmin: true,
						createdAt: new Date().toISOString(),
					})
				)
				// Перезагружаем чтобы Redux подхватил
				window.location.reload()
				return
			}
		}

		// Обычная проверка
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
