import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const TraineeForm = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const newData = { ...data, software_id: modalData.id };
    // dispatch(addCustomerLeads(newData));
  };

  // useEffect(() => {
  //   console.log(addContactDetailsStatus);
  //   if (addContactDetailsStatus) {
  //     reset();
  //   }
  // }, [addContactDetailsStatus]);

  return (
    <>
      <div class="auth-page">
        <div class="container-fluid p-0">
          <div
            class="row g-0"
            style={{
              "background-image": `url(${assetRoute}/assets/img/admin/transport-logistics-concept.webp)`,
              "background-size": "cover",
            }}
          >
            <div class="col-md-2"></div>
            <div class="col-xxl-8 col-lg-8 col-md-8 ">
              <div
                class=" d-flex p-sm-5 p-4  auth-full-page-content"
                style={{ "background-color": "#ffffffc7" }}
              >
                <div class="w-100">
                  <div class="d-flex flex-column h-100">
                    <div class=" text-center">
                      <a href="#" class="d-block auth-logo">
                        <img
                          src={`${assetRoute}/BABVIPLOGO.png`}
                          alt=""
                          height="28"
                        />{" "}
                        <span
                          style={{
                            "font-weight": "700",
                            "font-size": "18px",
                            "vertical-align": "middle",
                            "margin-left": "5px",
                            "text-transform": "uppercase",
                            "font-size": "20px",
                          }}
                        >
                          <p> Basic Information</p>
                        </span>
                      </a>
                    </div>
                    <div class="auth-content ">
                      <div class="text-center">
                        <p
                          class=""
                          style={{ "font-size": "15px", color: "#000000" }}
                        >
                          Fill all required information below.
                        </p>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="gender" class="form-label">
                                Select User Type{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <select
                                class="form-control"
                                {...register("gender", {
                                  required: "Gender is required",
                                })}
                              >
                                <option value="">Select Type</option>
                                <option value="Male">Intern</option>
                                <option value="Female">Admin</option>
                                <option value="Other">Other</option>
                              </select>
                              {errors.gender && (
                                <span className="text-danger small">
                                  {errors.gender.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="gender" class="form-label">
                                Select Course <span class="text-danger">*</span>
                              </label>
                              <select
                                class="form-control"
                                {...register("gender", {
                                  required: "Gender is required",
                                })}
                              >
                                <option value="">Select Course</option>
                                <option value="Male">Development</option>
                                <option value="Female">Marketing</option>
                                <option value="Other">Other</option>
                              </select>

                              {errors.gender && (
                                <span className="text-danger small">
                                  {errors.gender.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
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
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="first_name" class="form-label">
                                Father Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("first_name", {
                                  required: "Father name is required",
                                })}
                                placeholder="Enter Father Name"
                              />

                              {errors.first_name && (
                                <span className="text-danger small">
                                  {errors.first_name.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label for="first_name" class="form-label">
                                Mother Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("first_name", {
                                  required: "Mother name is required",
                                })}
                                placeholder="Enter Mother Name"
                              />

                              {errors.first_name && (
                                <span className="text-danger small">
                                  {errors.first_name.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="mobile_number" class="form-label">
                                Emergency Phone Number (Mother/Father){" "}
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "Mobile number is required",
                                  validate: validateMobileNumber,
                                })}
                                placeholder="Emergency Phone Number"
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
                              <label for="mobile_number" class="form-label">
                                Country <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "Country is required",
                                })}
                                placeholder="Country"
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
                              <label for="mobile_number" class="form-label">
                                State <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "State is required",
                                })}
                                placeholder="State"
                              />

                              {errors.mobile_number && (
                                <span className="text-danger small">
                                  {errors.mobile_number.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label for="mobile_number" class="form-label">
                                City <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "City is required",
                                })}
                                placeholder="City"
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
                              <label for="mobile_number" class="form-label">
                                Pincode <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "Pincode is required",
                                })}
                                placeholder="Pincode"
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
                              <label for="mobile_number" class="form-label">
                                Phone Number <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "Phone Number is required",
                                  validate: validateMobileNumber,
                                })}
                                placeholder="Phone Number"
                              />

                              {errors.mobile_number && (
                                <span className="text-danger small">
                                  {errors.mobile_number.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12">
                            <div class="mb-3">
                              <label for="mobile_number" class="form-label">
                                Address <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                {...register("mobile_number", {
                                  required: "Address is required",
                                })}
                                placeholder="Address"
                              />

                              {errors.mobile_number && (
                                <span className="text-danger small">
                                  {errors.mobile_number.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="row ">
                          <div class="col-md-4"></div>
                          <div class="col-md-4"></div>
                          <div class="col-md-2"></div>
                          <div class="col-md-2 text-center">
                            <button
                              class="btn btn-primary  w-100"
                              type="submit"
                            >
                              {" "}
                              Next <i class="bx bx-chevron-right ms-1"></i>
                            </button>
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

export default TraineeForm;
