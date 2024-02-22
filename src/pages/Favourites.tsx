import useFavourites from '../hooks/useFavourites';
import './Favourites.css';
import ReelCardLoader from '../components/ReelCardLoader';
import { ITitle } from '../data/ITitle';

export function Favourites() {

    const { favourites, removeFavourite } = useFavourites();

    function removeHandler(id: string) {
        removeFavourite({ id });
    }

    const cardList = favourites.map((record: ITitle) => ({ id: record.id, original_title: record.title })).map((record: ITitle, index: number) => <div key={index}><ReelCardLoader key={record.id} title={record}></ReelCardLoader><button className="favourites-remove-button" onClick={() => removeHandler(record.id)}>REMOVE</button></div>)

    return <div className="favourites">
        <h1>Favourites</h1>
        <div className="favourites-list">
            {cardList}
        </div>
    </div>
}