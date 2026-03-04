import { IActor, IGenre, IMovie } from '@/shared/types/movie.types'

export const mockGenresData: IGenre[] = [
	{
		_id: 'g1',
		name: 'Боевик',
		slug: 'action',
		description: 'Боевики',
		icon: 'MdLocalFireDepartment',
	},
	{
		_id: 'g2',
		name: 'Драма',
		slug: 'drama',
		description: 'Драмы',
		icon: 'MdTheaters',
	},
	{
		_id: 'g3',
		name: 'Фантастика',
		slug: 'sci-fi',
		description: 'Научная фантастика',
		icon: 'MdOutlineWarning',
	},
	{
		_id: 'g4',
		name: 'Триллер',
		slug: 'thriller',
		description: 'Триллеры',
		icon: 'MdOutlet',
	},
]

export const mockActorsData: IActor[] = [
	{
		_id: 'a1',
		photo: '/posters/actors/dicaprio.webp',
		name: 'Леонардо ДиКаприо',
		countMovies: 12,
		slug: 'leonardo-dicaprio',
	},
	{
		_id: 'a2',
		photo: '/posters/actors/hardy.webp',
		name: 'Том Харди',
		countMovies: 8,
		slug: 'tom-hardy',
	},
	{
		_id: 'a3',
		photo: '/posters/actors/johansson.webp',
		name: 'Скарлетт Йоханссон',
		countMovies: 15,
		slug: 'scarlett-johansson',
	},
	{
		_id: 'a4',
		photo: '/posters/actors/evans.webp',
		name: 'Крис Эванс',
		countMovies: 10,
		slug: 'chris-evans',
	},
]

export const mockMoviesData: IMovie[] = [
	{
		_id: 'm1',
		poster: '/posters/movies/inception.webp',
		bigPoster: '/posters/movies/inception-full.jpg',
		title: 'Начало',
		parameters: { year: 2010, duration: 148, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[2]],
		actors: [mockActorsData[0], mockActorsData[1]],
		countOpened: 12500,
		videoUrl: 'https://www.youtube.com/embed/YoHD9XEInc0 ',
		rating: 8.8,
		slug: 'inception',
	},
	{
		_id: 'm2',
		poster: '/posters/movies/interstellar.webp',
		bigPoster: '/posters/movies/interstellar-full.jpg',
		title: 'Интерстеллар',
		parameters: { year: 2014, duration: 169, country: 'США' },
		genres: [mockGenresData[2], mockGenresData[1]],
		actors: [mockActorsData[0]],
		countOpened: 9800,
		videoUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E ',
		rating: 8.6,
		slug: 'interstellar',
	},
	{
		_id: 'm3',
		poster: '/posters/movies/dark-knight.webp',
		bigPoster: '/posters/movies/dark-knight-full.webp',
		title: 'Тёмный рыцарь',
		parameters: { year: 2008, duration: 152, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[1]],
		actors: [mockActorsData[0], mockActorsData[1]],
		countOpened: 21000,
		videoUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY ',
		rating: 9.0,
		slug: 'dark-knight',
	},
	{
		_id: 'm4',
		poster: '/posters/movies/avengers.webp',
		bigPoster: '/posters/movies/avengers-full.jpg',
		title: 'Мстители: Финал',
		parameters: { year: 2019, duration: 181, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[2]],
		actors: [mockActorsData[3], mockActorsData[2]],
		countOpened: 35000,
		videoUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c ',
		rating: 8.4,
		slug: 'avengers-endgame',
	},
	{
		_id: 'm5',
		poster: '/posters/movies/matrix.jpg',
		bigPoster: '/posters/movies/matrix-full.jpg',
		title: 'Матрица',
		parameters: { year: 1999, duration: 136, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[2]],
		actors: [mockActorsData[1]],
		countOpened: 18000,
		videoUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8 ',
		rating: 8.7,
		slug: 'matrix',
	},
	{
		_id: 'm6',
		poster: '/posters/movies/pulp-fiction.webp',
		bigPoster: '/posters/movies/pulp-fiction-full.jpg',
		title: 'Криминальное чтиво',
		parameters: { year: 1994, duration: 154, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[1]],
		actors: [mockActorsData[0]],
		countOpened: 15000,
		videoUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY ',
		rating: 8.9,
		slug: 'pulp-fiction',
	},
	{
		_id: 'm7',
		poster: '/posters/movies/dune.webp',
		bigPoster: '/posters/movies/dune-full.jpg',
		title: 'Дюна',
		parameters: { year: 2021, duration: 155, country: 'США' },
		genres: [mockGenresData[2], mockGenresData[0]],
		actors: [mockActorsData[1]],
		countOpened: 8900,
		videoUrl: 'https://www.youtube.com/embed/n9xhJrPXop4 ',
		rating: 8.0,
		slug: 'dune',
	},
	{
		_id: 'm8',
		poster: '/posters/movies/blade-runner.webp',
		bigPoster: '/posters/movies/blade-runner-full.webp',
		title: 'Бегущий по лезвию 2049',
		parameters: { year: 2017, duration: 164, country: 'США' },
		genres: [mockGenresData[2], mockGenresData[3]],
		actors: [mockActorsData[0]],
		countOpened: 7600,
		videoUrl: 'https://www.youtube.com/embed/gCcx85zbxz4 ',
		rating: 8.0,
		slug: 'blade-runner-2049',
	},
]

// Хелперы поиска
export const getMovieBySlug = (slug: string) =>
	mockMoviesData.find((m) => m.slug === slug)

export const getMoviesByGenre = (genreId: string) =>
	mockMoviesData.filter((m) => m.genres.some((g) => g._id === genreId))

export const getMoviesByActor = (actorId: string) =>
	mockMoviesData.filter((m) => m.actors.some((a) => a._id === actorId))

export const searchMovies = (term: string) =>
	mockMoviesData.filter((m) =>
		m.title.toLowerCase().includes(term.toLowerCase())
	)

export const getMostPopular = (limit: number = 7) =>
	[...mockMoviesData]
		.sort((a, b) => b.countOpened - a.countOpened)
		.slice(0, limit)

export const getFreshMovies = () =>
	[...mockMoviesData].sort((a, b) => b.parameters.year - a.parameters.year)
