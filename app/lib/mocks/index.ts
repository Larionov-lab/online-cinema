// Хелперы
export { mockDelay } from './helpers/delay'
export { mockResponse } from './helpers/response'
export { generateId } from './helpers/id-generator'

// Данные
export { 
  mockMoviesData, 
  mockGenresData, 
  mockActorsData,
  mockUser,
  mockCollections,
  getMovieBySlug,
  getMoviesByGenre,
  getMoviesByActor,
  searchMovies,
  getMostPopular,
  getFreshMovies,
} from './data/movies.data'

// Сервисы
export { MovieMockService } from './services/movie.mock'
export { GenreMockService } from './services/genre.mock'
export { ActorMockService } from './services/actor.mock'
export { AuthMockService } from './services/auth.mock'
export { UserMockService } from './services/user.mock'
export { AdminMockService } from './services/admin.mock'
export { RatingMockService } from './services/rating.mock'
export { FileMockService } from './services/file.mock'
