import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../features/actions/countryStateCity";
import ButtonLoader from "../Loader/ButtonLoader";
import { updateProfileDashboard } from "../../features/actions/dashboard";
import { Card, Col } from "react-bootstrap";

const EditProfileModal = () => {
  const dispatch = useDispatch();
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity,
  );
  const { customerData } = useSelector((state) => state.authentication);
  const { profileData, isLoading } = useSelector((state) => state.dashboard);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    dispatch(updateProfileDashboard(formData));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("profile_image", file); // ✅ send file to API
      setPreview(URL.createObjectURL(file)); // ✅ preview
    }
  };

  useEffect(() => {
    if (!profileData) return;

    dispatch(getAllCountries());

    if (profileData.country_id) {
      dispatch(getAllStatesById(profileData.country_id));
    }

    if (profileData.state_id) {
      dispatch(getAllCityById(profileData.state_id));
    }

    setValue("first_name", profileData.first_name);
    setValue("middle_name", profileData.middle_name);
    setValue("last_name", profileData.last_name);
    setValue("phone_number", profileData.phone_number);
    setValue("address", profileData.address);
    setValue("country_id", profileData.country_id);
    setValue("state_id", profileData.state_id);
    setValue("city_id", profileData.city_id);
  }, []);

  return (
    <>
      <Col lg={12}>
        <Card className="px-4 py-4">
          <div className="text-center bg-light pb-4  mx-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                position: "relative", // Ensure the container is relative for absolute positioning of loader
                width: "80px", // Width of the container (same as the image)
                height: "80px", // Height of the container (same as the image)
                margin: "0 auto", // Center the container
              }}
            >
              <img
                src={
                  preview
                    ? preview // ✅ newly selected image
                    : profileData?.profile_image
                      ? profileData.profile_image // ✅ existing image
                      : "/placeholder.webp" // ✅ fallback
                }
                height={80}
                width={80}
                className="rounded-circle"
                alt="Profile"
              />
            </div>

            <span
              style={{
                backgroundColor: "rgba(34, 201, 164, 0.1)",
                color: "#18BBA2",
              }}
              className="rounded-3 px-2 fw-semibold fs-sm"
            >
              {profileData?.email}
            </span>
            <div className="d-flex gap-3 justify-content-center">
              <button
                className="btn btn-warning"
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "0.5rem",
                  fontSize: "0.5 rem",
                  fontWeight: 500,
                  padding: "0.15rem 0.5rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => document.getElementById("fileInput").click()} // Trigger file input when button is clicked
              >
                Change Picture
              </button>

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <form id="customer-lead-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("first_name", {
                      required: "First name is required",
                    })}
                    placeholder="Enter First Name *"
                  />
                  {errors.first_name && (
                    <span className="text-danger">
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Middle Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("middle_name", {
                      required: "Middle name is required",
                    })}
                    placeholder="Enter Middle Name *"
                  />
                  {errors.middle_name && (
                    <span className="text-danger">
                      {errors.middle_name.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("last_name", {
                      required: "Last name is required",
                    })}
                    placeholder="Enter Last Name *"
                  />
                  {errors.last_name && (
                    <span className="text-danger">
                      {errors.last_name.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("phone_number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[1-9]\d{9}$/,
                        message: "Enter a valid 10-digit number",
                      },
                    })}
                    placeholder="Enter Phone Number *"
                  />
                  {errors.phone_number && (
                    <span className="text-danger">
                      {errors.phone_number.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select Country *</label>
                  <select
                    className="form-control"
                    {...register("country_id")}
                    onChange={(e) => {
                      dispatch(getAllStatesById(e.target.selectedIndex));

                      setValue("state_id", ""); // Reset city selection
                    }}
                  >
                    <option value="">Select Country</option>
                    {countryData.map((country) => (
                      <option key={country?.id} value={country?.id}>
                        {country?.country_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors.country_id && (
                <span className="text-danger">{errors.country_id.message}</span>
              )}
            </div>

            {/* Country Dropdown (Fixed to India) */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select State *</label>
                  <select
                    className="form-control"
                    {...register("state_id", {
                      required: "State is required",
                    })}
                    onChange={(e) => {
                      dispatch(getAllCityById(e.target.selectedIndex));
                      setValue("city_id", ""); // Reset city selection
                    }}
                  >
                    <option value="">Select State</option>
                    {stateData.map((state) => (
                      <option key={state?.id} value={state?.id}>
                        {state?.state_name}
                      </option>
                    ))}
                  </select>
                  {errors.state_id && (
                    <span className="text-danger">
                      {errors.state_id.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select City *</label>
                  <select
                    className="form-control"
                    {...register("city_id", {
                      required: "City is required",
                    })}
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
                    <span className="text-danger">
                      {errors.city_id.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* City Dropdown (Shown after State is selected) */}
            {/* <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Postal Code *</label>
              <input
                type="text"
                className="form-control"
                {...register("postal_code", {
                  required: "Postal Code is required",
                })}
                placeholder="Enter Postal Code *"
              />
              {errors.postal_code && (
                <span className="text-danger">
                  {errors.postal_code.message}
                </span>
              )}
            </div>
          </div>
        </div> */}

            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Enter Your Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    placeholder="Enter Your Address"
                  />
                  {errors.address && (
                    <span className="text-danger">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? <ButtonLoader /> : "Submit"}
              </button>
            </div>
          </form>
        </Card>
      </Col>
    </>
  );
};

export default EditProfileModal;
