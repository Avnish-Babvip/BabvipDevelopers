import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  changePassword,
  checkSoftwareExist,
  customerLogin,
  customerLogout,
  customerSignup,
  dealerLogin,
  dealerLogout,
  getCustomerOrders,
  getCustomerProducts,
  resendVerifyEmailRegister,
  resetPasswordMail,
  verifyEmailRegister,
} from "../actions/authentication";

const formattedDate = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const initialState = {
  isLoading: false,
  isRegister: false,
  isEmailVerified: false,
  isUserLoggedIn: false,
  isDealerLoggedIn: false,
  isPasswordChanged: false,
  customerData: {},
  dealerData: {},
  response: {},
  orderData: null,
  productData: null,
  errorMessage: "",
  checkSoftwareResponse: null,
};

// ---------------------------------------------------------------------------------------

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    resetForgotPasswordState: (state) => {
      state.isPasswordChanged = false;
      state.errorMessage = "";
      state.isLoading = false;
      state.isRegister = false;
      state.isEmailVerified = false;
    },
    resetUserState: (state) => {
      state.isUserLoggedIn = false;
      state.isDealerLoggedIn = false;
      state.customerData = {};
      state.dealerData = {};
      state.isLoading = false;
    },
    resetErrorMessage: (state, action) => {
      state.errorMessage = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(customerSignup.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isRegister = false;
      })
      .addCase(customerSignup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isRegister = true;
        toast("Customer Signup Successful.", {
          description: formattedDate,
        });
      })
      .addCase(customerSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isRegister = false;
        state.errorMessage = action.payload || "Failed";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(customerLogin.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = true;
        state.customerData = action.payload;
        toast("Client Login Successful.", {
          description: formattedDate,
        });
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(dealerLogin.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(dealerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDealerLoggedIn = true;
        state.dealerData = action.payload.data;
        toast("Dealer Login Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(dealerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(resetPasswordMail.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(resetPasswordMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        state.errorMessage = "";
        toast(action.payload.message, {
          description: formattedDate,
        });
      })
      .addCase(resetPasswordMail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isPasswordChanged = true;
        toast("Password reset successfully.", {
          description: formattedDate,
        });
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(verifyEmailRegister.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isEmailVerified = false;
      })
      .addCase(verifyEmailRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isEmailVerified = true;
        toast("Email verified successfully.", {
          description: formattedDate,
        });
      })
      .addCase(verifyEmailRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isEmailVerified = false;
        state.errorMessage = action.payload || "Failed ";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(resendVerifyEmailRegister.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(resendVerifyEmailRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        toast("Resent the email for verification successfully.", {
          description: formattedDate,
        });
      })
      .addCase(resendVerifyEmailRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed ";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(customerLogout.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(customerLogout.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        state.customerData = {};
        toast("Log out Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(customerLogout.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed to logout API.";
        toast("Logout failed. Please try again", {
          description: formattedDate,
        });
      })
      .addCase(dealerLogout.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(dealerLogout.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.isDealerLoggedIn = false;
        state.dealerData = {};
        toast("Log out Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(dealerLogout.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed to logout API.";
        toast("Logout failed. Please try again", {
          description: formattedDate,
        });
      })
      .addCase(getCustomerOrders.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getCustomerOrders.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.orderData = action.payload.customer_order;
      })
      .addCase(getCustomerOrders.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed to API.";
      })
      .addCase(getCustomerProducts.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getCustomerProducts.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.productData = action.payload.customer_product;
      })
      .addCase(getCustomerProducts.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(checkSoftwareExist.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(checkSoftwareExist.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.checkSoftwareResponse = action.payload;
      })
      .addCase(checkSoftwareExist.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed  ";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { resetUserState, resetForgotPasswordState, resetErrorMessage } =
  customerSlice.actions;
export default customerSlice.reducer;
