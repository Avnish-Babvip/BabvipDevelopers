import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

export const getTeam = createAsyncThunk(
  "/site/latestteam",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/latestteam`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch team."
      );
    }
  }
);

export const getFourInTeam = createAsyncThunk(
  "/site/latestfourteam",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/latestfourteam`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch team."
      );
    }
  }
);
