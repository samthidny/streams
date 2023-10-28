export function Genres(props) {

    const list = props.genres.map(genre => <li key={genre.name}>{genre.name}</li>);

    return <>
        <ul>
            {list}
        </ul>
    </>
}
