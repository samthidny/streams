import './AutoCompleteItem.css'
import React from 'react'
import { Link } from 'react-router-dom';


export default function AutoCompleteItem(props) {

    const result = props.result;

    return (
        <div className="auto-complete-item">
            <Link to={`/title/${result.id}`} state={{ title: result.title }}>{result.title}</Link>
        </div>
    )
}
