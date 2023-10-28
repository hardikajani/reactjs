import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userDetailSlice';

const store = configureStore({
  reducer: {
    items: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;