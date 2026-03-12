import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

import {
	getMostPopular,
	getMovieBySlug,
	getMoviesByActor,
	mockMoviesData,
	searchMovies,
} from '../data/movies.data'
import { mockDelay } from '../helpers/delay'
import { generateId } from '../helpers/id-generator'
import { mockResponse } from '../helpers/response'

export const MovieMockService = {
	async getMovies(searchTerm?: string) {
		await mockDelay(300)
		const movies = searchTerm ? searchMovies(searchTerm) : mockMoviesData
		return mockResponse(movies)
	},

	async getBySlug(slug: string) {
		await mockDelay(200)
		const movie = getMovieBySlug(slug)
		if (!movie) throw new Error('Movie not found')
		return mockResponse(movie)
	},

	async getByActor(actorId: string) {
		await mockDelay(250)
		return mockResponse(getMoviesByActor(actorId))
	},

	async getByGenres(genreIds: string[]) {
		await mockDelay(250)
		const movies = mockMoviesData.filter((m) =>
			m.genres.some((g) => genreIds.includes(g._id))
		)
		return mockResponse(movies)
	},

	async getMostPopularMovies() {
		await mockDelay(200)
		return getMostPopular()
	},

	async create() {
		await mockDelay(500)
		const newId = generateId()
		return mockResponse(newId)
	},

	async updateCountOpened(slug: string) {
		await mockDelay(100)
		const movie = getMovieBySlug(slug)
		if (movie) movie.countOpened++
		return mockResponse({ success: true })
	},

	async getById(id: string) {
		await mockDelay(200)
		const movie = mockMoviesData.find((m) => m._id === id)
		if (!movie) throw new Error('Movie not found')
		const editData: IMovieEditInput = {
			...movie,
			genres: movie.genres.map((g) => g._id),
			actors: movie.actors.map((a) => a._id),
		}
		return mockResponse(editData)
	},

	async update(id: string, data: IMovieEditInput) {
		await mockDelay(400)
		return mockResponse(id)
	},

	async delete(id: string) {
		await mockDelay(300)
		return mockResponse(id)
	},
}
