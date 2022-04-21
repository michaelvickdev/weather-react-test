import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { forecastSlice } from "./slices/forecast";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    forecast: forecastSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
