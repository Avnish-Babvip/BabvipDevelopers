import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

const getCsrfToken = async () => {
  const response = await instance.get("/site/csrf-token", {
    headers: headers,
  });
  return response.data.csrf_token;
};

//CUSTOMER

export const customerSignup = createAsyncThunk(
  "/customer/register",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/customer/register`, payload, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to post");
    }
  },
);

export const customerLogin = createAsyncThunk(
  "/customer/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/login`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to post customer login",
      );
    }
  },
);

export const resetPasswordMail = createAsyncThunk(
  "/customer/forgot-password",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/forgot-password`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const changePassword = createAsyncThunk(
  "/customer/reset-password",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/reset-password`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const verifyEmailRegister = createAsyncThunk(
  "/customer/verify-email",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/customer/verify-email`, payload, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const resendVerifyEmailRegister = createAsyncThunk(
  "/customer/resend-verification",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/resend-verification`,
        payload,
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const customerLogout = createAsyncThunk(
  "customerLogout",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/logout`,
        {},
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
      return rejectWithValue(
        error.response.data.message || "Failed to logout customer ",
      );
    }
  },
);

export const getCustomerOrders = createAsyncThunk(
  "/customer/order/data",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/customerorder`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed checkout API ",
      );
    }
  },
);
export const getCustomerProducts = createAsyncThunk(
  "/customer/product",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/customerproduct`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed checkout API ",
      );
    }
  },
);

export const checkSoftwareExist = createAsyncThunk(
  "/customer/checksoftwareexist",
  async ({ payload, loginToken }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/checksoftwareexist`,
        { ...payload, _token: await getCsrfToken() },
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
      return rejectWithValue(error.response.data.message);
    }
  },
);

//DEALER

export const dealerLogin = createAsyncThunk(
  "/dealer/logincheck",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/dealer/logincheck`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to post dealer login",
      );
    }
  },
);

export const dealerLogout = createAsyncThunk(
  "dealerLogout",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/dealer/logout`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to logout dealer ",
      );
    }
  },
);
