
const getResults = async (url) => {
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
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

const getData = async (url) => {
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
        return data;
    } catch (error) {
        console.error(error);
    }
}


export const TMDB = {
    authToken: null,
    getAuth: async () => {
        console.log('getAuth()')
        try {
            const response = await fetch(`https://samthidny.github.io/streams-auth/`);
            const data = await response.json();
            TMDB.authToken = data.Authorization;
            return data;
        } catch (error) {
            console.error(error);
        }
    },

    getTrending: async (query) => {
        return getResults(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`);
    },

    getPopular: async (query) => {
        return getResults(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);
    },

    searchTitles: async (query) => {
        const results = await getResults(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        return results.filter(title => title.poster_path !== null);
    },

    getDetails: async (id) => {
        return getData(`https://api.themoviedb.org/3/movie/507089?language=en-US`);
    }

}