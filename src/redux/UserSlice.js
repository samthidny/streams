import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../apis/supabase';


export const signInThunk = createAsyncThunk(
  'favourites/sign-in',
  async (payload, thunkAPI) => {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'test@test.com',
      password: 'password',
    });

    return data;
  }
)


export const UserSlice = createSlice({
  name: 'user',
  initialState: {
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    })
  },
})

// // Action creators are generated for each case reducer function
// export const { addFavourite, removeFavourite } = FavouritesSlice.actions

export default UserSlice.reducer