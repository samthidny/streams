import { Link } from 'react-router-dom';
import './ReelCard.css';
import { ITitle } from '../data/ITitle';

type ReelCardProps = {
  title: ITitle
}

export function ReelCard(props: ReelCardProps) {

  const imageURL = `https://image.tmdb.org/t/p/w185/${props.title.poster_path}`;

  return <div className="reel-card">
    <div className="image-container">
      <Link to={`/title/${props.title.id}`} state={{ title: props.title }}><img src={imageURL}></img></Link>
    </div>
    <h3 className="heading">{props.title.original_title}</h3>
  </div>
}