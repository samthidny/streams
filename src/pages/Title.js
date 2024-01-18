import { useLocation } from "react-router-dom"
import { BackButton } from "../components/BackButton";
import './Title.css';
import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";
import { useDispatch } from "react-redux";
import useFavourites from "../hooks/useFavourites";


export function Title(props) {

    const dispatch = useDispatch();
    // const favourites = useSelector((state) => {
    //     console.log(state.favourites.favourites);
    //     return state.favourites;
    // });

    // Won't need this anymore will just use id to load details from api
    const location = useLocation();
    const posterURL = `https://image.tmdb.org/t/p/w300/${location.state.title.poster_path}`;
    const backdropURL = `https://image.tmdb.org/t/p/w1280/${location.state.title.backdrop_path}`;

    const [details, setDetails] = useState({});

    useEffect(() => {

        TMDB.getDetails(location.state.title.id).then(details => setDetails(details));

        return () => {
            console.log('Destroy function Title');
        }

    }, [])

    // Favourites Code here
    const [favourites, addFavourite, removeFavourite] = useFavourites();

    function favouriteClickHandler() {
        if (isFavourite(details.id)) {
            removeFavourite({ id: details.id });
        } else {
            addFavourite({ id: details.id, title: details.original_title });
        }
    }

    const isFavourite = (id) => {
        return favourites.find(title => {
            return title.id === id
        });
    }


    return <div style={{ backgroundImage: `url(${backdropURL})` }}>
        <div className="info-text">
            <BackButton></BackButton>
            <button onClick={favouriteClickHandler}>ADD TO FAVOURITES ({favourites.length}) {isFavourite(details.id) ? 'Y' : 'N'}</button>
            <h1>{location.state.title.original_title}</h1>
            <h2>{details?.tagline}</h2>
            <h2>{details?.vote_average}</h2>
            <p>{details?.overview}</p>
            <img src={posterURL}></img>
        </div>
    </div>

}
