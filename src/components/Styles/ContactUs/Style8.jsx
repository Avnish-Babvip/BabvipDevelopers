import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import { useState } from "react";
import Captcha from "../../Captcha/Captcha";

const Style8 = ({ data }) => {
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );
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
      <style>{`
      .space40 {
	margin-bottom: 40px;
}
.contact {
}

.contact h3 {

	letter-spacing: 3px;
	text-transform: uppercase;
	font-size: 17px;
	font-weight: 500;
}

#contactForm {
}

#contactForm input {
	height: 50px;
	padding: 0 20px;
	font-size: 14px;
	letter-spacing: 0;
	font-weight: 400;
	width: 100%;
	  margin-bottom: 10px;
	border: 1px solid #e5e5e5;
	border-radius: 0px;
}

#contactForm textarea {
	height: 130px;
	padding: 20px;
	font-size: 14px;
	letter-spacing: 0;
	font-weight: 400;
	width: 100%;
	  margin-bottom: 10px;
	border: 1px solid #e5e5e5;
	border-radius: 0px;
}
.btn-default {
	color: #FFF;
	background-color: #933ded;
}
  .btn-default:hover {
	background: #000;
	color: #fff;
}

  `}</style>
      <iframe
        className="pt-100"
        src={data?.map_url}
        width="100%"
        height="450"
        id="map_contact"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div class="contact pt-40">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-5">
              <h3 style={{ margin: "0px 0px 30px" }}>{data?.title}</h3>
              <p>{data?.address}</p>
              <p>
                <i class="fa fa-phone"></i> &nbsp;{data?.phone}
              </p>
              <p>
                <i class="fa fa-envelope-o"></i> &nbsp;
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </p>
              <p>
                <i class="fa fa-clock-o"></i> &nbsp;{data?.time_open_close}
              </p>

              <ul class="list-unstyled d-flex gap-5 ps-2">
                <li>
                  <a
                    href={siteSetting?.setting_data?.linkdin_page_url}
                    target="_blank"
                    class="bg-body-secondary p-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={siteSetting?.setting_data?.instagram_page_url}
                    target="_blank"
                    class="bg-body-secondary p-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={siteSetting?.setting_data?.facebook_page_url}
                    class="bg-body-secondary p-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-8 col-sm-7">
              <h3>{data?.title1}</h3>
              <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
                <div class="row">
                  <div class="col-md-6">
                    <span className="text-danger ms-2 small">
                      {errors.first_name && errors.first_name.message}
                    </span>
                    <input
                      {...register("first_name", {
                        required: "First Name is required",
                      })}
                      type="text"
                      class="form-control "
                      placeholder="Your First Name here"
                    />
                  </div>
                  <div class="col-md-6">
                    <span className="text-danger ms-2 small">
                      {errors.last_name && errors.last_name.message}
                    </span>
                    <input
                      {...register("last_name", {
                        required: "Last Name is required",
                      })}
                      type="text"
                      class="form-control"
                      placeholder="Your Last Name here"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <span className="text-danger ms-2 small">
                      {errors.email && errors.email.message}
                    </span>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        validate: validateEmail,
                      })}
                      type="email"
                      class="form-control"
                      placeholder="Your Email Address here"
                    />
                  </div>
                  <div class="col-md-6">
                    <span className="text-danger ms-2 small">
                      {errors.phone && errors.phone.message}
                    </span>
                    <input
                      {...register("phone", {
                        required: "Phone Number is required",
                        validate: validateMobileNumber,
                      })}
                      type="text"
                      class="form-control"
                      placeholder="Your Phone Number here"
                    />
                  </div>
                </div>
                <span className="text-danger ms-2 small">
                  {errors.subject && errors.subject.message}
                </span>
                <input
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  type="text"
                  class="form-control"
                  placeholder="Subject here"
                />
                <span className="text-danger ms-2 small">
                  {errors.message && errors.message.message}
                </span>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  rows="4"
                  class="form-control"
                  placeholder="Message here"
                ></textarea>
                <Captcha onVerify={setIsCaptchaVerified} />
                <button disabled={isLoading} class="btn btn-primary">
                  {isLoading ? <ButtonLoader /> : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style8;
