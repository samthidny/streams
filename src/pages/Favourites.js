import { Link } from 'react-router-dom';
import useFavourites from '../hooks/useFavourites';
import './Favourites.css';

export function Favourites(props) {

    const [favourites, addFavourite, removeFavourite] = useFavourites();

    function removeHandler(id) {
        console.log('Remove ', id);
        removeFavourite({id});
    }

    //<Link to={`title/${props.title.id}`} state={{ title: props.title }}>
    const list = favourites.map((record, index) => <li key={index}><Link to={`/title/${record.id}`} state={{title: { title: record.title, id:record.id }}}>{record.title} - {record.id}</Link> - <button onClick={() => removeHandler(record.id)}>X</button></li>)

    return <div className="favourites">
        <ul>
            {list}
        </ul>
        <p>Favourites {favourites.length}</p>
    </div>
}