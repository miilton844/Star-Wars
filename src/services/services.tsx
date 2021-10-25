import axios from 'axios';
import { ApiResponse } from '../interfaces/interfaces';

const getFilms = async () => {
    const data = await axios.get<ApiResponse>('https://swapi.dev/api/films/')
        .then((response) => {
            return (response.data.results);
        }).catch((error) => {
            return error.response;
        })
    return data;
};

export { getFilms };