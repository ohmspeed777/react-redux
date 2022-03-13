import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  state: 'idle',
  value: [],
  error: {},
  select: {},
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:5000/user');
      return res.data;
    } catch (err) {
      return rejectWithValue({ message: 'User errors' });
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:5000/user/' + id);
      return res.data;
    } catch (err) {
      return rejectWithValue({ message: 'User errors' });
    }
  }
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post('http://localhost:5000/user', body);
      return res.data;
    } catch (err) {
      return rejectWithValue({ message: 'User errors' });
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, body }, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.patch('http://localhost:5000/user/' + id, body);
      return res.data;
    } catch (err) {
      return rejectWithValue({ message: 'User errors' });
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.state = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.state = 'idle';
      state.value = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.state = 'error';
      state.error = action.payload;
    },
    [createUser.pending]: (state, action) => {
      state.state = 'loading';
    },
    [createUser.fulfilled]: (state, action) => {
      state.state = 'idle';
      state.value.push(action.payload);
      // [1, 2].push(3)
      // [1,2,3]
    },
    [createUser.rejected]: (state, action) => {
      state.state = 'error';
      state.error = action.payload;
    },
    [fetchUser.pending]: (state, action) => {
      state.state = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.state = 'idle';
      state.select = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.state = 'error';
      state.error = action.payload;
    },
    [updateUser.pending]: (state, action) => {
      state.state = 'loading';
    },
    [updateUser.fulfilled]: (state, action) => {
      state.state = 'idle';
      state.value = state.value.map((el) => {
        if (el.id === action.payload.id) {
          return el;
        }
        return el;
      });
    },
    [updateUser.rejected]: (state, action) => {
      state.state = 'error';
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const {  } = userSlice.actions;

export default userSlice.reducer;
