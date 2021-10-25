import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { FilmDetails } from '../../interfaces/interfaces';
import { chooseFilm } from '../../redux/actions/chooseFilm';
import './Toc.css';

interface Props {
    filmsInfo: FilmDetails[];
}

const Toc: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    const handleClick = (event: any) => {
        dispatch(chooseFilm(parseInt(event.target.parentElement.id)));
    };

    return (<div className='table-container'>
        <Table bordered className='toc'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Film</th>
                </tr>
            </thead>
            <tbody>
                {props.filmsInfo.map((item, i) => {
                    return (
                        <tr key={i} className='film-title' id={i.toString()} >
                            <td>{i + 1}</td>
                            <td className='item-title' onClick={handleClick}> {item.title}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    </div>);
}

export { Toc }