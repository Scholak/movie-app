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
import styles from './MovieCastAndAwards.module.scss'

type IMovieCastAndAwardsProps = {
	/** Movie detail. */
	detail: IMovieDetail | null
}

const MovieCastAndAwards = ({ detail }: IMovieCastAndAwardsProps) => {
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
				Cast & Awards
			</Typography>
			{/* Movie Cast & Awards Title */}
			<Typography
				size='4xl'
				className={styles.title}
				capitalize
			>
				cast & awards for{' '}
				<Typography
					element='span'
					size='4xl'
					weight='bold'
				>
					'{detail?.Title}'
				</Typography>
			</Typography>
			{/* Movie Awards */}
			<Information
				info='Awards'
				value={detail?.Awards}
			/>
			{/* Movie Director */}
			<Information
				info='Director'
				value={detail?.Director}
			/>
			{/* Movie Actors */}
			<Information
				info='Actors'
				value={detail?.Actors}
			/>
			{/* Movie Writer */}
			<Information
				info='Writer'
				value={detail?.Writer}
			/>
			{/* Movie Production */}
			<Information
				info='Production'
				value={detail?.Production}
			/>
			{/* Movie BoxOffice */}
			<Information
				info='Box Office'
				value={detail?.BoxOffice}
			/>
		</motion.div>
	)
}

export default MovieCastAndAwards
