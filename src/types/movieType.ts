export type IMovie = {
	Poster: string
	Title: string
	Type: string
	Year: string
	imdbID: string
}

export type IMovieDetail = {
	Title: string
	Year: string
	Rated: string
	Released: string
	Runtime: string
	BoxOffice: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Production: string
	Ratings: {
		Source: string
		Value: string
	}[]
	Metascore: string
	imdbRating: string
	imdbVotes: string
	imdbID: string
	Type: string
	totalSeasons: string
	Response: string
}
