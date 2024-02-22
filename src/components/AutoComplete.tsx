import React from 'react'
import AutoCompleteItem from './AutoCompleteItem'
import './AutoComplete.css'
import { ITitle } from '../data/ITitle'


type AutoCompleteProps = {
    results: ITitle[]
}

export default function AutoComplete(props: AutoCompleteProps) {

    const resultsList = props.results.map(result => <li key={result.id}><AutoCompleteItem result={result}></AutoCompleteItem></li>)

    if (props.results.length === 0) {
        return <></>;
    }

    return (
        <div className="autocomplete">
            <ul>
                {resultsList}
            </ul>
        </div>
    )
}
