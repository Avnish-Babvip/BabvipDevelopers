import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

// Fetch  home data
export const getHomeData = createAsyncThunk(
  "/site/ishomepage",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/ishomepage`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch home data."
      );
    }
  }
);
