import { IProfileInput } from '@/screens/profile/profile.interface'

import { IMovie } from '@/shared/types/movie.types'

import { mockMoviesData } from '../data/movies.data'
import { mockUser } from '../data/users.data'
import { mockDelay } from '../helpers/delay'
import { mockResponse } from '../helpers/response'

let favoriteIds: string[] = ['m1', 'm3']

export const UserMockService = {
	async getProfile() {
		await mockDelay(200)
		return mockResponse(mockUser)
	},

	async updateProfile(data: IProfileInput) {
		await mockDelay(300)
		return mockResponse('Profile updated')
	},

	async getUsers(searchTerm?: string) {
		await mockDelay(250)
		return mockResponse([mockUser])
	},

	async getUser(id: string) {
		await mockDelay(150)
		return mockResponse(mockUser)
	},

	async updateUser(id: string, data: IProfileInput) {
		await mockDelay(300)
		return mockResponse('User updated')
	},

	async deleteUser(id: string) {
		await mockDelay(250)
		return mockResponse('User deleted')
	},

	async getFavorites(): Promise<IMovie[]> {
		await mockDelay(300)
		const favorites = mockMoviesData.filter((m) => favoriteIds.includes(m._id))
		return favorites
	},

	async toggleFavorite(movieId: string) {
		await mockDelay(200)
		if (favoriteIds.includes(movieId)) {
			favoriteIds = favoriteIds.filter((id) => id !== movieId)
		} else {
			favoriteIds.push(movieId)
		}
		return mockResponse({ success: true })
	},
}
