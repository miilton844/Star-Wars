import { FilmDetails } from '../../interfaces/interfaces'
import Card from 'react-bootstrap/Card';
import './FilmCard.css'

interface Props {
    filmsInfo: FilmDetails[]
}

const FilmCard: React.FC<Props> = (props) => {

    return (<div className='wrapper'>
        <Card className="card-container">
            <Card.Body>
                <div className='header'>
                    <Card.Title className='title'>title</Card.Title>
                </div>
                <Card.Text>
                    details
                </Card.Text>
                <div className='images'>
                    <img></img>
                    <img></img>
                    <img></img> 
                </div>
            </Card.Body>
        </Card>
    </div>
    )

}
export { FilmCard }