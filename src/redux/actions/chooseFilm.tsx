const chooseFilm = (film: number) => {
    return {
        type: 'chooseFilm',
        payload: film
    }

}

export { chooseFilm }