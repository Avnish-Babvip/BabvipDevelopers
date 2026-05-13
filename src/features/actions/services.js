import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

export const getTechnicianSlotsTime = createAsyncThunk(
  "/customer/slots",
  async ({ date, id }, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.get(
        `/customer/slots?service_slug=${id}&date=${date}`,
        {
          withCredentials: false,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${loginToken}`,
          },
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);

export const bookAppointment = createAsyncThunk(
  "customer/appointments",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.post(`/customer/appointments`, payload, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);
export const cancelAppointment = createAsyncThunk(
  "customer/cancel-appointment",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.post(
        `/customer/cancel-appointment`,
        payload,
        {
          withCredentials: false,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${loginToken}`,
          },
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);

export const getMyAppointments = createAsyncThunk(
  "/customer/my-appointments",
  async (_, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.get(`/customer/my-appointments`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);

export const getServicesCategory = createAsyncThunk(
  "/customer/service-plan-category",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/service-plan-category`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);
export const getServices = createAsyncThunk(
  "/customer/service",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/customer/service-plan?category_id=${id}`,
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);

export const getServiceEnquiry = createAsyncThunk(
  "/customer/my-enquiries",
  async (id, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.get(`/customer/my-enquiries`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);

export const storeCustomerEnquiry = createAsyncThunk(
  "customer/store-enquiry",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const loginToken = getState().authentication?.customerData?.token;
      const { data } = await instance.post(`/customer/store-enquiry`, payload, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch ");
    }
  },
);
