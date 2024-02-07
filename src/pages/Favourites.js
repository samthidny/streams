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

    const list = favourites.map((record, index) => <li key={index}><Link to={`/title/${record.id}`}  state={{title: { title: record.title, id:record.id }}}>{record.title} - {record.id}</Link> - <button onClick={() => removeHandler(record.id)}>X</button></li>)
    
    const cardList = favourites.map(record => ({ id: record.id, original_title: record.title})).map((record, index) => <div key={index}><ReelCardLoader title={record}></ReelCardLoader><button onClick={() => removeHandler(record.id)}>X</button></div>)

    return <div className="favourites">
        <h1>Favourites</h1>
        <div className="favourites-list">
            {cardList}
        </div>
    </div>
}