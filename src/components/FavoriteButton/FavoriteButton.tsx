import { useState, useEffect } from 'react'
import { useTypedSelector } from "../../redux/hooks/useTypeSelector";
import { FilmDetails } from '../../interfaces/interfaces'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './FavoriteButton.css'

interface Props {
    filmsInfo: FilmDetails[];
}

const FavoriteButton: React.FC<Props> = (props) => {
    const [favoriteMovies, setFavoriteMovies] = useState<{ [i: string]: boolean }>({});
    const [favoriteIconTag, setFavoriteIconTag] = useState<string>('');

    const chosenFilm = useTypedSelector(state => {
        return state.chosenFilm;
    });

    useEffect(() => {
        if (Object.keys(JSON.parse(localStorage.getItem("favoritesObj") || '{}')).length === 0) {
            let favoritesObj: { [i: string]: boolean } = {};
            for (let i = 0; i < props.filmsInfo.length; i++) {
                favoritesObj[i.toString()] = false;
            }
            localStorage.setItem("favoritesObj", JSON.stringify(favoritesObj));
        }
        setFavoriteMovies(JSON.parse(localStorage.getItem("favoritesObj") || '{}'));
    }, [props.filmsInfo.length]);

    useEffect(() => {
        setFavoriteIconTag(favoriteMovies[chosenFilm.toString()] === true ? "heart heart-favorite" : "heart");
    }, [chosenFilm, favoriteMovies]);

    const handleClick = () => {
        let updatedFavorites: { [i: string]: boolean } = { ...favoriteMovies };
        updatedFavorites[chosenFilm.toString()] = !updatedFavorites[chosenFilm.toString()];
        setFavoriteMovies({ ...updatedFavorites });
        localStorage.setItem("favoritesObj", JSON.stringify(updatedFavorites));
    };

    return (
        <div >
            <FontAwesomeIcon icon={faHeart} className={favoriteIconTag} onClick={handleClick} />
        </div >
    );
}

export { FavoriteButton };