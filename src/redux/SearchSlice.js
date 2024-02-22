import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMDB } from '../apis/TMDB';

export const autocompleteThunk = createAsyncThunk(
  'search',
  async (payload, thunkAPI) => {

    const results = await TMDB.searchTitles(payload.search);

    return results;

  }
)

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    lastSearch: '',
    searchResults: [],
    autoCompleteItems: []
  },
  reducers: {
    setResults: (state, action) => {
      state.searchResults = action.payload.results;
      state.lastSearch = action.payload.search;
      
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(autocompleteThunk.fulfilled, (state, action) => {
      
      const sortField = 'vote_average'; //popularity
      
      state.autoCompleteItems = action.payload.map(result => ({ id: result.id, title: result.title, result: result })).sort((a, b) => {
        if (a.result[sortField] < b.result[sortField]) {
            return 1;
        } else {
            return -1;
        }

    }).slice(0, 10);
    })

  },
})

// Action creators are generated for each case reducer function
export const { setResults, setSearch } = SearchSlice.actions

export default SearchSlice.reducer