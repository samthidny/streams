import { useEffect, useState } from "react";
import './Search.css';
import AutoComplete from "./AutoComplete";

export function Search(props) {

    const [search, setSearch] = useState(props.value || '');
    const [showAutoComplete, setShowAutoComplete] = useState(false);

    useEffect(() => {

        console.log('showAutoComplete', showAutoComplete);

        return () => {
            console.log('showAutoComplete destroy');
        }

    }, [showAutoComplete])

    function inputHandler(event) {
        console.log('inputHandler > ', event.target.value)
        setSearch(event.target.value);
        props.onInput && props.onInput(event.target.value);
    }

    function searchHandler() {
        props.onSearch && props.onSearch(search);
    }

    function submitHandler(event) {
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
        }, 100);
        
    }


    const autoComplete = showAutoComplete ? <AutoComplete results={props.autocompleteResults}></AutoComplete> : '';

    return <div>
        <form className="search" onSubmit={submitHandler} onBlur={blurHandler}>
            <label htmlFor="search">Search:</label>
            <div className="search-text-container">
                <input id="search" type="search" onInput={inputHandler} value={search} onFocus={focusHandler} ></input>
                {autoComplete}
            </div>
            <button type="submit"  onClick={searchHandler}>Search</button>
        </form>
    </div>

}