import Cookies from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

import { mockDelay } from '../helpers/delay'

const mockUser = {
	_id: 'u1',
	email: 'demo@example.com',
	password: 'hidden',
	isAdmin: true,
	createdAt: new Date().toISOString(),
}

const mockTokens = {
	accessToken: 'mock_access_token_12345',
	refreshToken: 'mock_refresh_token_67890',
}

export const AuthMockService = {
	async register(email: string, password: string): Promise<IAuthResponse> {
		await mockDelay(600)

		const response: IAuthResponse = {
			data: {
				user: { ...mockUser, email, password: 'hidden' },
				...mockTokens,
			},
		}

		Cookies.set('accessToken', mockTokens.accessToken)
		Cookies.set('refreshToken', mockTokens.refreshToken)
		localStorage.setItem('user', JSON.stringify(response.data.user))

		return response
	},

	async login(email: string, password: string): Promise<IAuthResponse> {
		await mockDelay(500)
		if (password === 'wrong') throw new Error('Invalid credentials')

		const response: IAuthResponse = {
			data: {
				user: mockUser,
				...mockTokens,
			},
		}

		Cookies.set('accessToken', mockTokens.accessToken)
		Cookies.set('refreshToken', mockTokens.refreshToken)
		localStorage.setItem('user', JSON.stringify(response.data.user))

		return response
	},

	logout() {
		Cookies.remove('accessToken')
		Cookies.remove('refreshToken')
		localStorage.removeItem('user')
	},

	async getNewTokens(): Promise<IAuthResponse> {
		await mockDelay(300)

		Cookies.set('accessToken', 'new_mock_token_' + Date.now())

		return {
			data: {
				user: mockUser,
				...mockTokens,
			},
		}
	},
}
