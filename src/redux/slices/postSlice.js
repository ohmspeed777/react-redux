import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  state: 'idle',
  value: [],
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.state = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.state = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.state = 'error';
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCounter = (state) => state.counter.value;

export default postsSlice.reducer;
