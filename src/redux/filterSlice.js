import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    fetchingInProgress(state) {},
    fetchingSuccess(state, action) {
      state.filter = action.payload.trim();
    },
    fetchingError(state, action) {},
  },
});

export const filterReducer = filterSlice.reducer;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  filterSlice.actions;
