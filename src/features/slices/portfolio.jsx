import { createSlice } from "@reduxjs/toolkit";
import { getPortfolioDetailBySlug } from "../actions/portfolio";

const initialState = {
  isLoading: false,
  detailPortfolioData: {},
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getPortfolioDetailBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getPortfolioDetailBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.detailPortfolioData = action.payload.data;
      })
      .addCase(getPortfolioDetailBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage =
          action.payload || "Failed to fetch detail portfolio";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = portfolioSlice.actions;
export default portfolioSlice.reducer;
