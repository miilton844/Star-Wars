import Card from 'react-bootstrap/Card';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { useTypedSelector } from "../../redux/hooks/useTypeSelector";
import { FilmDetails } from '../../interfaces/interfaces';
import './FilmCard.css';

interface Props {
    filmsInfo: FilmDetails[];
}

const FilmCard: React.FC<Props> = (props) => {
    const pic1 =  process.env.PUBLIC_URL + "/yoda.png";
    const pic2 =  process.env.PUBLIC_URL + "/darthVader.png";

    const chosenFilm = useTypedSelector(state => {
        return state.chosenFilm;
    });

    return (<div className='wrapper'>
        <Card className="card-container">
            <Card.Body>
                <div className='header'>
                    <Card.Title className='title'>{props.filmsInfo[chosenFilm].title}</Card.Title>
                    <FavoriteButton filmsInfo={props.filmsInfo} ></FavoriteButton>
                </div>
                <Card.Text>
                    {props.filmsInfo[chosenFilm].opening_crawl}
                </Card.Text>
                <div className='images'>
                    <img src={pic1} alt='yoda'></img>
                    <img src={'./' + chosenFilm.toString() + '1.jpg'} alt={props.filmsInfo[chosenFilm].title + ' pic1'}></img>
                    <img src={pic2} alt='darth-vader'></img>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
}

export { FilmCard };