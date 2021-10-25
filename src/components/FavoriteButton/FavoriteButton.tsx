import { useState, useEffect } from 'react'
import { useTypedSelector } from "../../redux/hooks/useTypeSelector";
import { FilmDetails } from '../../interfaces/interfaces'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './FavoriteButton.css'

interface Props {
    filmsInfo: FilmDetails[];
}

const FavoriteButton: React.FC<Props> = (props)=> {
    const [favoriteMovies,setFavoriteMovies] = useState({});
    const [favoriteIconTag,setFavoriteIconTag] = useState('');
    
    const chosenFilm = useTypedSelector(state => {
        return state.chosenFilm;
    });
    
    useEffect(() => {
        if (Object.keys(JSON.parse(localStorage.getItem("favoritesObj")||'{}')).length===0) {
            let favoritesObj: any = {};
            for (let i = 0; i < props.filmsInfo.length; i++) {
                const keyName: string = i.toString();
                favoritesObj[keyName] = false;
            }
            localStorage.setItem("favoritesObj", JSON.stringify(favoritesObj));
        }
        const favoriteMovies = JSON.parse(localStorage.getItem("favoritesObj")||'{}');
        setFavoriteMovies(favoriteMovies);
    }, [props.filmsInfo.length]);

    useEffect(() => {
        let favoriteMoviesArray:any = {...favoriteMovies};
        const keyName: string = chosenFilm.toString();
        setFavoriteIconTag(favoriteMoviesArray[keyName]===true ? "heart heart-favorite" : "heart");
    }, [chosenFilm,favoriteMovies]);
    
    const handleClick = () => {
        let updatedFavorites:any = {...favoriteMovies};
        const keyName: string = chosenFilm.toString();
        updatedFavorites[keyName] = !updatedFavorites[keyName];
        setFavoriteMovies({...updatedFavorites});
        localStorage.setItem("favoritesObj", JSON.stringify(updatedFavorites));
    };

    return (
        <div >
            <FontAwesomeIcon icon={faHeart} className={favoriteIconTag} onClick={handleClick} />
        </div >
    );
}

export { FavoriteButton };