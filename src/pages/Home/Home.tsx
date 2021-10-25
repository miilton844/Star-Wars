import { FilmCard } from "../../components/FilmCard/FilmCard"
import { Toc } from "../../components/Toc/Toc"
import { useEffect, useState } from "react"
import { getFilms } from "../../services/services"
import { Header } from "../../components/Header/Header"
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../components/Footer/Footer"

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

    const openingPic = process.env.PUBLIC_URL + "/deathStar.png"


    if (filmsArray.length > 0) {
        return (
            <div>
                <Header></Header>
                <div className='openning-paragraph'>
                    {/* <FontAwesomeIcon icon={faJedi} className='jedi-icon' /> */}
                    <img src={openingPic}></img>
                    <h1>CHOOSE YOUR FAVORITE MOVIES</h1>
                    {/* <FontAwesomeIcon icon={faJedi} className='jedi-icon' /> */}
                    <img src={openingPic}></img>

                </div>
                <div className="main-container">
                    <Toc filmsInfo={filmsArray} ></Toc>
                    <FilmCard filmsInfo={filmsArray}></FilmCard>
                </div>
                <div className='closing-container'>
                <h1 className='meme'>MAY THE FORCE BE WITH YOU</h1>
                <FontAwesomeIcon icon={faJedi} className='jedi-icon' />
                </div>

                <Footer></Footer>
            </div>
        )
    }

    else {
        return (null)
    }
}

export { Home }