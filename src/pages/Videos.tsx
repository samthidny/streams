import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";
import Youtube from "../components/Youtube";
import IVideo from "../data/IVideo";
import { IVideos } from "../data/IVideos";

type VideosProps = {
    titleID: string
}


export function Videos(props: VideosProps) {

    // const { titleID } = useParams();
    const [videos, setVideos] = useState<IVideo[]>();

    useEffect(() => {

        TMDB.getVideos(props.titleID).then((videos: IVideos) => {
            return setVideos(videos.results)
        });

        return () => {
            console.log('Destroy function Videos');
        }

    }, [])

    console.log('videos', videos);
    const videoList = videos ? videos.map((video: IVideo) => <Youtube key={video.key} videoID={video.key} />).splice(0, 3): '';

    return <div>
        <h1>VIDEOS</h1>
        {videoList}
    </div >

}
