import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

export const getAllCountries = createAsyncThunk(
  "/site/getallcountries",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/countries`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch countries.",
      );
    }
  },
);

export const getAllStatesById = createAsyncThunk(
  "/site/getstatebycountryapi/",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/states/${id}`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch states.",
      );
    }
  },
);

export const getAllCityById = createAsyncThunk(
  "/site/getcitybystateapi/id",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/cities/${id}`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch cities",
      );
    }
  },
);
