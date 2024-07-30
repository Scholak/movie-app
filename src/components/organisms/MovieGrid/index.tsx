// Library Imports
import { AnimatePresence } from 'framer-motion'

// Component Imports
import MovieCard from '@/components/molecules/MovieCard'

// Type Imports
import { IMovie } from '@/types/movieType'

// Asset Imports
import styles from './MovieGrid.module.scss'

type IMovieGridProps = {
	/** Movie list. */
	movies: IMovie[]
}

const MovieGrid = ({ movies }: IMovieGridProps) => {
	return (
		<div className={styles.container}>
			<AnimatePresence mode='wait'>
				{movies.map((movie, index) => (
					<MovieCard
						key={movie.imdbID}
						movie={movie}
						delay={index * 0.05}
					/>
				))}
			</AnimatePresence>
		</div>
	)
}

export default MovieGrid
