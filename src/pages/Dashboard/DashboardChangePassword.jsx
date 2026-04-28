import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { changePasswordDashboard } from "../../features/actions/dashboard";

const DashboardChangePassword = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const dispatch = useDispatch();

  const { customerData } = useSelector((state) => state.authentication);
  const { isLoading, errorMessage } = useSelector((state) => state.dashboard);

  const validatePassword = (password) => {
    return (
      password.length >= 8 || "Password must be at least 8 characters long"
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      changePasswordDashboard({
        payload: data,
        loginToken: customerData?.login_token,
      })
    );
    reset();
  };

  return (
    <>
      <section
        class="pt-5  pb-40"
        style={{
          background: `url('assets/img/page-header-bg.svg')no-repeat right bottom`,
        }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-8 col-12">
              <div class="register-wrap p-5 bg-light-subtle shadow rounded-custom">
                <h1 class="h3">Change Password</h1>
                <p class="text-muted">
                  Please enter your current and new password.
                </p>

                <form
                  class="mt-4 register-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="row">
                    <div class="col-sm-12 mb-3">
                      <label for="current_password" class="mb-1">
                        Current Password <span class="text-danger">*</span>
                      </label>
                      <div class="input-group ">
                        <input
                          {...register("current_password", {
                            required: "Current Password is required",
                            validate: validatePassword,
                          })}
                          type="text"
                          class="form-control"
                          placeholder="Current Password"
                          id="current_password"
                        />
                      </div>
                      {errors.current_password && (
                        <span
                          className="text-danger"
                          style={{ "font-size": "14px" }}
                        >
                          {errors.current_password.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-12 mb-3">
                      <label for="password" class="mb-1">
                        New Password <span class="text-danger">*</span>
                      </label>
                      <div class="input-group ">
                        <input
                          {...register("password", {
                            required: "Password is required",
                            validate: validatePassword,
                          })}
                          type="text"
                          class="form-control"
                          placeholder="Password"
                          id="password"
                        />
                      </div>
                      {errors.password && (
                        <span
                          className="text-danger"
                          style={{ "font-size": "14px" }}
                        >
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-12 mb-3">
                      <label for="confirmPassword" class="mb-1">
                        Confirm New Password <span class="text-danger">*</span>
                      </label>
                      <div class="input-group ">
                        <input
                          {...register("password_confirmation", {
                            required: "Confirm password is required",
                            validate: (value) =>
                              value === watch("password") ||
                              "Passwords do not match",
                          })}
                          type="text"
                          class="form-control"
                          placeholder="Confirm Password"
                          id="confirmPassword"
                        />
                      </div>
                      {errors.password_confirmation && (
                        <span
                          className="text-danger"
                          style={{ "font-size": "14px" }}
                        >
                          {errors.password_confirmation.message}
                        </span>
                      )}
                    </div>

                    {errorMessage && (
                      <span
                        className="text-danger text-center"
                        style={{ "font-size": "14px" }}
                      >
                        {errorMessage}
                      </span>
                    )}

                    <div class="col-12">
                      <button
                        disabled={isLoading}
                        type="submit"
                        class="btn btn-primary mt-3 d-block w-100"
                      >
                        {isLoading ? (
                          <ButtonLoader />
                        ) : (
                          "Change to new password"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardChangePassword;
