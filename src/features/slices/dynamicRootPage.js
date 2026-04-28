import { createSlice } from "@reduxjs/toolkit";
import { getRouteDataBySlug } from "../actions/dynamicRootPage";


const initialState = {
  isLoading: false,
  routeData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const dynamicRootPageSlice = createSlice({
  name: "dynamicRootPageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
   
      .addCase(getRouteDataBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getRouteDataBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.routeData = action.payload;

      })
      .addCase(getRouteDataBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = dynamicRootPageSlice.actions;
export default dynamicRootPageSlice.reducer;