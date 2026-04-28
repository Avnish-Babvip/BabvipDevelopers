import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import { useState } from "react";
import Captcha from "../../Captcha/Captcha";

const Style9 = ({ data }) => {
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
    <section className="pt-100 d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <h1 className="text-primary fw-bold fs-4">{data?.title}</h1>
            <h2 className="fw-bold fs-4 mt-4">{data?.sub_title}</h2>
            <p className="small fw-medium mt-3">{data?.description}</p>

            <div className="mt-4 p-4 border rounded-3">
              <h5 className="fw-bold text-dark">Address</h5>
              <p className="text-muted mt-2 small fw-medium">{data?.address}</p>

              <div className="row mt-4">
                <div className="col-6">
                  <h6 className="fw-bold text-dark">Phone Number</h6>
                  <p className="text-muted mt-2 small fw-medium">
                    {data?.phone}
                  </p>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold text-dark">Fax</h6>
                  <p className="text-muted mt-2 small fw-medium">{data?.fax}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div
              className="p-4  border rounded-3  bg-white"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                  <div class="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        First Name:
                        {errors.first_name && (
                          <span className="text-danger fw-600  ms-2 small">
                            {errors.first_name.message}
                          </span>
                        )}
                      </label>
                      <input
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Your First Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Last Name:
                        {errors.last_name && (
                          <span className="text-danger fw-600 ms-2 small">
                            {errors.last_name.message}
                          </span>
                        )}
                      </label>
                      <input
                        {...register("last_name", {
                          required: "Last Name is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Your Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email Address:
                        {errors.email && (
                          <span className="text-danger fw-600  ms-2 small">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                      <input
                        {...register("email", {
                          required: "Email Address is required",
                          validate: validateEmail,
                        })}
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number:
                        {errors.phone && (
                          <span className="text-danger fw-600 ms-2 small">
                            {errors.phone.message}
                          </span>
                        )}
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone Number is required",
                          validate: validateMobileNumber,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Subject:
                    {errors.subject && (
                      <span className="text-danger fw-600 ms-2 small">
                        {errors.subject.message}
                      </span>
                    )}
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Message:
                    {errors.message && (
                      <span className="text-danger fw-600 ms-2 small">
                        {errors.message.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    type="text"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <Captcha onVerify={setIsCaptchaVerified} />
                </div>

                <div>
                  <button
                    disabled={isLoading}
                    className="btn btn-primary w-100 fw-semibold"
                  >
                    {isLoading ? <ButtonLoader /> : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style9;
