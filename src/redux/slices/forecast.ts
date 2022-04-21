import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ForecasttState {
  latitude: number;
  longitude: number;
}

const initialState: ForecasttState = {
  latitude: 0,
  longitude: 0,
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setLatitude: (state, action: PayloadAction<number>) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action: PayloadAction<number>) => {
      state.longitude = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLatitude, setLongitude } = forecastSlice.actions;

export default forecastSlice.reducer;
