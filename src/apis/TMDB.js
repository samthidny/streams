const checkAuth = async () => {
    if (!TMDB.isAuthorised) {
        console.log('checkAuth getting key');
        return TMDB.getAuth();
    }
    console.log('Auth ok');
    return true;
}


const getResults = async (url, cacheID) => {



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
        TMDB.cache[cacheID] = data.results;
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

const getData = async (url, cacheID) => {

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

// Temporarilly putting TOKEN in here for DEV only, will eventually be sent on sign in/authentication
export const TMDB = {
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

    getTrending: async (query) => {
        return getResults(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, 'trending');
    },

    getPopular: async (query) => {
        return getResults(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, 'popular');
    },

    searchTitles: async (query) => {
        const results = await getResults(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, `title_${query}`);
        return results.filter(title => title.poster_path !== null);
    },

    getDetails: async (id) => {
        return getData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, `details_${id}`);
    },

    getVideos: async (id) => {
        return getData(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, `videos_${id}`);
    }

}