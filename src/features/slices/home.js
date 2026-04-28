import { createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "../actions/home";


const initialState = {
  isLoading: false,
  homeData:{},
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getHomeData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.homeData = action.payload; 
      })
      .addCase(getHomeData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch home data.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = homeSlice.actions;
export default homeSlice.reducer;