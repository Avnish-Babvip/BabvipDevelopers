import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addContactDetails } from "../../../features/actions/submission";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../Loader/ButtonLoader";
import Captcha from "../../Captcha/Captcha";

const Style1 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
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

  const validateMobileNumber = (number) => {
    const regex = /^[1-9]\d{9}$/;
    return regex.test(number) || "Please enter a 10-digit number";
  };

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const onSubmit = (data2) => {
    if (!isCaptchaVerified) {
      alert("Please verify captcha before submitting.");
      return;
    }
    dispatch(addContactDetails(data2));
    reset();
  };

  return (
    <>
      <section class="contact-promo ptb-80">
        <div class="container">
          <div class="row justify-content-center">
            {data?.step_data?.map((item, idx) => (
              <>
                {" "}
                <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                    <div
                      class="integration-logo  p-2 d-inline-block"
                      style={{ "box-shadow": "none" }}
                    >
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="img-fluid p-0"
                      />
                    </div>
                    <div class="contact-promo-info mb-4">
                      <h5>{item?.step_title}</h5>
                      <p>{item?.step_description}</p>
                    </div>
                    <Link
                      to={item?.link_url}
                      class={`btn ${
                        idx === 1 ? "btn-primary" : "btn-link"
                      } mt-auto`}
                    >
                      {item?.link_text}
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section
        class="contact-us-form pt-60 pb-80"
        style={{
          background: `url('${assetRoute}/assets/img/shape/contact-us-bg.svg')no-repeat center bottom`,
        }}
      >
        <div class="container">
          <div class="row justify-content-lg-between align-items-center">
            <div class="col-lg-6 col-md-8">
              <div class="section-heading">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="register-form contactForm"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="s8v3m35mvBf1srI0ry17TeGzsVPZFhtFqK20UeoE"
                  autocomplete="off"
                />{" "}
                <div class="row">
                  <div class="col-sm-6 mb-3">
                    <label for="firstName" class="mb-1">
                      First name <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                        type="text"
                        class="form-control"
                        id="firstName"
                        required=""
                        placeholder="First name"
                        aria-label="First name"
                        name="first_name"
                      />
                    </div>
                    {errors.first_name && (
                      <span className="text-danger small">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  <div class="col-sm-6 ">
                    <label for="lastName" class="mb-1">
                      Last name
                    </label>
                    <div class="input-group mb-3">
                      <input
                        {...register("last_name")}
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder="Last name"
                        aria-label="Last name"
                        name="last_name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label for="phone" class="mb-1">
                      Phone Number <span class="text-danger">*</span>
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("phone", {
                          required: "Contact Number is required",
                          validate: validateMobileNumber,
                        })}
                        type="text"
                        class="form-control"
                        id="phone"
                        required=""
                        placeholder="Phone Number"
                        aria-label="Phone"
                        name="phone"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-danger small">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div class="col-sm-6 mb-3">
                    <label for="email" class="mb-1">
                      Email<span class="text-danger">*</span>
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("email", {
                          required: "Email is required",
                          validate: validateEmail,
                        })}
                        type="email"
                        class="form-control"
                        id="email"
                        required=""
                        placeholder="Email"
                        aria-label="Email"
                        name="email"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-danger small">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div class="col-12 mb-3">
                    <label for="subject" class="mb-1">
                      Subject<span class="text-danger">*</span>
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        type="text"
                        class="form-control"
                        id="subject"
                        required=""
                        placeholder="Subject"
                        aria-label="subject"
                        name="subject"
                      />
                    </div>
                    {errors.subject && (
                      <span className="text-danger small">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                  <div class="col-12 mb-3">
                    <label for="yourMessage" class="mb-1">
                      Message <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                        })}
                        class="form-control"
                        id="yourMessage"
                        required=""
                        placeholder="How can we help you?"
                        style={{ height: "120px" }}
                        name="message"
                      ></textarea>
                    </div>
                    {errors.message && (
                      <span className="text-danger small">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  <div className="col-12 mb-3">
                    <Captcha onVerify={setIsCaptchaVerified} />
                  </div>
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  class="btn btn-primary mt-4 submitbtn"
                >
                  {isLoading ? <ButtonLoader /> : "Get in Touch"}
                </button>
              </form>
            </div>
            <div class="col-lg-5 col-md-10">
              <div class="contact-us-img d-none d-lg-block">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image
                  }`}
                  alt="contact-cover"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style1;
