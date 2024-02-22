import { useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton";
import './Title.css';
import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";
import useFavourites from "../hooks/useFavourites";
import { LikeButton } from "../components/LikeButton";
import { Videos } from "./Videos";
import { ITitle } from "../data/ITitle";


export function Title() {

    const { titleID } = useParams();
    const [details, setDetails] = useState<ITitle>();

    useEffect(() => {

        if (titleID) {
            TMDB.getDetails(titleID).then((details: ITitle) => {
                return setDetails(details)
            });
        }

        return () => {
        }

    })

    // Favourites Code here
    const { favourites, addFavourite, removeFavourite } = useFavourites();

    function favouriteClickHandler() {
        if (details) {
            if (isFavourite(details.id)) {
                removeFavourite({ id: details.id });
            } else {
                addFavourite({ id: details.id, title: details.original_title });
            }
        }
    }

    const isFavourite = (id: string) => {
        return !!favourites.find((title: ITitle) => {
            return title.id === id
        });
    }

    if (!details?.id) {
        return <p>Loading</p>
    }

    const posterURL = `https://image.tmdb.org/t/p/w300/${details.poster_path}`;
    const backdropURL = `https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`;


    const videos = titleID ? <Videos titleID={titleID} /> : <></>;

    return <div style={{ backgroundImage: `url(${backdropURL})` }}>
        <div className="info-text">
            <div className="header">
                <div className="back-button">
                    <BackButton></BackButton>
                </div>
                <div className="like-button">
                    <LikeButton selected={isFavourite(details?.id)} onClick={favouriteClickHandler}></LikeButton>
                </div>
            </div>
            <h1>{details.original_title}</h1>
            <h2>{details.tagline}</h2>
            <h2>{details.vote_average}</h2>
            <p>{details.overview}</p>
            <img src={posterURL} alt={details.original_title}></img>
            {videos}
            {/* <Videos titleID={titleID} /> */}
        </div>
    </div >

}
