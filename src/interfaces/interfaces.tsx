interface FilmDetails {
    title: string
    opening_crawl: string
    episode_id: number
}

interface ApiResponse {
    results: object
}

interface chosenFilmIndex {
    type: string,
    payload: number
}

export type { FilmDetails, ApiResponse, chosenFilmIndex };
