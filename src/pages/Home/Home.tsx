import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { Toc } from "../../components/Toc/Toc";
import { Footer } from "../../components/Footer/Footer";
import { FilmDetails } from "../../interfaces/interfaces";
import { getFilms } from "../../services/services";
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Home.css';

const Home = () => {
    const openingPic = process.env.PUBLIC_URL + "/deathStar.png";
    const [filmsArray, setFilmsArray] = useState<FilmDetails[]>([]);

    useEffect(() => {
        fetchFilms();
    }, []);

    const fetchFilms = async () => {
        const films = await getFilms();
        setFilmsArray([...films]);
    };


    if (filmsArray.length > 0) {
        return (
            <div>
                <Header></Header>
                <div className='openning-paragraph'>
                    <img src={openingPic} alt='death-star'></img>
                    <h1>CHOOSE YOUR FAVORITE MOVIES</h1>
                    <img src={openingPic} alt='death-star'></img>
                </div>
                <div className="main-container">
                    <Toc filmsInfo={filmsArray} ></Toc>
                    <FilmCard filmsInfo={filmsArray}></FilmCard>
                </div>
                <div className='closing-paragraph'>
                    <h1 className='meme'>MAY THE FORCE BE WITH YOU</h1>
                    <FontAwesomeIcon icon={faJedi} className='jedi-icon' />
                </div>
                <Footer></Footer>
            </div>
        );
    }
    else {
        return (null);
    }
}

export { Home }