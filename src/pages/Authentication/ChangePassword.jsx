import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { changePassword } from "../../features/actions/authentication";
import { resetErrorMessage } from "../../features/slices/authentication";

const ChangePassword = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const { slug } = useParams();

  const { isLoading, isPasswordChanged, errorMessage } = useSelector(
    (state) => state.authentication,
  );
  const navigate = useNavigate();

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
    const newData = { ...data, token: slug, email };
    dispatch(changePassword(newData));
    reset();
  };

  useEffect(() => {
    isPasswordChanged && navigate("/login--signup");
  }, [isPasswordChanged]);

  useEffect(() => {
    dispatch(resetErrorMessage());
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
                <h1 class="h3">Change Password</h1>
                <p class="text-muted">Please enter your new password.</p>

                <form
                  class="mt-4 register-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="row">
                    <div class="col-sm-12 mb-3">
                      <label for="password" class="mb-1">
                        Password <span class="text-danger">*</span>
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
                        Confirm Password <span class="text-danger">*</span>
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
                        className="btn mt-3 d-block w-100 text-white border-0"
                        style={{
                          background:
                            "linear-gradient(90deg, #ff6600, #ff8533)",
                        }}
                      >
                        {isLoading ? <ButtonLoader /> : "Create a new password"}
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

export default ChangePassword;
