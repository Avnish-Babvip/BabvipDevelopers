import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  closeChat,
  connectSupport,
  getChatService,
  guestDetails,
  sendImage,
  sendMessage,
  serviceQuestions,
  validateCustomer,
} from "../actions/chatbot";

const initialState = {
  chatLoading: false,
  supportData: {},
  serviceData: [],
  questionData: [],
  messages: [
    {
      sender: "bot",
      text: "Welcome To Babvip Support. Do you have Customer ID? (Yes/No)",
    },
  ],
  step: "askCustomerId",
  guestData: {
    customer_id: "",
    name: "",
    phone: "",
    email: "",
  },
  selectedService: null,
};

// ---------------------------------------------------------------------------------------

const chatbotSlice = createSlice({
  name: "chatbotSlice",
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      const { matchField, matchValue, updatedData } = action.payload;

      state.messages = state.messages.map((msg) =>
        msg[matchField] === matchValue ? { ...msg, ...updatedData } : msg,
      );
    },
    removeMessage: (state, action) => {
      const { matchField, matchValue } = action.payload;

      state.messages = state.messages.filter(
        (msg) => msg[matchField] !== matchValue,
      );
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    addMessage: (state, action) => {
      console.log(state.messages);
      state.messages.push(action.payload);
    },

    clearChat: () => initialState,

    setStep: (state, action) => {
      state.step = action.payload;
    },

    setGuestData: (state, action) => {
      state.guestData = action.payload;
    },

    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(closeChat.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(closeChat.fulfilled, (state, action) => {
        state.errorMessage = "";
      })
      .addCase(closeChat.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(sendImage.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(sendImage.fulfilled, (state, action) => {
        state.errorMessage = "";
      })
      .addCase(sendImage.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
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
export const {
  setMessages,
  addMessage,
  clearChat,
  setStep,
  setGuestData,
  updateMessage,
  removeMessage,
  setSelectedService,
} = chatbotSlice.actions;
export default chatbotSlice.reducer;
