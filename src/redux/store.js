import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    form: formReducer
  },
});
