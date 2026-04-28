import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

export const getPrivacyDataStyle2 = createAsyncThunk(
  "/site/privacystyle2",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/privacystyle2`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  }
);
