import { Reel } from "../components/Reel";
import { useSelector } from "react-redux";
import { IState } from "../redux/IState";

export function SearchResults() {

    const results = useSelector((state: IState) => state.search.searchResults);
    const lastSearch = useSelector((state: IState) => state.search.lastSearch);

    function renderNoResults() {
        return <span>{lastSearch.length > 0 ? 'No results found' : ''}</span>
    }

    return <div>
        {results.length > 0 ? <Reel title="" titles={results} /> : renderNoResults()}
    </div>

}