import { useEffect, useState } from "react";
import { TMDB } from "../apis/TMDB";
import Youtube from "../components/Youtube";
import IVideo from "../data/IVideo";

type VideosProps = {
    titleID: string
}


export function Videos(props: VideosProps) {

    // const { titleID } = useParams();
    const [videos, setVideos] = useState<IVideo[]>();

    useEffect(() => {

        TMDB.getVideos(props.titleID).then((videos: IVideo[]) => {
            return setVideos(videos)
        });

        return () => {
        }

    }, [])

    const videoList = videos ? videos.map((video: IVideo) => <Youtube key={video.key} videoID={video.key} />).splice(0, 3): '';

    return <div className="videos">
        <h1>VIDEOS</h1>
        {videoList}
    </div>

}
