import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
}

// Fetch All HeadMenu
export const getAllHeadMenu = createAsyncThunk(
  "site/headmenu",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/headmenu`, {
            withCredentials: false,
            headers
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch headmenu.");
    }
  }
);