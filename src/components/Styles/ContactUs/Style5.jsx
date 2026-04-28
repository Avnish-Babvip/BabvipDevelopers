import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import { useState } from "react";
import Captcha from "../../Captcha/Captcha";

const Style5 = ({ data }) => {
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
      <div class="rm-contact-area pt-120 pb-60 position-relative z-1">
        <img
          src={`${assetRoute}/assets/img/risk_managment/shape/contact_2.png`}
          alt=""
          class="s-two position-absolute z--1"
        />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h6 class="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                {data?.sub_title}
              </h6>
              <h2 class="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-20">
                {data?.title}{" "}
                <span class="risk-gd-text">{data?.highlighted_title}</span>
              </h2>
              <p class="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">
                {data?.description}
              </p>
            </div>
            <div class="col-lg-7">
              <div class="pl-50">
                <div class="risk-contact-form-bg risk-bg-color-two rounded-16 position-relative z-1 overflow-hidden">
                  <div class="risk-form-box bgc-white rounded-12">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      class="risk-contact-form"
                    >
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="risk-form-item mb-20">
                            <h6 class="risk-color fs-14 ff-risk-pri fw-600">
                              First Name{" "}
                              <span class="risk-highlight-color">*</span>
                            </h6>
                            <input
                              {...register("first_name", {
                                required: "First Name is required",
                              })}
                              type="text"
                              placeholder="First Name"
                              class="form-control risk-input ca-two-border ca-two-border-color"
                            />
                            {errors.first_name && (
                              <span className="text-danger small">
                                {errors.first_name.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="risk-form-item mb-20">
                            <h6 class="risk-color fs-14 ff-risk-pri fw-600">
                              Last Name{" "}
                            </h6>
                            <input
                              {...register("last_name")}
                              type="text"
                              placeholder="Last Name"
                              class="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="risk-form-item mb-20">
                            <h6 class="risk-color fs-14 ff-risk-pri fw-600">
                              Email <span class="risk-highlight-color">*</span>
                            </h6>
                            <input
                              {...register("email", {
                                required: "Email is required",
                                validate: validateEmail,
                              })}
                              type="email"
                              placeholder="Email Address"
                              class="form-control risk-input ca-two-border ca-two-border-color"
                            />
                            {errors.email && (
                              <span className="text-danger small">
                                {errors.email.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="risk-form-item mb-20">
                            <h6 class="risk-color fs-14 ff-risk-pri fw-600">
                              Phone Number{" "}
                              <span class="risk-highlight-color">*</span>
                            </h6>
                            <input
                              {...register("phone", {
                                required: "Contact Number is required",
                                validate: validateMobileNumber,
                              })}
                              type="text"
                              placeholder="Phone No"
                              class="form-control risk-input ca-two-border ca-two-border-color"
                            />
                            {errors.phone && (
                              <span className="text-danger small">
                                {errors.phone.message}
                              </span>
                            )}
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="risk-form-item mb-20">
                            <h6 class="risk-color fs-14 ff-risk-pri fw-600">
                              Subject{" "}
                              <span class="risk-highlight-color">*</span>
                            </h6>
                            <input
                              {...register("subject", {
                                required: "Subject is required",
                              })}
                              type="text"
                              placeholder="Subject"
                              class="form-control risk-input ca-two-border ca-two-border-color"
                            />
                            {errors.subject && (
                              <span className="text-danger small">
                                {errors.subject.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="risk-form-item mb-20">
                            <h6 class="risk-color fs-14 ff-risk-pri fw-600">
                              Message{" "}
                              <span class="risk-highlight-color">*</span>
                            </h6>
                            <textarea
                              {...register("message", {
                                required: "Message is required",
                              })}
                              type="text"
                              placeholder="........"
                              class="form-control risk-input ca-two-border ca-two-border-color"
                            />
                            {errors.message && (
                              <span className="text-danger small">
                                {errors.message.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <Captcha onVerify={setIsCaptchaVerified} />
                        </div>
                      </div>

                      <button
                        disabled={isLoading}
                        class="btn risk-btn-bg risk-outline-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-20"
                      >
                        {isLoading ? <ButtonLoader /> : "Submit"}{" "}
                      </button>
                    </form>
                  </div>
                  <img
                    src={`${assetRoute}/assets/img/risk_managment/shape/contact.png`}
                    alt=""
                    class="s-one position-absolute z--1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style5;
