import { Reel } from "../components/Reel";
import { useSelector } from "react-redux";

export function SearchResults() {

    const results = useSelector((state) => state.search.searchResults);
    const lastSearch = useSelector((state) => state.search.lastSearch);

    function renderNoResults() {
        return <span>{lastSearch.length > 0 ? 'No results found' : ''}</span>
    }

    return <div>
        {results.length > 0 ? <Reel title="" titles={results} /> : renderNoResults()}
    </div>

}