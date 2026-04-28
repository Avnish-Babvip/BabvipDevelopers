import { createSlice } from "@reduxjs/toolkit";
import { getAllSiteSettings } from "../actions/siteSettings";


const initialState = {
  isLoading: false,
  siteSettingsData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const siteSettingsSlice = createSlice({
  name: "siteSettingsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(getAllSiteSettings.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllSiteSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.siteSettingsData = action.payload; 

      })
      .addCase(getAllSiteSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = siteSettingsSlice.actions;
export default siteSettingsSlice.reducer;