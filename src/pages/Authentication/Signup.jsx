import { useEffect, useState } from "react";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../features/actions/countryStateCity";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { customerSignup } from "../../features/actions/authentication";

const Signup = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) || "Please enter a valid email address";
  };

  const validateMobileNumber = (number) => {
    const regex = /^[1-9]\d{9}$/;
    return regex.test(number) || "Please enter a 10-digit number";
  };

  const dispatch = useDispatch();
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity,
  );
  const { isLoading, isRegister } = useSelector(
    (state) => state.authentication,
  );

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(customerSignup(data));
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  useEffect(() => {
    if (isRegister) {
      navigate("/login--signup");
    }
  }, [isRegister]);

  return (
    <>
      <div class="auth-page">
        <div class="container-fluid ptb-40">
          <div class="row g-0">
            <div class="col-md-2"></div>
            <div class="col-xxl-8 col-lg-8 col-md-8 ">
              <div
                class=" d-flex p-sm-5 p-4  auth-full-page-content"
                style={{ "background-color": "#ffffffc7" }}
              >
                <div class="w-100">
                  <div class="d-flex flex-column h-100">
                    <div class="mb-2 mb-md-2 text-center">
                      <a href="#" class="d-block auth-logo">
                        <img
                          src={`${assetRoute}/BABVIPLOGO.png`}
                          alt=""
                          height="28"
                        />{" "}
                        <span
                          style={{
                            "font-weight": "700",
                            "font-size": "25px",
                            "vertical-align": "middle",
                            marginLeft: "5px",
                            "text-transform": "uppercase",
                            fontSize: "20px",
                            color: "#ff6600",
                          }}
                        >
                          <p>Customer Sign Up</p>
                        </span>
                      </a>
                    </div>
                    <div class="auth-content ">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="first_name" class="form-label">
                                First Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("first_name", {
                                  required: "First name is required",
                                })}
                                placeholder="Enter First Name"
                              />
                              <div class="invalid-feedback">
                                Please Enter First Name!
                              </div>
                              {errors.first_name && (
                                <span className="text-danger small">
                                  {errors.first_name.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="middle_name" class="form-label">
                                Middle Name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("middle_name", {
                                  required: false,
                                })}
                                placeholder="Enter Middle Name"
                              />
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="last_name" class="form-label">
                                Last Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("last_name", {
                                  required: "Last name is required",
                                })}
                                placeholder="Enter Last Name"
                              />
                              <div class="invalid-feedback">
                                Please Enter Last Name!
                              </div>
                              {errors.last_name && (
                                <span className="text-danger small">
                                  {errors.last_name.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="email" class="form-label">
                                Email <span class="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                {...register("email", {
                                  required: "Email is required",
                                  validate: validateEmail,
                                })}
                                placeholder="Enter Email Address"
                              />

                              <div class="invalid-feedback">
                                Please Enter Email!
                              </div>
                              {errors.email && (
                                <span className="text-danger small">
                                  {errors.email.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="date_of_birth" class="form-label">
                                Date of Birth <span class="text-danger">*</span>
                              </label>
                              <input
                                type="date"
                                class="form-control"
                                {...register("date_of_birth", {
                                  required: "Date of birth is required",
                                })}
                              />
                              <div class="invalid-feedback">
                                Please Enter Date of Birth!
                              </div>
                              {errors.date_of_birth && (
                                <span className="text-danger small">
                                  {errors.date_of_birth.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="gender" class="form-label">
                                Gender <span class="text-danger">*</span>
                              </label>
                              <select
                                class="form-control"
                                {...register("gender", {
                                  required: "Gender is required",
                                })}
                              >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                              <div class="invalid-feedback">
                                Please Select Gender!
                              </div>
                              {errors.gender && (
                                <span className="text-danger small">
                                  {errors.gender.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="form-label" for="password">
                                Password <span class="text-danger">*</span>
                              </label>
                              <input
                                type="password"
                                class="form-control"
                                {...register("password", {
                                  required: "Password is required",
                                })}
                                placeholder="Enter Password"
                              />

                              <div class="invalid-feedback">
                                Please Enter Password!
                              </div>
                              {errors.password && (
                                <span className="text-danger small">
                                  {errors.password.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <label class="form-label" for="cpassword">
                                Confirm Password{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                type="password"
                                class="form-control"
                                {...register("cpassword", {
                                  required: "Confirm Password is required",
                                  validate: (value) =>
                                    value === watch("password") ||
                                    "Passwords do not match",
                                })}
                                placeholder="Enter Confirm Password"
                              />

                              <div class="invalid-feedback">
                                Please Enter Password!
                              </div>
                              {errors.cpassword && (
                                <span className="text-danger small">
                                  {errors.cpassword.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="mobile_number" class="form-label">
                                Mobile Number <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "Mobile number is required",
                                  validate: validateMobileNumber,
                                })}
                                placeholder="Enter Mobile Number"
                              />

                              {errors.mobile_number && (
                                <span className="text-danger small">
                                  {errors.mobile_number.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="phone_number" class="form-label">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("phone_number", {
                                  required: false,
                                })}
                                placeholder="Enter Phone Number"
                              />
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="work_phone_number" class="form-label">
                                Work Phone Number
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("work_phone_number", {
                                  required: false,
                                })}
                                placeholder="Enter Work Phone Number"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Country Dropdown (Fixed to India) */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Select Country{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                {...register("country_id", {
                                  required: "Please choose country",
                                })}
                                onChange={(e) => {
                                  dispatch(
                                    getAllStatesById(e.target.selectedIndex),
                                  );
                                  setSelectedCountry(e.target.value);
                                  setValue("state_id", ""); // Reset city selection
                                }}
                              >
                                <option value="">Select Country</option>
                                {countryData?.map((country) => (
                                  <option key={country?.id} value={country?.id}>
                                    {country?.country_name}
                                  </option>
                                ))}
                              </select>
                              {errors.country_id && (
                                <span className="text-danger small">
                                  {errors.country_id.message}
                                </span>
                              )}
                            </div>
                          </div>

                          {selectedCountry && (
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Select State{" "}
                                  <span class="text-danger">*</span>
                                </label>
                                <select
                                  className="form-control"
                                  {...register("state_id", {
                                    required: "State is required",
                                  })}
                                  onChange={(e) => {
                                    dispatch(
                                      getAllCityById(e.target.selectedIndex),
                                    );
                                    setSelectedState(e.target.value);
                                    setValue("city_id", ""); // Reset city selection
                                  }}
                                >
                                  <option value="">Select State</option>
                                  {stateData?.map((state) => (
                                    <option key={state?.id} value={state?.id}>
                                      {state?.state_name}
                                    </option>
                                  ))}
                                </select>
                                {errors.state_id && (
                                  <span className="text-danger small">
                                    {errors.state_id.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* City Dropdown (Shown after State is selected) */}
                        <div className="row">
                          {selectedCountry && selectedState && (
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Select City <span class="text-danger">*</span>
                                </label>
                                <select
                                  className="form-control"
                                  {...register("city_id", {
                                    required: "City is required",
                                  })}
                                  onChange={(e) => {
                                    setSelectedCity(e.target.value);
                                  }}
                                >
                                  <option value="">Select City</option>
                                  {cityData?.map((city) => (
                                    <option key={city?.id} value={city?.id}>
                                      {city?.city_name}
                                    </option>
                                  ))}
                                  <option value="Other">Other</option>
                                </select>
                                {errors.city_id && (
                                  <span className="text-danger small">
                                    {errors.city_id.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          {selectedCountry && selectedState && selectedCity && (
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Postal Code <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  {...register("postal_code", {
                                    required: "Postal Code is required",
                                  })}
                                  placeholder="Enter Postal Code *"
                                />
                                {errors.postal_code && (
                                  <span className="text-danger small">
                                    {errors.postal_code.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        <div class="row">
                          <div class="col-lg-12">
                            <div class="mb-3">
                              <label for="address" class="form-label">
                                Street Address
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="address"
                                name="address"
                                placeholder="Enter Street Address"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4"></div>
                          <div class="col-md-4 text-center">
                            <button
                              className="btn w-100 text-white"
                              type="submit"
                              style={{
                                backgroundColor: "#ff6600",
                                borderColor: "#ff6600",
                              }}
                            >
                              Sign Up Now
                              <i className="bx bx-chevron-right ms-1"></i>
                            </button>
                            <p class="text-muted mt-3 mb-0  font-size-15">
                              Already have an account?{" "}
                              <Link
                                to={"/login--signup"}
                                class="text-decoration-none"
                                style={{ fontWeight: 600, color: "#ff6600" }}
                              >
                                Sign In
                              </Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
