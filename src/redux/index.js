import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import postSlice from './slices/postSlice';
import usersSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postSlice,
    users: usersSlice,
  },
});
