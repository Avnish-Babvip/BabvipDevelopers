import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import Captcha from "../../Captcha/Captcha";

const Style2 = ({ data }) => {
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
    <section class="contact-us ptb-80 position-relative overflow-hidden">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-5 col-md-12">
            <div
              class="section-heading aos-init aos-animate"
              data-aos="fade-up"
            >
              <h4 class="h5 text-primary">{data?.sub_title}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description} </p>
            </div>
            <div class="row justify-content-between pb-5">
              {data?.step_data?.map((item, idx) => (
                <div
                  class="col-sm-6 mb-4 mb-md-0 mb-lg-0 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div class="icon-box d-inline-block rounded-circle bg-primary-soft">
                    <i class="fas fa-phone fa-2x text-primary"></i>
                  </div>
                  <div class="contact-info">
                    <h5>{item?.step_title}</h5>
                    <p>{item?.step_description}</p>
                    <Link
                      to={`tel:${item?.step_link_text}`}
                      class="read-more-link text-decoration-none"
                    >
                      <i class="fas fa-phone me-2"></i> {item?.step_link_text}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="col-xl-5 col-lg-7 col-md-12">
            <div
              class="register-wrap p-5 bg-white shadow rounded-custom position-relative aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="register-form position-relative z-5"
              >
                <h3 class="mb-5 fw-medium">
                  Fill out the form and we'll be in touch as soon as possible.
                </h3>
                <div class="row">
                  <div class="col-sm-6 mb-3">
                    <div class="input-group ">
                      <input
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                        type="text"
                        class="form-control"
                        placeholder="First Name*"
                      />
                    </div>
                    {errors.first_name && (
                      <span className="text-danger small">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  <div class="col-sm-6 mb-3">
                    <div class="input-group ">
                      <input
                        {...register("last_name")}
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-3">
                    <div class="input-group ">
                      <input
                        {...register("email", {
                          required: "Email is required",
                          validate: validateEmail,
                        })}
                        type="text"
                        class="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-danger small">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div class="col-sm-6 mb-3">
                    <div class="input-group ">
                      <input
                        {...register("phone", {
                          required: "Contact Number is required",
                          validate: validateMobileNumber,
                        })}
                        type="number"
                        class="form-control"
                        placeholder="Contact Number*"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-danger small">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  <div class="col-sm-12 mb-3">
                    <div class="input-group ">
                      <input
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        type="text"
                        class="form-control"
                        placeholder="Subject*"
                      />
                    </div>
                    {errors.subject && (
                      <span className="text-danger small">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                  <div class="col-12 mb-3">
                    <div class="input-group ">
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                        })}
                        class="form-control"
                        placeholder="Write a message...*"
                        style={{ height: "120px" }}
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
                  {/* <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label small"
                        for="flexCheckChecked"
                      >
                        Yes, I'd like to receive occasional marketing emails
                        from us. I have the right to opt out at any time.
                        <a href="#"> View privacy policy</a>.
                      </label>
                    </div>
                  </div> */}
                  <div class="col-12">
                    <button
                      disabled={isLoading}
                      class="btn btn-primary mt-4 d-block w-100"
                    >
                      {isLoading ? <ButtonLoader /> : "Get Started"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class=" bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5"
        style={{
          background: `url('${assetRoute}/assets/img/shape/dot-dot-wave-shape.svg')no-repeat center top`,
        }}
      >
        <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
      </div>
    </section>
  );
};

export default Style2;
