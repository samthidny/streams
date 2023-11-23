import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './SearchSlice'

export default configureStore({
  reducer: {
    search: searchReducer
  },
})