import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";


// Fetch All FooterMenu
export const getAllFooterMenu = createAsyncThunk(
  "/site/footermenu",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/footermenu`, {
            withCredentials: false,
            headers: headers
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch footermenu.");
    }
  }
);