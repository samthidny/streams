import { Link } from 'react-router-dom';
import useFavourites from '../hooks/useFavourites';
import './Favourites.css';
import { ReelCard } from '../components/ReelCard';
import ReelCardLoader from '../components/ReelCardLoader';

export function Favourites(props) {

    const [favourites, addFavourite, removeFavourite] = useFavourites();

    function removeHandler(id) {
        console.log('Remove ', id);
        removeFavourite({id});
    }

    //<Link to={`title/${props.title.id}`} state={{ title: props.title }}>
    const list = favourites.map((record, index) => <li key={index}><Link to={`/title/${record.id}`} state={{title: { title: record.title, id:record.id }}}>{record.title} - {record.id}</Link> - <button onClick={() => removeHandler(record.id)}>X</button></li>)
    
    const cardList = favourites.map(record => ({ id: record.id, original_title: record.title})).map((record, index) => <li key={index}><ReelCardLoader title={record}></ReelCardLoader></li>)

    

    return <div className="favourites">
        
        <ul>
            {cardList}
        </ul>
        <p>Favourites {favourites.length}</p>
    </div>
}