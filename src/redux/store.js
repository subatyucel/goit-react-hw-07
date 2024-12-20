import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filterSlice";
import contactsReducer from "./contactSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  },
});

export default store;
