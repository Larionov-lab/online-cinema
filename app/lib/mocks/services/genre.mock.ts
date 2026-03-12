import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'

import { mockCollections } from '../data/collections.data'
import { mockGenresData } from '../data/movies.data'
import { mockDelay } from '../helpers/delay'
import { generateId } from '../helpers/id-generator'
import { mockResponse } from '../helpers/response'

export const GenreMockService = {
	async getAll(searchTerm?: string) {
		await mockDelay(200)
		const genres = searchTerm
			? mockGenresData.filter((g) =>
					g.name.toLowerCase().includes(searchTerm.toLowerCase())
			  )
			: mockGenresData
		return mockResponse(genres)
	},

	async getBySlug(slug: string) {
		await mockDelay(150)
		const genre = mockGenresData.find((g) => g.slug === slug)
		if (!genre) throw new Error('Genre not found')
		return mockResponse(genre)
	},

	async getPopularGenres(limit: number = 4) {
		await mockDelay(150)
		return mockResponse(mockGenresData.slice(0, limit))
	},

	async getCollections() {
		await mockDelay(250)
		return mockResponse(mockCollections)
	},

	async create() {
		await mockDelay(400)
		return mockResponse(generateId())
	},

	async getById(id: string) {
		await mockDelay(150)
		const genre = mockGenresData.find((g) => g._id === id)
		if (!genre) throw new Error('Genre not found')
		const editData: IGenreEditInput = { ...genre }
		return mockResponse(editData)
	},

	async update(id: string, data: IGenreEditInput) {
		await mockDelay(300)
		return mockResponse(id)
	},

	async delete(id: string) {
		await mockDelay(250)
		return mockResponse(id)
	},
}
