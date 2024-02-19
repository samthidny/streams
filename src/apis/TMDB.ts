import { ITitle } from "../data/ITitle";
import IVideo from "../data/IVideo";
import { IVideos } from "../data/IVideos";

const checkAuth = async () => {
    if (!TMDB.isAuthorised) {
        console.log('checkAuth getting key');
        return TMDB.getAuth();
    }
    console.log('Auth ok');
    return true;
}


const getResults = async (url: string, cacheID: string): Promise<ITitle[]> => {



    if (cacheID && TMDB.cache[cacheID]) {

        return TMDB.cache[cacheID] as ITitle[];
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB.authToken
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        TMDB.cache[cacheID] = data.results;
        return data.results as ITitle[];
    } catch (error) {
        console.error(error);
    }

    return [];
}

const getData = async (url: string, cacheID: string) => {

    await checkAuth();

    if (cacheID && TMDB.cache[cacheID]) {
        return TMDB.cache[cacheID];
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB.authToken
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        TMDB.cache[cacheID] = data;
        return data;
    } catch (error) {
    }
}

interface ITMDB {
    cache: any;
    authToken: string;
    isAuthorised: boolean;
    getAuth: () => Promise<any>;
    getTrending: () => Promise<ITitle[]>;
    getPopular: () => Promise<ITitle[]>;
    searchTitles: (query: string) => Promise<ITitle[]>;
    getDetails: (id: string) => Promise<ITitle>;
    getVideos: (id: string) => Promise<IVideos>;
}


// Temporarilly putting TOKEN in here for DEV only, will eventually be sent on sign in/authentication
export const TMDB: ITMDB = {
    cache: {},
    authToken: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2RhN2MyNjg5MmE4NzcxNGFiNDQ5ZGY2OWQ1N2VhZiIsInN1YiI6IjY1MjkwODI3MGNiMzM1MTZmNzQ2OWFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HFaCXwj5CcteLTsCUAhjcUrW15gEqXb_BdRmAjG3Dx8",
    isAuthorised: true,
    getAuth: async () => {
        if (TMDB.isAuthorised && TMDB.authToken) {
            return TMDB.authToken;
        }
        try {
            const response = await fetch(`https://samthidny.github.io/streams-auth/`);
            const data = await response.json();
            TMDB.authToken = data.Authorization;
            TMDB.isAuthorised = true;
            return data;
        } catch (error) {
            console.error(error);
        }
    },

    getTrending: async () => {
        return getResults(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, 'trending');
    },

    getPopular: async () => {
        return getResults(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, 'popular');
    },

    searchTitles: async (query: string) => {
        const results = await getResults(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, `title_${query}`);
        return results.filter((title: ITitle) => title.poster_path !== null);
    },

    getDetails: async (id) => {
        return getData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, `details_${id}`);
    },

    getVideos: async (id) => {
        return getData(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, `videos_${id}`);
    }

}
