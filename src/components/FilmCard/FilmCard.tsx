import { FilmDetails } from '../../interfaces/interfaces'
import Card from 'react-bootstrap/Card';
import './FilmCard.css'
import { useTypedSelector } from "../../redux/hooks/useTypeSelector";
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'

interface Props {
    filmsInfo: FilmDetails[]
}

const FilmCard: React.FC<Props> = (props) => {
    const chosenFilm = useTypedSelector(state => {
        return state.chosenFilm
    });

    return (<div className='wrapper'>
        <Card className="card-container">
            <Card.Body>
                <div className='header'>
                    <Card.Title className='title'>{props.filmsInfo[chosenFilm].title}</Card.Title>
                </div>
                <Card.Text>
                    {props.filmsInfo[chosenFilm].opening_crawl}
                </Card.Text>
                <div className='images'>
                    <img src={'./' + chosenFilm.toString() + '1.jpg'} alt={props.filmsInfo[chosenFilm].title + ' pic1'}></img>
                    <img src={'./' + chosenFilm.toString() + '2.jpg'} alt={props.filmsInfo[chosenFilm].title + ' pic2'}></img>
                    <img src={'./' + chosenFilm.toString() + '3.jpg'} alt={props.filmsInfo[chosenFilm].title + ' pic3'}></img>
                </div>
            </Card.Body>
        </Card>
    </div>
    )

}
export { FilmCard }