import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './SearchSlice'
import favouritesReducer from './FavouritesSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    favourites: favouritesReducer

  }
})