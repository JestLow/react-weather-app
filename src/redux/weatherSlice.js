import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "weather/getWeather",
  async (city) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const res = await axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&aqi=no&alerts=no`
    );
    return res.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    city: "",
    status: "",
    isCityFound: false,
    error: null,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.data = action.payload;
      state.isCityFound = true;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
      state.isCityFound = false;
      state.error = action.error.message;
    },
  },
});

export default weatherSlice.reducer;
export const { setCity } = weatherSlice.actions;
