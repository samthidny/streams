import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../apis/supabase';


export const getFavouritesThunk = createAsyncThunk(
  'favourites/getFavourites',
  async (payload, thunkAPI) => {

    const { data, error } = await supabase
      .from('favourites')
      .select()

    return data;

  }
)

export const addFavouriteThunk = createAsyncThunk(
  'favourites/addFavourite',
  async (payload, thunkAPI) => {

    const { error } = await supabase
      .from('favourites')
      .insert({ title_id: payload.id, title: payload.title })

    return payload;

  }
)

export const removeFavouriteThunk = createAsyncThunk(
  'favourites/removeFavourite',
  async (payload, thunkAPI) => {

    const { error } = await supabase
      .from('favourites')
      .delete()
      .eq('title_id', payload.id)

    return payload;

  }
)

export const FavouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: []
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addFavouriteThunk.fulfilled, (state, action) => {
      state.favourites.push(action.payload)
    })

    builder.addCase(removeFavouriteThunk.fulfilled, (state, action) => {
      const index = state.favourites.findIndex((fav) => fav.id === action.payload.id)
      if (index > -1) {
        state.favourites.splice(index, 1);
      }
    })

    builder.addCase(getFavouritesThunk.fulfilled, (state, action) => {
      state.favourites = action.payload.map(record => {
        return { id: record.title_id, title: record.title }
      });
    })

  },
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = FavouritesSlice.actions

export default FavouritesSlice.reducer