import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewsletter } from "../../features/actions/submission";
import { useForm } from "react-hook-form";
import ButtonLoader from "../Loader/ButtonLoader";
import { toast } from "sonner";

const SubscribeForm = ({ buttonText, colorCode }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.submission);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) || "Please enter a valid email address";
  };

  const onSubmit = (data2) => {
    dispatch(addNewsletter(data2));
    reset();
  };

  return (
    <form
      className="newsletter-form position-relative d-block d-lg-flex d-md-flex"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("email", {
          required: "Email is required",
          validate: validateEmail,
        })}
        type="text"
        class="input-newsletter form-control me-2"
        placeholder="Enter Your Email"
        name="email"
        autocomplete="off"
      />
      {errors.email && toast.error(errors.email.message) && ""}
      <button
        disabled={isLoading}
        className={`btn ${
          colorCode ? "text-white" : "btn-primary"
        } rounded mt-3 mt-lg-0 mt-md-0`}
        style={{ backgroundColor: colorCode }}
      >
        {isLoading ? <ButtonLoader /> : buttonText}
      </button>
    </form>
  );
};

export default SubscribeForm;
