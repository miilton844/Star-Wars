import { FilmDetails } from '../../interfaces/interfaces'
import Table from 'react-bootstrap/Table';
import './Toc.css'

interface Props {
    filmsInfo: FilmDetails[]
}

const Toc: React.FC<Props> = (props) => {

    const handleClick = (event: any) => {
        console.log(event)
        }
    
        return (<div className='table-container'>
        <Table  bordered className='toc'>
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
                            <td onClick={handleClick}> {item.title}</td>
                        </tr>
                        
                    )
                })}
            </tbody>
        </Table>
    </div>)
}

export { Toc }