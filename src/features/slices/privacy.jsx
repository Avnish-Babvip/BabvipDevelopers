import { createSlice } from "@reduxjs/toolkit";
import { getPrivacyDataStyle2 } from "../actions/privacy";

const initialState = {
  isLoading: false,
  privacyData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

const privacySlice = createSlice({
  name: "privacySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getPrivacyDataStyle2.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getPrivacyDataStyle2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.privacyData = action.payload.data;
      })
      .addCase(getPrivacyDataStyle2.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = privacySlice.actions;
export default privacySlice.reducer;
