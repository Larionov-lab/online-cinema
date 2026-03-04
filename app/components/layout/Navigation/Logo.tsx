import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-8 block text-3xl font-bold text-white/90">
				🎬 <span className="text-[#E30B13]">M</span>ovieApp
			</a>
		</Link>
	)
}

export default Logo
