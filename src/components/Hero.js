import './Hero.css';
import { SearchBar } from '../state-components/SearchBar';

export function Hero(props) {

    return <section className="hero">
        <h1>One Search, Endless Entertainment</h1>
        <p>Unlock a world of entertainment by searching for movies, TV series and more on all your favourite streaming services in one place</p>
        <SearchBar></SearchBar>
    </section>

}