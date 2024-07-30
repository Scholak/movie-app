// Library Imports
import { motion } from 'framer-motion'
import { FaRegClock } from 'react-icons/fa6'
import { FaRegCalendar } from 'react-icons/fa'

// Component Imports
import Typography from '@/components/atoms/Typography'
import Information from '@/components/molecules/Information'

// Utility Imports
import { moveFromLeft } from '@/utils/animations'

// Type Imports
import { IMovieDetail } from '@/types/movieType'

// Asset Imports
import styles from './MovieOverview.module.scss'

type IMovieOverviewProps = {
	/** Movie detail. */
	detail: IMovieDetail | null
}

const MovieOverview = ({ detail }: IMovieOverviewProps) => {
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
				Overview
			</Typography>
			{/* Movie Title */}
			<Typography
				element='h1'
				size='4xl'
				weight='bold'
				className={styles.title}
			>
				{detail?.Title}
			</Typography>
			{/* Movie General Info */}
			<div className={styles.upperContent}>
				<div className={styles.info}>
					<Typography>IMDB: </Typography>
					<Typography weight='bold'>{detail?.imdbRating}</Typography>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.info}>
					<FaRegClock />
					<Typography>{detail?.Runtime}</Typography>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.info}>
					<FaRegCalendar />
					<Typography>{detail?.Year}</Typography>
				</div>
			</div>
			{/* Movie Plot */}
			<Typography align='justify'>{detail?.Plot}</Typography>
			{/* Movie Type */}
			<Information
				info='Type'
				value={detail?.Type}
			/>
			{/* Movie Genres */}
			<Information
				info='Genre'
				value={detail?.Genre}
			/>
			{/* Movie Release Date */}
			<Information
				info='Release At'
				value={detail?.Released}
			/>
			{/* Movie Country */}
			<Information
				info='Country'
				value={detail?.Country}
			/>
		</motion.div>
	)
}

export default MovieOverview
