// Library Imports
import { createAsyncThunk } from '@reduxjs/toolkit'

// Utility Imports
import { api } from '@/lib/api'

// Type Imports
import { IFilterTypes } from '@/types/filterTypes'

export const fetchMovies = createAsyncThunk(
	'movies/fetch',
	async (
		{
			search = 'Pokemon',
			page = '1',
			type = 'movie',
			year,
		}: { search?: string | null; page?: string | null; type?: IFilterTypes; year?: string | null },
		{ rejectWithValue },
	) => {
		try {
			const response = await api.get('/', { params: { s: search, page, type, y: year } })
			if (response.data?.Response === 'False') throw new Error(response.data.Error)

			return { ...response.data, currentPage: page }
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	},
)

export const fetchMovieDetail = createAsyncThunk(
	'movies/detail',
	async ({ id }: { id: string }, { rejectWithValue }) => {
		try {
			const response = await api.get('/', { params: { i: id } })
			if (response.data?.Response === 'False') throw new Error(response.data.Error)

			return response.data
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	},
)
