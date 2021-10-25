interface FilmDetails {
    title: string
    opening_crawl: string
    episode_id: number
}

interface ApiResponse {
    results: object
}

interface ChosenFilmIndex {
    type: string,
    payload: number
}

interface FavoriteMovies {
    [i: string]: boolean
}

export type { FilmDetails, ApiResponse, ChosenFilmIndex, FavoriteMovies };
