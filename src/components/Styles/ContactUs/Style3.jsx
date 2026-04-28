import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import Captcha from "../../Captcha/Captcha";
import { useState } from "react";

const Style3 = ({ data }) => {
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
    <section class="digi-contact pt-60 pb-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="digi-contact-left">
              <div>
                <span class="span-arrow">{data?.subtitle}</span>
                <img
                  src={`${assetRoute}/assets/img/arro-right.svg`}
                  alt="arrow"
                />
              </div>
              <h2 class="mb-3">
                {data?.title}{" "}
                <span class="text-orange">{data?.highlighted_title}</span>
              </h2>
              <p>{data?.description}</p>
              <ul class="d-flex list-unstyled d-flex flex-wrap list-two-col mb-0 mt-5">
                {data?.step_data?.map((item, idx) => (
                  <li class="pe-4">
                    <div class="bg-white contact-box mb-4 mb-md-0">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                      />
                      <h4 class="h5">{item?.step_title}</h4>
                      <p class="fw-bold">{item?.step_sub_title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="digi-contact-form-bg bg-white position-relative">
              <ul class="list-unstyled d-none d-xl-block m-0">
                <li></li>
                <li></li>
              </ul>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                  <div class="col-lg-6 mb-3">
                    <div class="">
                      <input
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    {errors.first_name && (
                      <span className="text-danger small">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  <div class="col-lg-6 mb-3">
                    <div class="">
                      <input
                        {...register("last_name")}
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <div class="">
                      <input
                        {...register("email", {
                          required: "Email is required",
                          validate: validateEmail,
                        })}
                        type="text"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-danger small">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div class="col-lg-6 mb-3">
                    <div class="">
                      <input
                        {...register("phone", {
                          required: "Contact Number is required",
                          validate: validateMobileNumber,
                        })}
                        type="text"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-danger small">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div class="col-lg-12 mb-3">
                    <div class="">
                      <input
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    {errors.subject && (
                      <span className="text-danger small">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  <div class="col-12">
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows="5"
                      class="w-100 form-control"
                      placeholder="Message.."
                    ></textarea>
                    {errors.message && (
                      <span className="text-danger small">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <div className="col-12">
                    <Captcha onVerify={setIsCaptchaVerified} />
                  </div>
                  <div class="col-3">
                    <button
                      disabled={isLoading}
                      class="mt-4 btn rounded-pill bg-orange"
                    >
                      {isLoading ? "Loading..." : "Get in Touch"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
