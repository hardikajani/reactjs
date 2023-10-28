import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserDara } from './api';

interface Item {
    id: string;
    name: string;
    email: string;
    location:string;
    picture:  string;
    dob:  string;
    phone: string;
}

interface ItemsState {
  items: Item[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
  searchUser: [];
}

const initialState: ItemsState = {
  items: [],
  loading: 'idle',
  error: null,
  searchUser: [],
};

export const fetchUsersAsync = createAsyncThunk('user/fetchUser', async () => {
  try {
    const data = await fetchUserDara();
    return data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    searchUser:(state = initialState, action)=>{
      state.searchUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state = initialState) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsersAsync.fulfilled, (state = initialState, action) => {
        state.loading = 'fulfilled';
        state.items = action.payload.results;
      })
      .addCase(fetchUsersAsync.rejected, (state = initialState, action) => {
        state.loading = 'rejected';
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export const selectItems = (state: { items: ItemsState }) => state.items.items;
export const selectLoading = (state: { items: ItemsState }) => state.items.loading;
export const selectError = (state: { items: ItemsState }) => state.items.error;
export const selectSearchUser = (state: { items: ItemsState }) => state.items.searchUser;

export default userSlice.reducer;
export const {searchUser} = userSlice.actions