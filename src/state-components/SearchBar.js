import { Search } from "../components/Search";
import { Reel } from "../components/Reel";
import { TMDB } from "../apis/TMDB";
import { useDispatch, useSelector } from "react-redux";
import { autocompleteThunk, getSearchThunk, setResults, setSearch } from "../redux/SearchSlice";
import { getFavouritesThunk } from "../redux/FavouritesSlice";

export function SearchBar() {

    const search = useSelector((state) => state.search.search);
    const autocompleteItems = useSelector((state) => state.search.autoCompleteItems);
    const dispatch = useDispatch();

    function inputHandler(search) {
        console.log('inputHandler', search);
        dispatch(setSearch(search));
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

    return <div>
        <span>Autocomplete Items {autocompleteItems.length}</span>
        <Search value={search} onInput={inputHandler} onSearch={searchHandler} ></Search>
        <button onClick={autocompleteHandler}>Autocomplete</button>
        <ul>
            {autoCompletList}
        </ul>
    </div>


}