import { useEffect, useState } from 'react';
import { TMDB } from '../apis/TMDB';
import { Hero } from '../components/Hero';
import { Reel } from '../components/Reel';
import { SearchResults } from '../state-components/SearchResults';
import { ITitle } from '../data/ITitle';
export function Home() {

    const [authorised, setAuthorised] = useState(false);
    const [titles, setTitles] = useState<ITitle[]>([]);
    const [trending, setTrending] = useState<ITitle[]>([]);
    const [popular, setPopular] = useState<ITitle[]>([]);

    useEffect(() => {

        TMDB.getAuth().then((auth: any) => setAuthorised(true));

        return () => {
        }
    }, [])


    useEffect(() => {

        if (authorised) {
            TMDB.searchTitles('christmas').then((titles: ITitle[]) => setTitles(titles));
            TMDB.getTrending().then((titles: ITitle[]) => setTrending(titles));
            TMDB.getPopular().then((titles: ITitle[]) => setPopular(titles));
        }
        return () => {
        }

    }, [authorised])

    return <div>
        <Hero />
        <SearchResults></SearchResults>
        <Reel title="Trending" titles={trending} />
        <Reel title="Popular" titles={popular} />
        <Reel title="Christmas" titles={titles} />
    </div>
}