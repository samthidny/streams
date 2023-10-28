import { useLocation, useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton";
import './Title.css';
import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";

export function Title(props) {

    // Won't need this anymore will just use id to load details from api
    const routeParams = useParams();
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

    return <div style={{ backgroundImage: `url(${backdropURL})` }}>
        <div className="info-text">
            <BackButton></BackButton>
            <h1>{location.state.title.original_title}</h1>
            <p>{details?.overview}</p>
            <img src={posterURL}></img>
        </div>
    </div>

}
