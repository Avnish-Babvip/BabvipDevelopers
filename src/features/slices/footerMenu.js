import { createSlice } from "@reduxjs/toolkit";
import { getAllFooterMenu } from "../actions/footerMenu";



const initialState = {
  isLoading: false,
  footerMenuData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const footerMenuSlice = createSlice({
  name: "footerMenuSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getAllFooterMenu.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllFooterMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.footerMenuData = action.payload.data; 

      })
      .addCase(getAllFooterMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = footerMenuSlice.actions;
export default footerMenuSlice.reducer;