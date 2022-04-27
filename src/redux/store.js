import { configureStore } from "@reduxjs/toolkit";
import selectedOptionReducer from "./selectedOption";

export const store = configureStore({
  reducer: {
    selectedOptions: selectedOptionReducer,
  },
});
