import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";


// Fetch All route data
export const getRouteDataBySlug = createAsyncThunk(
  "/site/routeData",
  async (slug, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/pagedata/${slug}`, {
            withCredentials: false,
            headers: headers
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch home data.");
    }
  }
);