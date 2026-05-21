import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import axios from "axios";

export const closeChat = createAsyncThunk(
  "chat/closeChat",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/chat/close-chat", payload);

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed ",
      );
    }
  },
);

export const sendImage = createAsyncThunk(
  "chat/upload",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/chat/upload", payload);

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed ",
      );
    }
  },
);

export const connectSupport = createAsyncThunk(
  "chat/connect-support",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/chat/connect-support", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to start chat.",
      );
    }
  },
);
export const sendMessage = createAsyncThunk(
  "chat/send-message",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/chat/send-message", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed ",
      );
    }
  },
);

export const validateCustomer = createAsyncThunk(
  "validate-customer",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/chat/validate-customer", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to start chat.",
      );
    }
  },
);

export const guestDetails = createAsyncThunk(
  "guest-details",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/chat/guest-details", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to start chat.",
      );
    }
  },
);

export const getChatService = createAsyncThunk(
  "chat/services",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/chat/services", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to start chat.",
      );
    }
  },
);

export const serviceQuestions = createAsyncThunk(
  "questions/id",
  async (service_id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/chat/questions/${service_id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to start chat.",
      );
    }
  },
);
