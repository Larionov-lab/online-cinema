import { ICollection } from '@/screens/collections/collections.types'

import { mockGenresData } from './movies.data'

// Укажи здесь какие форматы у каких жанров
const genreImageMap: Record<string, string> = {
	action: '/posters/collections/action.jpeg',
	drama: '/posters/collections/drama.jpg',
	'sci-fi': '/posters/collections/sci-fi.png',
	thriller: '/posters/collections/thriller.jpg',
}

export const mockCollections: ICollection[] = mockGenresData.map((g) => ({
	_id: g._id,
	title: g.name,
	slug: g.slug,
	image: genreImageMap[g.slug] || `/posters/collections/${g.slug}.jpg`,
}))
