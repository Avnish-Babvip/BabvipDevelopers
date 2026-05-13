import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import axios from "axios";
import { headers } from "./headMenu";

const getCsrfToken = async () => {
  const response = await instance.get("/site/csrf-token", {
    headers: headers,
  });
  return response.data.csrf_token;
};

const getIpAddress = async () => {
  const response = await axios.get("https://api64.ipify.org/?format=json");
  return response.data.ip;
};

export const sendInternInfo = createAsyncThunk(
  "/site/interninfo",
  async (payload, { rejectWithValue }) => {
    try {
      const ipAddress = await getIpAddress();
      const { data } = await instance.post(
        `/site/interninfo`,
        { ...payload, ip_address: ipAddress, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to post intern info",
      );
    }
  },
);

export const getDepartmentWithCourses = createAsyncThunk(
  "/customer/courses",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/courses`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);

export const storeCourseEnquiry = createAsyncThunk(
  "customer/course-enquiry",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.post(`/customer/course-enquiry`, payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);
