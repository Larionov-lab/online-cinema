// Хелперы
export { mockDelay } from './helpers/delay'
export { generateId } from './helpers/id-generator'
export { mockResponse } from './helpers/response'

// Данные
export {
	getFreshMovies,
	getMostPopular,
	getMovieBySlug,
	getMoviesByActor,
	getMoviesByGenre,
	mockActorsData,
	mockGenresData,
	mockMoviesData,
	searchMovies,
} from './data/movies.data'

// Сервисы
export { ActorMockService } from './services/actor.mock'
export { AdminMockService } from './services/admin.mock'
export { AuthMockService } from './services/auth.mock'
export { FileMockService } from './services/file.mock'
export { GenreMockService } from './services/genre.mock'
export { MovieMockService } from './services/movie.mock'
export { RatingMockService } from './services/rating.mock'
export { UserMockService } from './services/user.mock'
