import { ITitle } from '../data/ITitle';
import './AutoCompleteItem.css'
import { Link } from 'react-router-dom';

type AutoCompleteItemProps = {
    result: ITitle
}

export default function AutoCompleteItem(props: AutoCompleteItemProps) {

    const result = props.result;

    return (
        <div className="auto-complete-item">
            <Link to={`/title/${result.id}`} state={{ title: result.title }}>{result.title}</Link>
        </div>
    )
}
