import { createSlice } from "@reduxjs/toolkit";
import { addContactDetails, addMaintenanceEnquiry, addNewsletter} from "../actions/submission";
import { toast } from "sonner";
  
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
  errorMessage: "",
};



// ---------------------------------------------------------------------------------------

 const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(addContactDetails.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addContactDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        toast("Contact details have been submitted.", {
            description: formattedDate,
          });

      })
      .addCase(addContactDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
        toast("Submission is failed. Please try again", {
            description: formattedDate,
          });
      })
      .addCase(addMaintenanceEnquiry.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addMaintenanceEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        toast("Your enquiry form has been submitted.", {
            description: formattedDate,
          });

      })
      .addCase(addMaintenanceEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
        toast("Submission is failed. Please try again", {
            description: formattedDate,
          });
      })
      .addCase(addNewsletter.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addNewsletter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        console.log(action.payload )  
        toast(action.payload.status == 409 ? action.payload.message : "You have been subscribed to the newsletter.", {
            description: formattedDate,
          });

      })
      .addCase(addNewsletter.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
        toast("Failed to subscribe. Please try again", {
            description: formattedDate,
          });
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = contactSlice.actions;
export default contactSlice.reducer;