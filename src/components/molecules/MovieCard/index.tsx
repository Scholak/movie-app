// Library Imports
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaRegCalendar } from 'react-icons/fa'

// Component Imports
import Image from '@/components/atoms/Image'
import Typography from '@/components/atoms/Typography'

// Utility Imports
import { moveFromBottom } from '@/utils/animations'

// Type Imports
import { IMovie } from '@/types/movieType'

// Asset Imports
import styles from './MovieCard.module.scss'

type IMovieCardProps = {
	/** Movie object. */
	movie: IMovie
	/** Movie card aniamtion delay. */
	delay: number
}

const MovieCard = ({ movie, delay }: IMovieCardProps) => {
	return (
		<motion.div
			variants={moveFromBottom}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: 0.35, delay }}
			className={styles.container}
		>
			<Link to={`/${movie.imdbID}`}>
				<Image
					src={movie.Poster}
					alt='image'
					mode='cover'
					className={styles.poster}
				/>
				<div className={styles.overlay}></div>
				<div className={styles.content}>
					{/* Movie Release Year */}
					<Typography className={styles.year}>
						{movie.Year}
						<FaRegCalendar />
					</Typography>
					{/* Movie Title */}
					<Typography
						size='lg'
						weight='semibold'
					>
						{movie.Title}
					</Typography>
				</div>
				<div className={styles.id}>
					<Typography
						size='xs'
						weight='medium'
					>
						{movie.imdbID}
					</Typography>
				</div>
			</Link>
		</motion.div>
	)
}

export default MovieCard
