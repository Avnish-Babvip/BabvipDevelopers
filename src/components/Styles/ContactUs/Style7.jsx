import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import { useState } from "react";
import Captcha from "../../Captcha/Captcha";

const Style7 = ({ data }) => {
  const dispatch = useDispatch();
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );
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
      <style>{`
`}</style>
      <section class="min-vh-100 pt-4 px-4 d-flex align-items-center justify-content-center">
        <div class="container">
          <div class="row g-5 mt-4">
            <div class="col-md-6">
              <h2 class="h4 fw-bold text-dark text-capitalize">
                {data?.title}
              </h2>
              <p class="text-muted small mt-2">{data?.sub_title}</p>

              <form onSubmit={handleSubmit(onSubmit)} class=" space-y-3 row ">
                <div class="row gx-3 gy-1">
                  <div class="col-md-6">
                    <label class="form-label text-dark">First name*</label>
                    <input
                      {...register("first_name", {
                        required: "First Name is required",
                      })}
                      type="text"
                      class="form-control"
                    />
                    {errors.first_name && (
                      <span className="text-danger ms-2 small">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark">Last name*</label>
                    <input
                      {...register("last_name", {
                        required: "Last Name is required",
                      })}
                      type="text"
                      class="form-control"
                    />
                    {errors.last_name && (
                      <span className="text-danger ms-2 small">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div class="row gx-3 gy-1">
                  <div class="col-md-6">
                    <label class="form-label text-dark">Email*</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        validate: validateEmail,
                      })}
                      type="email"
                      class="form-control"
                    />
                    {errors.email && (
                      <span className="text-danger ms-2 small">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark">Phone number*</label>
                    <input
                      {...register("phone", {
                        required: "Phone Number is required",
                        validate: validateMobileNumber,
                      })}
                      type="text"
                      class="form-control"
                    />
                    {errors.phone && (
                      <span className="ms-2 text-danger small">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>
                <div class="row gx-3 gy-1">
                  <div class="col-md-12">
                    <label class="form-label text-dark">Subject*</label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      type="text"
                      class="form-control"
                    />
                    {errors.subject && (
                      <span className="text-danger ms-2 small">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                <div class="mt-3">
                  <label for="textarea" class="form-label text-dark">
                    Your message*
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows="4"
                    class="form-control"
                  ></textarea>
                  {errors.message && (
                    <span className="ms-2 text-danger small">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                1
                <div className="mt-3">
                  <Captcha onVerify={setIsCaptchaVerified} />
                </div>
                <div class="mt-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    class="btn btn-primary"
                  >
                    {isLoading ? <ButtonLoader /> : "Send a message"}{" "}
                  </button>
                </div>
              </form>
            </div>

            <div class="col-md-6">
              <h2 class="h4 fw-semibold text-dark">{data?.title1}</h2>
              <p class="text-muted mt-2">{data?.description}</p>

              <div class="row gx-3 gy-1 mt-4">
                <div class="col-sm-6">
                  <h5 class="fw-semibold text-dark">Address</h5>
                  <p class="text-muted mb-0">{data?.address}</p>
                </div>
                <div class="col-sm-6">
                  <h5 class="fw-semibold text-dark">Phone</h5>
                  <p class="text-muted mb-0">Number {data?.phone}</p>
                </div>
                <div class="col-sm-6">
                  <h5 class="fw-semibold text-dark">E-mail</h5>
                  <p class="text-muted mb-0">{data?.email}</p>
                </div>
                <div class="col-sm-6">
                  <h5 class="fw-semibold text-dark">Working hours</h5>
                  <p class="text-muted mb-0">{data?.time_open_close}</p>
                </div>
              </div>

              <div class="d-flex align-items-center gap-8 mt-50">
                <a
                  target="_blank"
                  href={siteSetting?.setting_data?.linkdin_page_url}
                  class="bg-body-secondary p-3 d-flex align-items-center justify-content-center"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href={siteSetting?.setting_data?.instagram_page_url}
                  target="_blank"
                  class="bg-body-secondary p-3 d-flex align-items-center justify-content-center"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href={siteSetting?.setting_data?.facebook_page_url}
                  class="bg-body-secondary p-3 d-flex align-items-center justify-content-center"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style7;
