import { useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton";
import './Title.css';
import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";
import useFavourites from "../hooks/useFavourites";
import { LikeButton } from "../components/LikeButton";


export function Title(props) {

    const { titleID } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {

        TMDB.getDetails(titleID).then(details => {
            return setDetails(details)  
        } );

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
        return !!favourites.find(title => {
            return title.id === id
        });
    }

    const posterURL = `https://image.tmdb.org/t/p/w300/${details.poster_path}`;
    const backdropURL = `https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`;

    return <div style={{ backgroundImage: `url(${backdropURL})` }}>
        <div className="info-text">
            <div className="header">
                <div className="back-button">
                    <BackButton></BackButton>
                </div>
                <div className="like-button">
                    <LikeButton selected={isFavourite(details.id)} onClick={favouriteClickHandler}></LikeButton>
                </div>
            </div>
            {/* <button onClick={favouriteClickHandler}>ADD TO FAVOURITES ({favourites.length}) {isFavourite(details.id) ? 'Y' : 'N'}</button> */}
            <h1>{details.original_title}</h1>
            <h2>{details.tagline}</h2>
            <h2>{details.vote_average}</h2>
            <p>{details.overview}</p>
            <img src={posterURL}></img>
        </div>
    </div >

}
