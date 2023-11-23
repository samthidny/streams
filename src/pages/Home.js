import { useEffect, useState } from 'react';
import { TMDB } from '../apis/TMDB';
import { Hero } from '../components/Hero';
import { Reel } from '../components/Reel';
import { SearchBar } from '../components/search/SearchBar';


export function Home(props) {

    const [authorised, setAuthorised] = useState(false);
    const [titles, setTitles] = useState([]);
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);


    useEffect(() => {

        TMDB.getAuth().then(auth => setAuthorised(true));

        return () => {
            console.log('Destroy function x')
        }
    }, [])


    useEffect(() => {

        if (authorised) {
            TMDB.searchTitles('bear').then(titles => setTitles(titles));
            TMDB.getTrending().then(titles => setTrending(titles));
            TMDB.getPopular().then(titles => setPopular(titles));
        }
        return () => {
            console.log('Destroy function y')
        }

    }, [authorised])

    return <div>
        <Hero />
        <SearchBar />
        <Reel title="Trending" titles={trending} />
        <Reel title="Popular" titles={popular} />
        <Reel title="Christmas" titles={titles} />
    </div>
}