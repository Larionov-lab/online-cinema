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
		photo: '/posters/actors/charlize.jpeg',
		name: 'Шарлиз Терон',
		countMovies: 12,
		slug: 'charlize-theron',
	},
	{
		_id: 'a2',
		photo: '/posters/actors/donnie.jpg',
		name: 'Донни Йен',
		countMovies: 8,
		slug: 'donnie-yen',
	},
	{
		_id: 'a3',
		photo: '/posters/actors/holland.jpg',
		name: 'Том Холланд',
		countMovies: 15,
		slug: 'tom-holland',
	},
	{
		_id: 'a4',
		photo: '/posters/actors/keanu.jpg',
		name: 'Киану Ривз',
		countMovies: 10,
		slug: 'keanu-reeves',
	},
	{
		_id: 'a5',
		photo: '/posters/actors/laurence.jpeg',
		name: 'Лоуренс Фишбёрн',
		countMovies: 9,
		slug: 'laurence-fishburne',
	},
	{
		_id: 'a6',
		photo: '/posters/actors/martin.jpg',
		name: 'Мартин Фримен',
		countMovies: 11,
		slug: 'martin-freeman',
	},
	{
		_id: 'a7',
		photo: '/posters/actors/sam.jpg',
		name: 'Сэм Уортингтон',
		countMovies: 7,
		slug: 'sam-worthington',
	},
	{
		_id: 'a8',
		photo: '/posters/actors/simu-liu.jpg',
		name: 'Симу Лю',
		countMovies: 6,
		slug: 'simu-liu',
	},
	{
		_id: 'a9',
		photo: '/posters/actors/stephanie.jpg',
		name: 'Стефани Беатриц',
		countMovies: 5,
		slug: 'stephanie-beatriz',
	},
	{
		_id: 'a10',
		photo: '/posters/actors/tom-hardy.jpg',
		name: 'Том Харди',
		countMovies: 14,
		slug: 'tom-hardy',
	},
	{
		_id: 'a11',
		photo: '/posters/actors/uncle.jpg',
		name: 'Юэнь Бяо',
		countMovies: 8,
		slug: 'yuen-biao',
	},
	{
		_id: 'a12',
		photo: '/posters/actors/will.jpg',
		name: 'Уилл Смит',
		countMovies: 13,
		slug: 'will-smith',
	},
]

export const mockMoviesData: IMovie[] = [
	{
		_id: 'm1',
		poster: '/posters/movies/avatar-small.jpg',
		bigPoster: '/posters/movies/avatar.jpg',
		title: 'Аватар',
		parameters: { year: 2009, duration: 162, country: 'США' },
		genres: [mockGenresData[2], mockGenresData[0]],
		actors: [mockActorsData[6], mockActorsData[4]],
		countOpened: 35000,
		videoUrl: '/posters/movies/avatar.mp4',
		rating: 8.8,
		slug: 'avatar',
	},
	{
		_id: 'm2',
		poster: '/posters/movies/encanto.jpg',
		bigPoster: '/posters/movies/encanto-big.jpg',
		title: 'Энканто',
		parameters: { year: 2021, duration: 109, country: 'США' },
		genres: [mockGenresData[1], mockGenresData[2]],
		actors: [mockActorsData[8]],
		countOpened: 12000,
		videoUrl: '/posters/movies/encanto.mp4',
		rating: 8.0,
		slug: 'encanto',
	},
	{
		_id: 'm3',
		poster: '/posters/movies/hobbit-small.jpg',
		bigPoster: '/posters/movies/hobbit.jpg',
		title: 'Хоббит: Нежданное путешествие',
		parameters: { year: 2012, duration: 169, country: 'Новая Зеландия' },
		genres: [mockGenresData[2], mockGenresData[0]],
		actors: [mockActorsData[5]],
		countOpened: 28000,
		videoUrl: '/posters/movies/hobbit-1.mp4',
		rating: 8.1,
		slug: 'hobbit',
	},
	{
		_id: 'm4',
		poster: '/posters/movies/i-am-legendd.jpg',
		bigPoster: '/posters/movies/i-am-legend-big.jpg',
		title: 'Я — легенда',
		parameters: { year: 2007, duration: 101, country: 'США' },
		genres: [mockGenresData[3], mockGenresData[2]],
		actors: [mockActorsData[11]],
		countOpened: 22000,
		videoUrl: '/posters/movies/i-am-legend.mp4',
		rating: 7.9,
		slug: 'i-am-legend',
	},
	{
		_id: 'm5',
		poster: '/posters/movies/ip-man-small.jpg',
		bigPoster: '/posters/movies/ip-man.jpg',
		title: 'Ип Ман',
		parameters: { year: 2008, duration: 106, country: 'Гонконг' },
		genres: [mockGenresData[0], mockGenresData[1]],
		actors: [mockActorsData[1], mockActorsData[10]],
		countOpened: 18000,
		videoUrl: '/posters/movies/ip-man.mp4',
		rating: 8.0,
		slug: 'ip-man',
	},
	{
		_id: 'm6',
		poster: '/posters/movies/john-wick-small.jpg',
		bigPoster: '/posters/movies/john-wick.jpg',
		title: 'Джон Уик',
		parameters: { year: 2014, duration: 101, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[3]],
		actors: [mockActorsData[3], mockActorsData[0]],
		countOpened: 32000,
		videoUrl: '/posters/movies/john-wick.mp4',
		rating: 8.4,
		slug: 'john-wick',
	},
	{
		_id: 'm7',
		poster: '/posters/movies/mad-max-small.jpg',
		bigPoster: '/posters/movies/mad-max.jpg',
		title: 'Безумный Макс: Дорога ярости',
		parameters: { year: 2015, duration: 120, country: 'Австралия' },
		genres: [mockGenresData[0], mockGenresData[2]],
		actors: [mockActorsData[0], mockActorsData[9]],
		countOpened: 25000,
		videoUrl: '/posters/movies/mad-max.mp4',
		rating: 8.5,
		slug: 'mad-max',
	},
	{
		_id: 'm8',
		poster: '/posters/movies/red-dog-small.jpg',
		bigPoster: '/posters/movies/red-dog.jpg',
		title: 'Красный пёс',
		parameters: { year: 2011, duration: 92, country: 'Австралия' },
		genres: [mockGenresData[1], mockGenresData[2]],
		actors: [],
		countOpened: 8000,
		videoUrl: '/posters/movies/red-dog.mp4',
		rating: 7.8,
		slug: 'red-dog',
	},
	{
		_id: 'm9',
		poster: '/posters/movies/shang-chi-small.jpg',
		bigPoster: '/posters/movies/shan-chi.jpg',
		title: 'Шан-Чи и легенда десяти колец',
		parameters: { year: 2021, duration: 132, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[2]],
		actors: [mockActorsData[7], mockActorsData[2]],
		countOpened: 15000,
		videoUrl: '/posters/movies/shang-chi.mp4',
		rating: 7.9,
		slug: 'shang-chi',
	},
	{
		_id: 'm10',
		poster: '/posters/movies/spider-man-small.jpg',
		bigPoster: '/posters/movies/spider-man.jpg',
		title: 'Человек-паук: Нет пути домой',
		parameters: { year: 2021, duration: 148, country: 'США' },
		genres: [mockGenresData[0], mockGenresData[2]],
		actors: [mockActorsData[2], mockActorsData[3]],
		countOpened: 40000,
		videoUrl: '/posters/movies/spider-man.mp4',
		rating: 8.3,
		slug: 'spider-man',
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
