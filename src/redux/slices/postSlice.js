import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  state: 'idle',
  value: [],
  error: {},
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return res.data;
    } catch (err) {
      return rejectWithValue({ message: 'Something went wrong' });
    }
  }
);

// const someFunction = () => {
//   return {
//     type: 'some type',
//     payload: 'payload',
//   };
// };

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
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCounter = (state) => state.counter.value;

export default postsSlice.reducer;
