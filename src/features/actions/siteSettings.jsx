import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

// Fetch All SiteSettings
export const getAllSiteSettings = createAsyncThunk(
  "/site/sitesetting",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/sitesetting`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch site Settings."
      );
    }
  }
);
