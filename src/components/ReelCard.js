import { Link } from 'react-router-dom';
import './ReelCard.css';

export function ReelCard(props) {

  const imageURL = `https://image.tmdb.org/t/p/w185/${props.title.poster_path}`;

  return <div className="reel-card">
    <Link to={`title/${props.title.id}`} state={{ title: props.title }}><img src={imageURL}></img></Link>
    <h3 className="heading">{props.title.original_title}</h3>
  </div>
}