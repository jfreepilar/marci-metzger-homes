import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    location: "",
    propertyType: "",
    bedrooms: "",
    baths: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "",
    email: "",
    error: null,
  },
  reducers: {
    updateFormData(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    clearFormData(state) {
      return {
        location: "",
        propertyType: "",
        bedrooms: "",
        baths: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
      };
    },
  },
});

export const { updateFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;