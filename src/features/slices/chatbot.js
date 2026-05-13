import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  connectSupport,
  getChatService,
  guestDetails,
  sendMessage,
  serviceQuestions,
  validateCustomer,
} from "../actions/chatbot";

const initialState = {
  chatLoading: false,
  supportData: {},
  serviceData: [],
  questionData: [],
};

// ---------------------------------------------------------------------------------------

const chatbotSlice = createSlice({
  name: "chatbotSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(connectSupport.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(connectSupport.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.supportData = action.payload;
      })
      .addCase(connectSupport.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(sendMessage.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.errorMessage = "";
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(validateCustomer.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(validateCustomer.fulfilled, (state, action) => {
        state.errorMessage = "";
      })
      .addCase(validateCustomer.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(guestDetails.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(guestDetails.fulfilled, (state, action) => {
        state.errorMessage = "";
      })
      .addCase(guestDetails.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(getChatService.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getChatService.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.serviceData = action.payload.data;
      })
      .addCase(getChatService.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(serviceQuestions.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(serviceQuestions.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.questionData = action.payload.data;
      })
      .addCase(serviceQuestions.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = chatbotSlice.actions;
export default chatbotSlice.reducer;
