// Library Imports
import { motion } from 'framer-motion'

// Component Imports
import Typography from '@/components/atoms/Typography'
import Information from '@/components/molecules/Information'

// Utility Imports
import { moveFromLeft } from '@/utils/animations'

// Type Imports
import { IMovieDetail } from '@/types/movieType'

// Asset Imports
import styles from './MovieRatings.module.scss'

type IMovieRatingsProps = {
	/** Movie detail. */
	detail: IMovieDetail | null
}

const MovieRatings = ({ detail }: IMovieRatingsProps) => {
	return (
		<motion.div
			variants={moveFromLeft}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: 0.5 }}
			className={styles.container}
		>
			{/* Tab Title */}
			<Typography
				size='xl'
				weight='semibold'
			>
				Ratings
			</Typography>
			{/* Movie Rating Title */}
			<Typography
				size='4xl'
				className={styles.title}
				capitalize
			>
				Ratings for{' '}
				<Typography
					element='span'
					size='4xl'
					weight='bold'
				>
					'{detail?.Title}'
				</Typography>
			</Typography>
			{/* Meta Score */}
			<Information
				info='Meta Score'
				value={detail?.Metascore}
			/>
			{/* IMDB Rating */}
			<Information
				info='IMDB Rating'
				value={detail?.imdbRating}
			/>
			{/* IMDB voting */}
			<Information
				info='IMDB votes'
				value={detail?.imdbVotes}
			/>
			{/* Other Ratings */}
			{detail?.Ratings.map((rating, index) => (
				<Information
					key={index}
					info={rating.Source}
					value={rating.Value}
				/>
			))}
		</motion.div>
	)
}

export default MovieRatings
