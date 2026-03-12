import { useQuery } from 'react-query'

import { IMovie } from '@/shared/types/movie.types'

import { UserService } from '@/services/user/user.service'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery<IMovie[]>('Favorite movies', () => UserService.getFavorites())

	return { isLoading, favoritesMovies, refetch }
}
