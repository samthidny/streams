import { ReelCard } from "./ReelCard";
import './Reel.css';
import ReelCardLoader from "./ReelCardLoader";

export function Reel(props) {

    const list = props.titles.map(title => <div className="reel-card-container" key={title.id}><ReelCard title={title} /></div>);

    const renderTitle = () => {
        return props.title ? <h2>{props.title}</h2> : '';
    }

    return <section className="reel">
        {renderTitle()}
        <div className="card-container">
            {list}
        </div>
    </section>
}