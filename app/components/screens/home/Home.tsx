import { FC } from 'react'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import { Meta } from '@/utils/meta'

import { IHome } from './home.types'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Смотреть фильмы онлайн"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Смотреть фильмы онлайн"
				className="text-gray-500 mb-8 text-xl"
			/>

			{slides.length && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Сейчас популярно" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>

			<div>
				<SubHeading title="Лучшие актёры" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
