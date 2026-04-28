import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { sendInternInfo } from "../actions/intern";

const formattedDate = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const initialState = {
  isLoading: false,
  errorMessage: "",
  internData: null,
  response: {},
};

// ---------------------------------------------------------------------------------------

const internSlice = createSlice({
  name: "internSlice",
  initialState,
  reducers: {
    clearInternData: (state) => {
      state.internData = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(sendInternInfo.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(sendInternInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.internData = action.payload.data;
        state.response = action.payload;
        toast(action.payload.message, {
          description: formattedDate,
        });
      })
      .addCase(sendInternInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.internData = null;
        state.errorMessage = action.payload || "Failed to fetch";
        toast("Submission is failed. Please try again", {
          description: formattedDate,
        });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { clearInternData } = internSlice.actions;
export default internSlice.reducer;
