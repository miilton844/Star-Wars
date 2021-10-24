import { FilmCard } from "../../components/FilmCard/FilmCard"
import { Toc } from "../../components/Toc/Toc"
import { useEffect, useState } from "react"
import { getFilms } from "../../services/services"
import { Header } from "../../components/Header/Header"
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Home.css'
const Home = () => {

    interface Film {
        title: string
        opening_crawl: string
        episode_id: number
    }

    const [filmsArray, setFilmsArray] = useState<Film[]>([])

    const fetchFilms = async () => {
        const films = await getFilms();
        setFilmsArray([...films])
    }

    useEffect(() => {
        fetchFilms()
    }, [])

    if (filmsArray.length > 0) {
        return (
            <div>
                <Header></Header>
                <div className='openning-paragraph'>
                    <FontAwesomeIcon icon={faJedi} className='jedi-icon' />
                    <h1>Choose your favorite movies</h1>
                    <FontAwesomeIcon icon={faJedi} className='jedi-icon' />
                </div>
                <div className="main-container">
                    <Toc filmsInfo={filmsArray} ></Toc>
                    <FilmCard filmsInfo={filmsArray}></FilmCard>
                </div>
            </div>
        )
    }

    else {
        return (null)
    }
}

export { Home }