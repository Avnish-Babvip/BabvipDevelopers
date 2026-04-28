import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { resetPasswordMail } from "../../features/actions/authentication";
import { resetForgotPasswordState } from "../../features/slices/authentication";

const ForgotPassword = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector(
    (state) => state.authentication,
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(resetPasswordMail(data));
    reset();
  };

  useEffect(() => {
    dispatch(resetForgotPasswordState());
  }, []);

  return (
    <>
      <section
        class="sign-up-in-section bg-dark pb-40"
        style={{
          background: `url('assets/img/page-header-bg.svg')no-repeat right bottom`,
        }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-8 col-12">
              <a href="index.html" class="mb-4 d-block text-center">
                <img
                  src={`${assetRoute}/assets/img/dashboardIcons/logo.png`}
                  className="mx-auto d-block"
                  //   height={50}
                  //   width={120}
                  alt="Logo"
                />
              </a>
              <div class="register-wrap p-5 bg-light-subtle shadow rounded-custom">
                <h1 class="h3">Forgot Password</h1>
                <p class="text-muted">Please enter your registered email ID.</p>

                <form
                  class="mt-4 register-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="row">
                    <div class="col-sm-12 mb-3">
                      <label for="email" class="mb-1">
                        Email <span class="text-danger">*</span>
                      </label>
                      <div class="input-group ">
                        <input
                          {...register("email", {
                            required: "Email is required",
                          })}
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          id="email"
                        />
                      </div>

                      {errorMessage && (
                        <span
                          className="text-danger text-center"
                          style={{ "font-size": "14px" }}
                        >
                          {errorMessage}
                        </span>
                      )}
                    </div>

                    <div class="col-12">
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="btn mt-3 d-block w-100 text-white border-0"
                        style={{
                          background:
                            "linear-gradient(90deg, #ff6600, #ff8533)",
                        }}
                      >
                        {isLoading ? (
                          <ButtonLoader />
                        ) : (
                          "Click here to verify email"
                        )}
                      </button>
                    </div>
                  </div>

                  <p class="font-monospace fw-medium text-center text-muted  mb-0">
                    <br />
                    <Link
                      onClick={() => navigate(-1)}
                      class="text-decoration-none"
                      style={{ color: "#ff6600" }}
                    >
                      ← Go Back
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
