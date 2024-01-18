import useFavourites from '../hooks/useFavourites';

export function Favourites(props) {

    const [favourites, addFavourite, removeFavourite] = useFavourites();

    function removeHandler(id) {
        console.log('Remove ', id);
        removeFavourite({id});
    }

    const list = favourites.map((record, index) => <li key={index}>{record.title} <button onClick={() => removeHandler(record.id)}>X</button></li>)

    return <div>
        <ul>
            {list}
        </ul>
        <p>Favourites {favourites.length}</p>
    </div>
}