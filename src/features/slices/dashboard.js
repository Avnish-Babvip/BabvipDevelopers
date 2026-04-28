import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  changePasswordDashboard,
  getDashboardData,
  getDealerDashboardData,
  getDealerProfileData,
  getProfileData,
  updateBillingDashboard,
  updateProfileDashboard,
  updateProfilePhotoDashboard,
} from "../actions/dashboard";

const initialState = {
  isLoading: false,
  isImageLoading: false,
  isUserLoggedIn: false,
  dashboardData: {},
  dealerDashboardData: {},
  profileData: {},
  dealerProfileData: {},
  errorMessage: "",
  updateResponse: {},
};

const formattedDate = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

// ---------------------------------------------------------------------------------------

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    resetUpdateResponse: (state) => {
      state.updateResponse = {};
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getDashboardData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.dashboardData = action.payload.data;
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getDealerDashboardData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getDealerDashboardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.dealerDashboardData = action.payload.data;
      })
      .addCase(getDealerDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getProfileData.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.profileData = action.payload.data;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(getDealerProfileData.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getDealerProfileData.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.dealerProfileData = action.payload.data;
      })
      .addCase(getDealerProfileData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(changePasswordDashboard.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(changePasswordDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        toast("Password changed successfully.", {
          description: formattedDate,
        });
      })
      .addCase(changePasswordDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(updateProfileDashboard.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(updateProfileDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.updateResponse = action.payload;
        toast("Profile updated successfully.", {
          description: formattedDate,
        });
      })
      .addCase(updateProfileDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(updateBillingDashboard.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(updateBillingDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.updateResponse = action.payload;
        toast("Billing details updated successfully.", {
          description: formattedDate,
        });
      })
      .addCase(updateBillingDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(updateProfilePhotoDashboard.pending, (state) => {
        state.isImageLoading = true;
        state.errorMessage = "";
      })
      .addCase(updateProfilePhotoDashboard.fulfilled, (state, action) => {
        state.isImageLoading = false;
        state.errorMessage = "";
        state.updateResponse = action.payload;
        toast("Profile photo updated successfully.", {
          description: formattedDate,
        });
      })
      .addCase(updateProfilePhotoDashboard.rejected, (state, action) => {
        state.isImageLoading = false;
        state.errorMessage = action.payload;
        toast(action.payload, {
          description: formattedDate,
        });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { resetUpdateResponse } = dashboardSlice.actions;
export default dashboardSlice.reducer;
