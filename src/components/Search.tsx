import React, { useEffect, useState } from "react";
import './Search.css';
import AutoComplete from "./AutoComplete";
import { ITitle } from "../data/ITitle";


type SearchProps = {
    value: string,
    onInput: Function,
    onSearch: Function,
    autocompleteResults: ITitle[]
}


export function Search(props: SearchProps) {

    const [search, setSearch] = useState(props.value || '');
    const [showAutoComplete, setShowAutoComplete] = useState(false);

    useEffect(() => {

        console.log('showAutoComplete', showAutoComplete);

        return () => {
            console.log('showAutoComplete destroy');
        }

    }, [showAutoComplete])

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('inputHandler > ', event.target.value)
        setSearch(event.target.value);
        props.onInput && props.onInput(event.target.value);
    }

    function searchHandler() {
        props.onSearch && props.onSearch(search);
    }

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        searchHandler();
    }

    function focusHandler() {
        console.log('Search Focus');
        setShowAutoComplete(true);
    }

    function blurHandler() {
        console.log('Search blur');
        // TODO - this is a bad work around because Link action isnt being dispatched because focus lost
        setTimeout(() => {
            setShowAutoComplete(false);
        }, 1000);

    }


    const autoComplete: JSX.Element = showAutoComplete ? <><AutoComplete results={props.autocompleteResults}></AutoComplete></> : <></>;

    return <div>
        <form className="search" onSubmit={submitHandler} onBlur={blurHandler}>
            <label htmlFor="search">Search:</label>
            <div className="search-text-container">
                <input id="search" type="search" onInput={inputHandler} value={search} onFocus={focusHandler} ></input>
                {autoComplete}
            </div>
            <button type="submit" onClick={searchHandler}>Search</button>
        </form>
    </div>

}