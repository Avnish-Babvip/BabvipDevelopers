import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { resetForgotPasswordState } from "../../features/slices/authentication";
import { customerLogin } from "../../features/actions/authentication";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isUserLoggedIn, isLoading, errorMessage } = useSelector(
    (state) => state.authentication,
  );

  // 🔥 IMPORTANT FIX (simple + reliable)
  const from = location.state?.from || "/customer/dashboard";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(customerLogin(data));
    reset();
  };

  // reset forgot password state
  useEffect(() => {
    dispatch(resetForgotPasswordState());
  }, []);

  // 🔥 REDIRECT AFTER LOGIN
  useEffect(() => {
    if (isUserLoggedIn) {
      console.log("Redirecting to:", from);

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 100); // small delay fixes timing issues
    }
  }, [isUserLoggedIn]);

  return (
    <section
      className="sign-up-in-section bg-dark ptb-40"
      style={{
        background:
          "url('assets/img/page-header-bg.svg') no-repeat right bottom",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-8 col-12">
            <div className="register-wrap p-5 bg-light-subtle shadow rounded-custom">
              <h1 className="h3">Nice to Seeing You Again</h1>
              <p className="text-muted">
                Please log in to access your account.
              </p>

              <form
                className="mt-4 register-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  {/* EMAIL */}
                  <div className="col-sm-12 mb-3">
                    <label className="mb-1">
                      Email <span className="text-danger">*</span>
                    </label>

                    <input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />

                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* PASSWORD */}
                  <div className="col-sm-12 mb-3">
                    <label className="mb-1">
                      Password <span className="text-danger">*</span>
                    </label>

                    <div className="input-group">
                      <input
                        {...register("password", {
                          required: "Password is required",
                        })}
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Password"
                      />

                      <span
                        className="input-group-text"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                    </div>

                    {errors.password && (
                      <span className="text-danger">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* ERROR */}
                  {errorMessage && (
                    <span className="text-danger text-center">
                      {errorMessage}
                    </span>
                  )}

                  {/* BUTTON */}
                  <div className="col-12">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="btn mt-3 w-100 text-white border-0"
                      style={{
                        background: "linear-gradient(90deg, #ff6600, #ff8533)",
                      }}
                    >
                      {isLoading ? <ButtonLoader /> : "Log in"}
                    </button>
                  </div>
                </div>

                {/* LINKS */}
                <p className="text-center mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "#ff6600" }}
                    className="text-decoration-none"
                  >
                    Sign up
                  </Link>
                  <br />
                  <Link
                    to="/forgot-password"
                    style={{ color: "#ff6600" }}
                    className="text-decoration-none"
                  >
                    Forgot password
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
