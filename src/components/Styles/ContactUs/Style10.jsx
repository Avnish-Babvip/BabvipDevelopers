import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import { useState } from "react";

const Style10 = ({ data }) => {
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
    .contact-information {
  padding: 50px 40px;
  background: #FAFAFA;
}

@media only screen and (min-width: 1200px) {
  .contact-information {
    max-width: 400px;
  }
}

@media only screen and (max-width: 479px) {
  .contact-information {
    padding-left: 25px;
    padding-right: 25px;
  }
}

.contact-information .contact-info-item {
  line-height: 1;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.contact-information .contact-info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.contact-information .contact-info-item:after {
  display: none;
}

.contact-information .contact-info-item .icon {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  background: -webkit-gradient(linear, right top, left top, from(#FB5D4A), color-stop(117.45%, #FF9B07));
  background: -webkit-linear-gradient(right, #FB5D4A 0%, #FF9B07 117.45%);
  background: -o-linear-gradient(right, #FB5D4A 0%, #FF9B07 117.45%);
  background: linear-gradient(270deg, #FB5D4A 0%, #FF9B07 117.45%);
}

.contact-information .contact-info-item .icon i {
  color: white;
}

.contact-information .contact-info-item .content span {
  margin-bottom: 8px;
}

.contact-information .contact-info-item .content b {
  color: #031031;
}

@media only screen and (max-width: 375px) {
  .contact-information .contact-info-item .content b {
    font-size: 16px;
    line-height: 1.3;
  }
}

.contact-information .contact-info-item .content b a:not(:hover) {
  color: #031031;
}

.contact-page-map iframe {
  width: 100%;
  height: 770px;
  margin-bottom: -10px;
}

@media only screen and (max-width: 1399px) {
  .contact-page-map iframe {
    height: 550px;
  }
}

@media only screen and (max-width: 991px) {
  .contact-page-map iframe {
    height: 450px;
  }
}
.contact-info-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 30px;
  margin-right: 30px;
  padding-right: 30px;
}

.contact-info-item:after {
  content: '';
  width: 2px;
  height: 30px;
  position: absolute;
  background: white;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media only screen and (min-width: 1200px) {
  .contact-info-item:last-child {
    margin-right: 0;
    padding-right: 0;
  }

  .contact-info-item:last-child:after {
    display: none;
  }
}

.contact-info-item .icon {
  font-size: 20px;
  margin-right: 17px;
  width: 42px;
  height: 42px;
  background: white;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
}

.contact-info-item .icon i {
  color: #FB683E;
}

.contact-info-item .content span {
  display: block;
  font-size: 15px;
}

.contact-info-item .content b {
  font-size: 18px;
  font-weight: 500;
}
  .form-group {
	margin-bottom: 15px
}.form-group-sm .form-control {
	height: 30px;
	padding: 5px 10px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px
}
.form-group-sm select.form-control {
	height: 30px;
	line-height: 30px
}
.form-group-sm select[multiple].form-control, .form-group-sm textarea.form-control {
	height: auto
}
.form-group-sm .form-control-static {
	height: 30px;
	min-height: 32px;
	padding: 6px 10px;
	font-size: 12px;
	line-height: 1.5
}.form-group-lg .form-control {
	height: 46px;
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.3333333;
	border-radius: 6px
}
.form-group-lg select.form-control {
	height: 46px;
	line-height: 46px
}
.form-group-lg select[multiple].form-control, .form-group-lg textarea.form-control {
	height: auto
}
.form-group-lg .form-control-static {
	height: 46px;
	min-height: 38px;
	padding: 11px 16px;
	font-size: 18px;
	line-height: 1.3333333
}.form-group-lg .form-control+.form-control-feedback, .input-group-lg+.form-control-feedback, .input-lg+.form-control-feedback {
	width: 46px;
	height: 46px;
	line-height: 46px
}
.form-group-sm .form-control+.form-control-feedback, .input-group-sm+.form-control-feedback, .input-sm+.form-control-feedback {
	width: 30px;
	height: 30px;
	line-height: 30px
}
    `}</style>
      <section class="contact-area pt-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="contact-information rmb-55 wow fadeInLeft delay-0-2s">
                <h3 class="title mb-15">{data?.title}</h3>
                <p>{data?.description}</p>
                <div class="contact-info-item mt-35">
                  <div class="icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="content">
                    <span>Phone Number</span>
                    <b>
                      <a href={`tel://${data?.phone}`}>{data?.phone}</a>
                    </b>
                  </div>
                </div>
                <div class="contact-info-item">
                  <div class="icon">
                    <i class="fas fa-paper-plane"></i>
                  </div>
                  <div class="content">
                    <span>Emall Address</span>
                    <b>
                      <a href={`mailto:${data?.email}`}>{data?.email}</a>
                    </b>
                  </div>
                </div>
                <div class="contact-info-item">
                  <div class="icon">
                    <i class="fas fa-location"></i>
                  </div>
                  <div class="content">
                    <span>Office Location</span>
                    <b>{data?.address}</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <form
                class="contact-form wow fadeInRight delay-0-2s"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3 class="title mb-30">{data?.title1}</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Your First Name"
                      />
                      {errors.first_name && (
                        <span className="text-danger fw-600  ms-2 small">
                          {errors.first_name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        {...register("last_name", {
                          required: "Last Name is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Your Last Name"
                      />
                      {errors.last_name && (
                        <span className="text-danger fw-600  ms-2 small">
                          {errors.last_name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        {...register("email", {
                          required: "Email Address is required",
                          validate: validateEmail,
                        })}
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      {errors.email && (
                        <span className="text-danger fw-600  ms-2 small">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        {...register("phone", {
                          required: "Phone Number is required",
                          validate: validateMobileNumber,
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                      />
                      {errors.phone && (
                        <span className="text-danger fw-600  ms-2 small">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                      {errors.subject && (
                        <span className="text-danger fw-600  ms-2 small">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                        })}
                        type="text"
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                      ></textarea>
                      {errors.message && (
                        <span className="text-danger fw-600  ms-2 small">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <Captcha onVerify={setIsCaptchaVerified} />
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <button disabled={isLoading} class="btn btn-primary">
                        {isLoading ? <ButtonLoader /> : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p class="form-messege mb-0 mt-20 "></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style10;
