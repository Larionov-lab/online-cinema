import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import {
	IAuthResponse,
	IAuthResponseData,
	InterfaceEmailPassword,
} from './user.interface'

export const register = createAsyncThunk<
	IAuthResponseData,
	InterfaceEmailPassword
>('auth/register', async ({ email, password }, thunkAPI) => {
	try {
		const response: IAuthResponse = await AuthService.register(email, password)
		toastr.success('Регистрация', 'Успешно завершено')
		return response.data
	} catch (error) {
		toastError(error)
		return thunkAPI.rejectWithValue(error)
	}
})

export const login = createAsyncThunk<
	IAuthResponseData,
	InterfaceEmailPassword
>('auth/login', async ({ email, password }, thunkAPI) => {
	try {
		const response: IAuthResponse = await AuthService.login(email, password)
		toastr.success('Вход', 'Успешно завершено')
		return response.data
	} catch (error) {
		toastError(error)
		return thunkAPI.rejectWithValue(error)
	}
})

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponseData>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response: IAuthResponse = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error('Выход', 'Сессия завершена, пожалуйста, войдите снова')
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
