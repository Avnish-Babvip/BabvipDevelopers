import { createSlice } from "@reduxjs/toolkit";
import {
  getDetailBlogBySlug,
  getDetailInsightBySlug,
  getLatestThreeBlogs,
  getLatestThreeInsights,
  getLatestTwoBlogs,
  getLatestTwoInsights,
  getPaginateBlogs,
  getPaginateInsights,
} from "../actions/blog";

const initialState = {
  isLoading: false,
  blogData: [],
  insightData: [],
  latestBlogData: [],
  latestInsightData: [],
  twoBlogData: [],
  twoInsightData: [],
  detailBlogData: {},
  detailInsightData: {},
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getLatestThreeBlogs.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getLatestThreeBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.latestBlogData = action.payload.data;
      })
      .addCase(getLatestThreeBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch blog data.";
      })
      .addCase(getLatestThreeInsights.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getLatestThreeInsights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.latestInsightData = action.payload.data;
      })
      .addCase(getLatestThreeInsights.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to fetch blog data.";
      })

      .addCase(getLatestTwoInsights.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getLatestTwoInsights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.twoInsightData = action.payload.data;
      })
      .addCase(getLatestTwoInsights.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to fetch blog data.";
      })
      .addCase(getLatestTwoBlogs.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getLatestTwoBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.twoBlogData = action.payload.data;
      })
      .addCase(getLatestTwoBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch blog data.";
      })
      .addCase(getPaginateInsights.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getPaginateInsights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.insightData = action.payload.data;
      })
      .addCase(getPaginateInsights.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to fetch blog data.";
      })
      .addCase(getPaginateBlogs.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getPaginateBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.blogData = action.payload.data;
      })
      .addCase(getPaginateBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch blog data.";
      })
      .addCase(getDetailBlogBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getDetailBlogBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.detailBlogData = action.payload;
      })
      .addCase(getDetailBlogBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })
      .addCase(getDetailInsightBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getDetailInsightBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.detailInsightData = action.payload;
      })
      .addCase(getDetailInsightBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = blogSlice.actions;
export default blogSlice.reducer;
