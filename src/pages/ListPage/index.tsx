// Library Imports
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Component Imports
import Filters from '@/components/organisms/Filters'
import Typography from '@/components/atoms/Typography'
import Pagination from '@/components/molecules/Pagination'
import MovieGrid from '@/components/organisms/MovieGrid'

// Store Imports
import { fetchMovies } from '@/store/thunks/movieThunks'
import { resetMovieError } from '@/store/slices/movieSlice'

// Type Imports
import { IFilterTypes } from '@/types/filterTypes'
import type { AppDispatch, RootState } from '@/store'

// Asset Imports
import styles from './ListPage.module.scss'

const ListPage = () => {
	const dispatch = useDispatch<AppDispatch>()
	const [searchParams] = useSearchParams()

	const { movies, isLoading, currentPage, totalResults, error } = useSelector((state: RootState) => state.movies)

	if (error) {
		toast.error(error)
		dispatch(resetMovieError())
	}

	const handleFetchMovies = (page: number) => {
		dispatch(
			fetchMovies({
				page: String(page),
				search: searchParams.get('search'),
				year: searchParams.get('year'),
				type: searchParams.get('type') as IFilterTypes,
			}),
		)
	}

	useEffect(() => {
		const values: any = {}

		if (searchParams.get('search')) values.search = searchParams.get('search')
		if (searchParams.get('year')) values.year = searchParams.get('year')
		if (searchParams.get('type')) values.type = searchParams.get('type')

		dispatch(fetchMovies(values))
	}, [searchParams.get('search'), searchParams.get('year'), searchParams.get('type')])

	return (
		<div className={styles.container}>
			<Typography
				element='h1'
				size='4xl'
				weight='bold'
				align='center'
			>
				Movie App
			</Typography>
			<Filters />
			<MovieGrid movies={movies} />
			<Pagination
				currentPage={currentPage}
				onPageChange={handleFetchMovies}
				hasPrevPage={!isLoading && currentPage > 1}
				hasNextPage={!isLoading && Math.ceil(totalResults / 10) > currentPage}
				className={styles.pagination}
			/>
		</div>
	)
}

export default ListPage
