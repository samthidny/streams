import { useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton";
import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";
import Youtube from "../components/Youtube";

export function Videos(props) {

    const { titleID } = useParams();
    const [videos, setVideos] = useState({});

    useEffect(() => {

        TMDB.getVideos(titleID || props.titleID).then(videos => {
            return setVideos(videos)
        });

        return () => {
            console.log('Destroy function Videos');
        }

    }, [])

    const videoList = videos.results ? videos.results.map(video => <Youtube videoID={video.key} />).splice(0, 3) : [];

    return <div>
        <h1>VIDEOS</h1>
        {videoList}
    </div >

}
