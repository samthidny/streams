import { Search } from "./Search";
import { Reel } from "../Reel";
import { TMDB } from "../../apis/TMDB";
import { useDispatch, useSelector } from "react-redux";
import { setResults, setSearch } from "../../redux/SearchSlice";

export function SearchBar() {

    const search = useSelector((state) => state.search.search);
    const results = useSelector((state) => state.search.searchResults);
     
    const dispatch = useDispatch();

    function inputHandler(search) {
        console.log('inputHandler', search);
        dispatch(setSearch(search));
    }

    async function searchHandler(search) {
        console.log(`Submit search ${search}`);
        dispatch(setSearch(search));
        const results = await TMDB.searchTitles(search);
        dispatch(setResults(results));
    }

    return <div>
        <Search value={search} onSearch={searchHandler} onInput={inputHandler}></Search>
        {results.length > 0 ? <Reel title="Results" titles={results} /> : <span>No results found</span>}
    </div>


}