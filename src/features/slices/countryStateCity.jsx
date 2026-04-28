import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../actions/countryStateCity";

const initialState = {
  isLoading: false,
  countryData: [],
  stateData: [],
  cityData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

const countryStateCitySlice = createSlice({
  name: "countryStateCitySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.countryData = action.payload.data;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage =
          action.payload || "Failed to fetch countryStateCity data.";
      })
      .addCase(getAllStatesById.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllStatesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.stateData = action.payload.data;
      })
      .addCase(getAllStatesById.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage =
          action.payload || "Failed to fetch countryStateCity data.";
      })
      .addCase(getAllCityById.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllCityById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.cityData = action.payload.data;
      })
      .addCase(getAllCityById.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = countryStateCitySlice.actions;
export default countryStateCitySlice.reducer;
