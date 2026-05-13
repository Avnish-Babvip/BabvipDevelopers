import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  getDepartmentWithCourses,
  sendInternInfo,
  storeCourseEnquiry,
} from "../actions/intern";

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
  isEnquirySuccess: false,
  courseLoading: false,
  errorMessage: "",
  internData: null,
  courseData: [],
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
        state.internData = null;
        state.errorMessage = action.payload || "Failed to fetch";
        toast("Submission is failed. Please try again", {
          description: formattedDate,
        });
      })
      .addCase(getDepartmentWithCourses.pending, (state) => {
        state.errorMessage = "";
        state.isEnquirySuccess = false;
      })
      .addCase(getDepartmentWithCourses.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.courseData = action.payload.data;
      })
      .addCase(getDepartmentWithCourses.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(storeCourseEnquiry.pending, (state) => {
        state.courseLoading = true;
        state.isEnquirySuccess = false;
        state.errorMessage = "";
      })
      .addCase(storeCourseEnquiry.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.isEnquirySuccess = true;
        state.errorMessage = "";
        toast("Your Course Enquiry submitted successfully.");
      })
      .addCase(storeCourseEnquiry.rejected, (state, action) => {
        state.courseLoading = false;
        state.isEnquirySuccess = false;
        state.errorMessage = action.payload || "Failed ";
        toast(action.payload);
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { clearInternData } = internSlice.actions;
export default internSlice.reducer;
