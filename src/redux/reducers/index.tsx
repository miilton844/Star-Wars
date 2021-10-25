import { chooseFilm } from "./chooseFilmReducer";
import { combineReducers } from "redux";

const mergredReduers = combineReducers({
    chosenFilm: chooseFilm,
});

export { mergredReduers };
export type RootState = ReturnType<typeof mergredReduers>;
