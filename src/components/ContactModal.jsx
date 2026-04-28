import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../features/actions/countryStateCity";
import ButtonLoader from "./Loader/ButtonLoader";
import { storeCustomerEnquiry } from "../features/actions/services";

const ContactModal = ({ modalData }) => {
  const dispatch = useDispatch();
  const { serviceLoading, isEnquirySuccess } = useSelector(
    (state) => state.services,
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      ...modalData,
      message: data.message,
    };
    dispatch(storeCustomerEnquiry(newData));
  };

  useEffect(() => {
    if (isEnquirySuccess) {
      const modalEl = document.getElementById("btn-enquiry-1");

      const modal = window.bootstrap.Modal.getInstance(modalEl);
      modal?.hide(); // ✅ close modal

      reset(); // optional: clear form
    }
  }, [isEnquirySuccess]);

  return (
    <div className="modal fade bs-example-modal-xl" id="btn-enquiry-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row">
              <div className=" p-5">
                <form id="customer-lead-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="mb-3">
                      <label className="form-label">Enquiry Message*</label>
                      <textarea
                        type="text"
                        className="form-control"
                        {...register("message", {
                          required: "Enquiry Message is required",
                        })}
                        placeholder="Enquiry Message *"
                      />
                      {errors.message && (
                        <span className="text-danger">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="modal-footer d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={serviceLoading}
                    >
                      {serviceLoading ? <ButtonLoader /> : "Send Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
