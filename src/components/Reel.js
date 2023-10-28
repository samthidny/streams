import { ReelCard } from "./ReelCard";
import './Reel.css';

export function Reel(props) {

    const list = props.titles.map(title => <div key={title.id}><ReelCard title={title} /></div>);

    return <section className="reel">
        <h2>{props.title}</h2>
        <div className="card-container">
            {list}
        </div>
    </section>
}