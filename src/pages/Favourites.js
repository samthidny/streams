import useFavourites from '../hooks/useFavourites';
import './Favourites.css';
import ReelCardLoader from '../components/ReelCardLoader';

export function Favourites(props) {

    const [favourites, addFavourite, removeFavourite] = useFavourites();

    function removeHandler(id) {
        console.log('Remove ', id);
        removeFavourite({id});
    }
    
    const cardList = favourites.map(record => ({ id: record.id, original_title: record.title})).map((record, index) => <div key={index}><ReelCardLoader key={record.id} title={record}></ReelCardLoader><button className="favourites-remove-button" onClick={() => removeHandler(record.id)}>REMOVE</button></div>)

    return <div className="favourites">
        <h1>Favourites</h1>
        <div className="favourites-list">
            {cardList}
        </div>
    </div>
}