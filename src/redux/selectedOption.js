import { createSlice } from "@reduxjs/toolkit";

const selectedOptionSlice = createSlice({
  name: "selectedOptions",
  initialState: {
    country: "",
    year: "",
  },
  reducers: {
    addCountry: (state, action) => {
      state.country = action.payload.country;
    },
    addYear: (state, action) => {
      state.year = action.payload.year;
    },
  },
});

export const addCountry = selectedOptionSlice.actions.addCountry;
export const addYear = selectedOptionSlice.actions.addYear;
export default selectedOptionSlice.reducer;
