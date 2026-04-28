import { createSlice } from "@reduxjs/toolkit";
import { getDetailBlogBySlug, getLatestThreeBlogs, getLatestTwoBlogs, getPaginateBlogs } from "../actions/blog";


const initialState = {
  isLoading: false,
  blogData: [],
  latestBlogData: [],
  twoBlogData: [],
  detailBlogData:{},
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

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = blogSlice.actions;
export default blogSlice.reducer;