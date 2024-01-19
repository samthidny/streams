import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './SearchSlice'
import favouritesReducer from './FavouritesSlice'
import userReducer from './UserSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    favourites: favouritesReducer,
    user: userReducer
  }
})