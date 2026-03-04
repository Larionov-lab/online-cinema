import { IUser } from '@/shared/types/user.types'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface InterfaceEmailPassword {
	email: string
	password: string
}

// Данные внутри ответа
export interface IAuthResponseData extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}

// Полный ответ как в axios (с обёрткой data)
export interface IAuthResponse {
	data: IAuthResponseData
}
