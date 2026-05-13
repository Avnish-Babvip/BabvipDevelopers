import { createSlice } from "@reduxjs/toolkit";
import {
  bookAppointment,
  cancelAppointment,
  getMyAppointments,
  getServiceEnquiry,
  getServices,
  getServicesCategory,
  getTechnicianSlotsTime,
  storeCustomerEnquiry,
} from "../actions/services";
import { toast } from "sonner";

const initialState = {
  serviceLoading: false,
  bookingLoading: false,
  categoryData: [],
  serviceData: [],
  serviceEnquiryData: [],
  slotTimeData: [],
  appointmentData: [],
  errorMessage: "",
  isEnquirySuccess: false,
};

// ---------------------------------------------------------------------------------------

const servicesSlice = createSlice({
  name: "servicesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getTechnicianSlotsTime.pending, (state) => {
        state.isEnquirySuccess = false;
        state.errorMessage = "";
        state.serviceLoading = false;
      })
      .addCase(getTechnicianSlotsTime.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.slotTimeData = action.payload.data;
      })
      .addCase(getTechnicianSlotsTime.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(getMyAppointments.pending, (state) => {
        state.errorMessage = "";
        state.serviceLoading = false;
        state.isEnquirySuccess = false;
      })
      .addCase(getMyAppointments.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.appointmentData = action.payload.data;
      })
      .addCase(getMyAppointments.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(getServicesCategory.pending, (state) => {
        state.errorMessage = "";
        state.serviceLoading = false;
        state.isEnquirySuccess = false;
      })
      .addCase(getServicesCategory.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.categoryData = action.payload.data;
      })
      .addCase(getServicesCategory.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })

      .addCase(getServices.pending, (state) => {
        state.errorMessage = "";
        state.serviceLoading = false;
        state.isEnquirySuccess = false;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.serviceData = action.payload.data;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })

      .addCase(getServiceEnquiry.pending, (state) => {
        state.errorMessage = "";
      })
      .addCase(getServiceEnquiry.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.serviceEnquiryData = action.payload.data.data;
      })
      .addCase(getServiceEnquiry.rejected, (state, action) => {
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(storeCustomerEnquiry.pending, (state) => {
        state.serviceLoading = true;
        state.isEnquirySuccess = false;
        state.errorMessage = "";
      })
      .addCase(storeCustomerEnquiry.fulfilled, (state, action) => {
        state.serviceLoading = false;
        state.isEnquirySuccess = true;
        state.errorMessage = "";
        toast("Your Enquiry submitted successfully.");
      })
      .addCase(storeCustomerEnquiry.rejected, (state, action) => {
        state.serviceLoading = false;
        state.isEnquirySuccess = false;
        state.errorMessage = action.payload || "Failed ";
        toast(action.payload);
      })

      .addCase(cancelAppointment.pending, (state) => {
        state.serviceLoading = true;
        state.errorMessage = "";
      })
      .addCase(cancelAppointment.fulfilled, (state, action) => {
        state.serviceLoading = false;
        state.errorMessage = "";
        toast("Appointment cancelled successfully.");
      })
      .addCase(cancelAppointment.rejected, (state, action) => {
        state.serviceLoading = false;
        state.errorMessage = action.payload || "Failed ";
        toast(action.payload);
      })
      .addCase(bookAppointment.pending, (state) => {
        state.bookingLoading = true;
        state.errorMessage = "";
        state.isEnquirySuccess = false;
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.bookingLoading = false;
        state.errorMessage = "";
        state.isEnquirySuccess = true;
        toast("Your appointment booked successfully.");
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.bookingLoading = false;
        state.isEnquirySuccess = false;
        state.errorMessage = action.payload || "Failed ";
        toast(action.payload);
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = servicesSlice.actions;
export default servicesSlice.reducer;
