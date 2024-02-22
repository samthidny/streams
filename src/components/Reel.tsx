import { ReelCard } from "./ReelCard";
import './Reel.css';
import { ITitle } from "../data/ITitle";

type ReelProps = {
    title: string,
    titles: ITitle[]
}

export function Reel(props: ReelProps) {

    const list = props.titles.map((title: ITitle) => <div className="reel-card-container" key={title.id}><ReelCard title={title} /></div>);

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