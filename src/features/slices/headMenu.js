import { createSlice } from "@reduxjs/toolkit";
import { getAllHeadMenu } from "../actions/headMenu";


const initialState = {
  isLoading: false,
  headMenuData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const headMenuSlice = createSlice({
  name: "headMenuSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getAllHeadMenu.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllHeadMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.headMenuData = action.payload.data; 

      })
      .addCase(getAllHeadMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = headMenuSlice.actions;
export default headMenuSlice.reducer;