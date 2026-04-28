import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../../../features/actions/submission";
import ButtonLoader from "../../Loader/ButtonLoader";
import { useState } from "react";
import Captcha from "../../Captcha/Captcha";

const Style6 = ({ data }) => {
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
      	p.lead.styled {
		font-size: 16px;
	}
      .form-group {
	position: relative;
	margin-bottom: 1rem;
}

.form-group i {
	font-size: 20px;
	position: absolute;
	right: 0;
	top: 10px;
	color: #ccc;
}

.form-group label {
	font-weight: 400;
	color: #222;
}

.form-group.radio_questions label {
	border: 2px solid #e8ebed;
	display: block;
	font-weight: 400;
	padding: 15px 45px 15px 15px;
	box-sizing: content-box;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	cursor: pointer;
	color: #555;
	background-color: #fff;
}

.form-group.checkbox_questions label {
	font-weight: 400;
	cursor: pointer;
	color: #555;
}

.form-group.radio_questions .iradio_square-yellow {
	position: absolute;
	top: 17px;
	right: 15px;
}

.form-group.checkbox_questions .icheckbox_square-yellow {
	margin-right: 10px;
}

.form-group.radio_questions label:hover {
	border: 2px solid #ffcc33;
}

.form-group.select {
	margin-bottom: 30px;
}
.styled-select select {
	background: transparent;
	width: 107%;
	padding: 5px;
	border: 0;
	border-radius: 0;
	box-shadow: none;
	height: 41px;
	color: #999;
	margin: 0;
	line-height: 1;
	font-weight: 400;
	-moz-appearance: window;
	-webkit-appearance: none;
	cursor: pointer;
	outline: none;
}

.styled-select select:focus {
	color: #555;
}

.styled-select {
	width: 100%;
	overflow: hidden;
	height: 44px;
	box-sizing: border-box;
	line-height: 1px!important;
	background: #fff url(../img/arrow_down.svg) no-repeat right center;
	border: 0;
	border-bottom: 2px solid #e8ebed;
	border-radius: 0;
}

.styled-select select::-ms-expand {
	display: none;
}

.styled-select select:focus {
	outline: none;
	box-shadow: none;
}

.form-control::-moz-placeholder {
	color: #999;
	opacity: 1;
}

.form-control::-webkit-input-placeholder {
	color: #999;
}

input.form-control,
select.form-control,
textarea.form-control {
	background: none;
	background-color: #fff;
	border: none;
	border-bottom: 2px solid #e8ebed;
	border-radius: 0;
	-webkit-box-shadow: none;
	box-shadow: none;
	-webkit-transition: none;
	color: #999;
	height: 44px;
	font-size: 15px;
	font-weight: 400;
	margin-bottom: 25px;
	padding: 6px 12px 6px 0;
}

input.form-control:focus,
select.form-control:focus,
textarea.form-control:focus {
	border-color: #777;
	outline: 0;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #555;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

/*
input.form-control.error,
select.form-control.error,
textarea.form-control.error {
	border-bottom: 2px solid #e34f4f;
}
*/

input.form-control#check_in,
input.form-control#check_out {
	background: #fff url(../img/calendar.svg) no-repeat right center;
}
ul.contacts_info {
	list-style: none;
	padding: 0;
	margin: 15px 0 0 0;
}

ul.contacts_info li {
	margin-bottom: 15px;
}

ul.contacts_info li:last-child {
	margin-bottom: 0;
}
  .box_style_2 {
	background-color: #f8f8f8;
	padding: 20px 35px 35px 35px;
	position: relative;
}

.box_style_2 hr {
	margin: 10px -25px 20px -25px;
	border: 0;
	border-top: 2px solid #fff;
}
a.btn_1,
.btn_1 {
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: #fff;
	background: #3f9fff;
	cursor: pointer;
	padding: 7px 15px;
	display: inline-block;
	outline: none;
	font-size: 15px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	font-weight: 400;
}

a.btn_1:hover,
.btn_1:hover {
	background: #333;
}
  /* Mobile Portrait */
@media (max-width: 480px) {
	
	label.rating_type, .rating  {float:left; display:block;}
	label.rating_type  {width:100%;}

  }
  main#general_page {
	background-color: #fff;
main {
  background-color: rgba(0,0,0,0.6);
}

#map_contact {
	width: 100%;
	height: 500px;
}

	 
}
    `}</style>
      <main id="general_page " className="pt-100">
        <iframe
          src={data?.map_url}
          width="100%"
          height="450"
          id="map_contact"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div class="container pt-40">
          <div class="row">
            <div class="col-lg-8">
              <h3>{data?.title}</h3>
              <p>{data?.sub_title}</p>
              <div>
                <div id="message-contact"></div>
                <form onSubmit={handleSubmit(onSubmit)} id="contactform">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>First name*:</label>
                        {errors.first_name && (
                          <span className="text-danger ms-2 small">
                            {errors.first_name.message}
                          </span>
                        )}
                        <input
                          {...register("first_name", {
                            required: "First Name is required",
                          })}
                          type="text"
                          class="form-control styled"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Last name*:</label>
                        {errors.last_name && (
                          <span className="text-danger ms-2 small">
                            {errors.last_name.message}
                          </span>
                        )}
                        <input
                          {...register("last_name", {
                            required: "Last Name is required",
                          })}
                          type="text"
                          class="form-control styled"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Email*:</label>
                        {errors.email && (
                          <span className="text-danger ms-2 small">
                            {errors.email.message}
                          </span>
                        )}
                        <input
                          {...register("email", {
                            required: "Email is required",
                            validate: validateEmail,
                          })}
                          type="email"
                          class="form-control styled"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Phone number*:</label>
                        {errors.phone && (
                          <span className="ms-2 text-danger small">
                            {errors.phone.message}
                          </span>
                        )}
                        <input
                          {...register("phone", {
                            required: "Phone Number is required",
                            validate: validateMobileNumber,
                          })}
                          type="text"
                          class="form-control styled"
                          placeholder="Phone No"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Subject*:</label>
                        {errors.subject && (
                          <span className="text-danger ms-2 small">
                            {errors.subject.message}
                          </span>
                        )}
                        <input
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                          type="text"
                          class="form-control styled"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Your message*:</label>
                        {errors.message && (
                          <span className="ms-2 text-danger small">
                            {errors.message.message}
                          </span>
                        )}
                        <textarea
                          {...register("message", {
                            required: "Message is required",
                          })}
                          rows="5"
                          class="form-control styled"
                          style={{ height: "100px" }}
                          placeholder="Hello world!"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <Captcha onVerify={setIsCaptchaVerified} />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <button disabled={isLoading} class="btn_1 mb-4  ">
                      {isLoading ? <ButtonLoader /> : "Submit"}{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <aside class="col-lg-4">
              <div class="box_style_2">
                <h4>Contacts info</h4>
                <p>
                  {data?.address}
                  <br /> <a href={`tel://${data?.phone}`}>{data?.phone}</a>
                  <br />
                  <a href={`mailto:${data?.email}`}>{data?.email}</a>
                </p>

                <hr class="styled" />
                <h4>Departments</h4>
                <ul class="contacts_info">
                  <li>
                    {data?.department1_name}
                    <br />
                    <a href={`tel://${data?.department1_phone}`}>
                      {data?.department1_phone}
                    </a>
                    <br />
                    <a href={`mailto:${data?.department1_email}`}>
                      {data?.department1_email}
                    </a>
                    <br />
                    <small>{data?.department1_open_close}</small>
                  </li>
                  <li>
                    General questions
                    <br />
                    <a href={`tel://${data?.department2_phone}`}>
                      {data?.department2_phone}
                    </a>
                    <br />
                    <a href={`mailto:${data?.department2_email}`}>
                      {data?.department2_email}
                    </a>
                    <br />
                    <small>{data?.department2_open_close}</small>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Style6;
