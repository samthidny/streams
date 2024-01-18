import { useState } from "react";
import './Search.css';

export function Search(props) {

    const [search, setSearch] = useState(props.value || '');

    function inputHandler(event) {
        setSearch(event.target.value);
        props.onInput && props.onInput(search);
    }

    function searchHandler() {
        props.onSearch && props.onSearch(search);
    }

    function submitHandler(event) {
        event.preventDefault();
        searchHandler();
    }

    return <div>
        <form className="search" onSubmit={submitHandler}>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" onInput={inputHandler} value={search}></input>
            <button type="submit"  onClick={searchHandler}>Search</button>
        </form>
    </div>

}