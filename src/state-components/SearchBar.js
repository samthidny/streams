import { Search } from "../components/Search";
import { Reel } from "../components/Reel";
import { TMDB } from "../apis/TMDB";
import { useDispatch, useSelector } from "react-redux";
import { autocompleteThunk, getSearchThunk, setResults, setSearch } from "../redux/SearchSlice";
import { getFavouritesThunk } from "../redux/FavouritesSlice";
import { useEffect, useState } from "react";
import AutoComplete from "../components/AutoComplete";

export function SearchBar() {

    const search = useSelector((state) => state.search.search);
    const autocompleteItems = useSelector((state) => state.search.autoCompleteItems);
    const dispatch = useDispatch();

    // TODO - refactor into custom hook
    const AUTOCOMPLETE_TIME = 1000;
    useEffect(() => {

        const interval = setTimeout(() => {
            console.log('The final debounce value is', search);
            autocompleteHandler();
        }, AUTOCOMPLETE_TIME);

        // destroy function
        return () => {
            clearInterval(interval);
        }

    }, [search]);


    function inputHandler(str) {
        console.log('inputHandler', str);
        dispatch(setSearch(str));
    }

    async function searchHandler(search) {
        console.log(`Submit search ${search}`);
        dispatch(setSearch(search));
        const results = await TMDB.searchTitles(search);
        dispatch(setResults({ search, results }));
    }

    async function autocompleteHandler() {
        dispatch(autocompleteThunk({ search }));
    }

    const autoCompletList = autocompleteItems.map(result => <li key={result.id}>{result.title}</li>)

    return <search>
        <p>Search: {search}</p>
        <Search value={search} onInput={inputHandler} onSearch={searchHandler} autocompleteResults={autocompleteItems} ></Search>
    </search>


}