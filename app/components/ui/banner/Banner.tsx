import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	imagePath: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ imagePath, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				alt=""
				src={imagePath}
				draggable={false}
				layout="fill"
				className="object-top object-cover pointer-events-none"
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
