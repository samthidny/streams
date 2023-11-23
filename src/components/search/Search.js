import { useState } from "react";
import './Search.css';

export function Search(props) {

    const [search, setSearch] = useState('');

    function inputHandler(event) {
        setSearch(event.target.value);
        props.onInput && props.onInput(search);
    }

    function searchHandler() {
        props.onSearch && props.onSearch(search);
    }

    return <div className="search">
        <label>Search</label>
        <input type="text" onInput={inputHandler} value={search || props.value}></input>
        <button onClick={searchHandler}>Search</button>
    </div>

}