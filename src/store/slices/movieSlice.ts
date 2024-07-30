// Library Imports
import { createSlice } from '@reduxjs/toolkit'

// Store Imports
import { fetchMovieDetail, fetchMovies } from '@/store/thunks/movieThunks'

// Type Imports
import { IMovie, IMovieDetail } from '@/types/movieType'

export interface MovieState {
	isLoading: boolean
	isFetched: boolean
	movies: IMovie[]
	detail: IMovieDetail | any
	totalResults: number
	currentPage: number
	error: string
}

const initialState: MovieState = {
	isLoading: false,
	isFetched: false,
	movies: [],
	detail: null,
	totalResults: 0,
	currentPage: 1,
	error: '',
}

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		resetMovieError: state => {
			state.error = ''
		},
	},
	extraReducers: builder => {
		// Movie List Reducers
		builder.addCase(fetchMovies.pending, state => {
			state.isLoading = true
			state.isFetched = false
		})
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.isLoading = false
			state.isFetched = true
			state.movies = action.payload.Search
			state.totalResults = action.payload.totalResults
			state.currentPage = action.payload.currentPage
		})
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.isLoading = false
			state.isFetched = true
			state.error = action.payload as string
		}),
			// Movie Detail Reducers
			builder.addCase(fetchMovieDetail.pending, state => {
				state.isLoading = true
				state.isFetched = false
			})
		builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
			state.isLoading = false
			state.isFetched = true
			state.detail = action.payload
		})
		builder.addCase(fetchMovieDetail.rejected, (state, action) => {
			state.isLoading = false
			state.isFetched = true
			state.error = action.payload as string
		})
	},
})

export const { resetMovieError } = movieSlice.actions

export default movieSlice.reducer
