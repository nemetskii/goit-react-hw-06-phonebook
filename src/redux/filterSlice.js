import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filtered',
  initialState,
  reducers: {
    filtered: (contacts, value) => {
      return value.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
export default filterSlice.reducer;
