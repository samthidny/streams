import React from 'react'
import AutoCompleteItem from './AutoCompleteItem'
import './AutoComplete.css'


export default function AutoComplete(props) {

    // const resultsList = props.results.map(result => <li key={result.id}>{result.title}</li>)
    const resultsList = props.results.map(result => <li key={result.id}><AutoCompleteItem result={result}></AutoCompleteItem></li>)

    if(props.results.length === 0) {
        return;
    }

    return (
        <div className="autocomplete">
            <ul>
                {resultsList}
            </ul>
        </div>
    )
}
