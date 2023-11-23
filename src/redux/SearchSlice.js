import { createSlice } from '@reduxjs/toolkit'

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    searchResults: []
  },
  reducers: {
    setResults: (state, action) => {
      console.log('Setting results in slice');
      state.searchResults = action.payload;
    },
    setSearch: (state, action) => {
      console.log('Setting search in slice');
      state.search = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setResults, setSearch } = SearchSlice.actions

export default SearchSlice.reducer