import useFavourites from '../hooks/useFavourites';

export function Favourites(props) {

    const [favourites] = useFavourites();

    const list = favourites.map((record, index) => <li key={index}>{record.title}</li>)

    return <div>
        <ul>
            {list}
        </ul>
        <p>Favourites {favourites.length}</p>
    </div>
}