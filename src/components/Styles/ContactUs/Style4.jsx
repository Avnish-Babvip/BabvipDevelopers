import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import Captcha from "../../Captcha/Captcha";
import { useState } from "react";

const Style4 = ({ data }) => {
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
      <section
        class="ins-contact-section ptb-120 bg-white position-relative overflow-hidden"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          }) no-repeat center right`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="ins-contact-wrapper">
                <div class="ins-title pe-4 mb-30 pb-2">
                  <div class="d-flex align-items-center">
                    <span class="subtitle fw-bold">{data?.sub_title}</span>
                    <span class="ms-1">
                      <svg
                        width="103"
                        height="13"
                        viewBox="0 0 103 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.696533 6.60583L93.3054 6.60584"
                          stroke="#0EE7C5"
                          stroke-width="1.49369"
                        ></path>
                        <path
                          d="M102.266 6.60263L93.3036 11.7769L93.3036 1.42833L102.266 6.60263Z"
                          fill="#0EE7C5"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h2 class="ins-heading mb-0">
                    {data?.title} <mark>{data?.highlighted_title}</mark>
                  </h2>
                </div>
                <form
                  class="ins-contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="row g-4">
                    <div class="col-sm-6">
                      <div class="ins-input-field">
                        <label>First Name</label>
                        <input
                          {...register("first_name", {
                            required: "First Name is required",
                          })}
                          type="text"
                          placeholder="First Name"
                          class="form-control border rounded w-100"
                        />
                      </div>
                      {errors.first_name && (
                        <span className="text-danger small">
                          {errors.first_name.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-6">
                      <div class="ins-input-field">
                        <label>Last Name</label>
                        <input
                          {...register("last_name")}
                          type="text"
                          placeholder="Last Name"
                          class="form-control border rounded w-100"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="ins-input-field">
                        <label>Email</label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            validate: validateEmail,
                          })}
                          type="email"
                          placeholder="Email Address"
                          class="form-control border rounded w-100"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-danger small">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-6">
                      <div class="ins-input-field">
                        <label>Phone Number</label>
                        <input
                          {...register("phone", {
                            required: "Contact Number is required",
                            validate: validateMobileNumber,
                          })}
                          type="text"
                          placeholder="Phone Number"
                          class="form-control border rounded w-100"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-danger small">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-12">
                      <div class="ins-input-field">
                        <label>Subject</label>
                        <input
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                          type="text"
                          placeholder="Subject"
                          class="form-control border rounded w-100"
                        />
                      </div>
                      {errors.subject && (
                        <span className="text-danger small">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-12">
                      <div class="ins-input-field">
                        <label>Message</label>
                        <textarea
                          {...register("message", {
                            required: "Message is required",
                          })}
                          type="text"
                          class="form-control border rounded w-100"
                        />
                      </div>
                      {errors.message && (
                        <span className="text-danger small">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                    <div className="col-sm-12">
                      <Captcha onVerify={setIsCaptchaVerified} />
                    </div>
                  </div>
                  <button
                    disabled={isLoading}
                    type="submit"
                    class="ins-btn ins-primary-btn mt-5"
                  >
                    {isLoading ? <ButtonLoader /> : "Submit"}{" "}
                    <span>
                      <svg
                        width="22"
                        height="9"
                        viewBox="0 0 22 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.577637 4.89433L15.5145 4.89433"
                          stroke="white"
                          stroke-width="1.49369"
                        ></path>
                        <path
                          d="M21.4901 4.89153L15.5153 8.34106L15.5153 1.442L21.4901 4.89153Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style4;
