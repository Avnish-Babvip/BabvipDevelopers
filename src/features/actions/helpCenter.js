import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";


export const getHelpCenter = createAsyncThunk(
    "/site/helpdata",
    async (_, { rejectWithValue }) => {
      try {
          const {data} = await instance.get(`/site/helpdata`, {
              withCredentials: false,
              headers: headers
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to fetch help data.");
      }
    }
  );

  export const getHelpCenterDetailBySlug = createAsyncThunk(
    "/site/helpdetails/slug",
    async (slug, { rejectWithValue }) => {
      try {
        const { data } = await instance.get(`/site/helpdetails/${slug}`, {
          withCredentials: false,
          headers: headers,
        });
        return data;
      } catch (error) {
        return rejectWithValue(
          error.response.data.message || "Failed to fetch help details"
        );
      }
    }
  );