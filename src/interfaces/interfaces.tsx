interface FilmDetails {
    title: string
    opening_crawl: string
    episode_id: number
}

interface ApiResponse {
    results: object
}



export type { FilmDetails, ApiResponse }
