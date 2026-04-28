import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

// Fetch portfolio details by slug
export const getPortfolioDetailBySlug = createAsyncThunk(
  "/site/portfoliodetail",
  async (slug, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/portfoliodetail/${slug}`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch blogs."
      );
    }
  }
);
