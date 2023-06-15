import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, { payload }) {
      console.dir(state.filter);
      // state.filter = payload.trim();
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filter } = filterSlice.actions;
