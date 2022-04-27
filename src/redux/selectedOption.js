import { createSlice } from "@reduxjs/toolkit";

const selectedOptionSlice = createSlice({
  name: "selectedOptions",
  initialState: {
    country: "",
    year: "",
    clickedItem: "Refugees",
  },
  reducers: {
    addCountry: (state, action) => {
      state.country = action.payload.country;
    },
    addYear: (state, action) => {
      state.year = action.payload.year;
    },
    changeClickedItem: (state, action) => {
      state.clickedItem = action.payload.item;
    },
  },
});

export const changeClickedItem = selectedOptionSlice.actions.changeClickedItem;
export const addCountry = selectedOptionSlice.actions.addCountry;
export const addYear = selectedOptionSlice.actions.addYear;
export default selectedOptionSlice.reducer;
