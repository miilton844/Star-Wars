import { ChosenFilmIndex } from '../../interfaces/interfaces';

const chooseFilm = (state: number = 0, action: ChosenFilmIndex) => {
    switch (action.type) {
        case 'chooseFilm': {
            return state = action.payload;
        }
        default:
            return state;
    }
};

export { chooseFilm };