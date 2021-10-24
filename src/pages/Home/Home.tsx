import { FilmCard } from "../../components/FilmCard/FilmCard"
import { Toc } from "../../components/Toc/Toc"
import { useEffect, useState } from "react"
import { getFilms } from "../../services/services"
import { Header } from "../../components/Header/Header"
import { FilmDetails } from "../../interfaces/interfaces"
import './Home.css'
const Home = () => {

    const [filmsArray, setFilmsArray] = useState<FilmDetails[]>([])

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