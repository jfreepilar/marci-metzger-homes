import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isScrolled: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav(state, action) {
      state.isScrolled = action.payload;
    },
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
