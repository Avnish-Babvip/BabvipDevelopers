import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../features/actions/countryStateCity";
import ButtonLoader from "../Loader/ButtonLoader";
import { updateProfileDashboard } from "../../features/actions/dashboard";
import { Card } from "react-bootstrap";

const EditBillingForm = () => {
  const dispatch = useDispatch();
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity
  );
  const { customerData } = useSelector((state) => state.authentication);
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const { isLoading } = useSelector((state) => state.dashboard);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      updateProfileDashboard({
        payload: data,
        loginToken: customerData?.login_token,
      })
    );
  };

  useEffect(() => {
    if (!customer) return;

    dispatch(getAllCountries());

    if (customer.country_id) {
      dispatch(getAllStatesById(customer.country_id));
    }

    if (customer.state_id) {
      dispatch(getAllCityById(customer.state_id));
    }

    setValue("first_name", customer.first_name);
    setValue("last_name", customer.last_name);
    setValue("phone_number", customer.phone_number);
    setValue("postal_code", customer.postal_code);
    setValue("address", customer.address);
    setValue("country_id", customer.country_id);
    setValue("state_id", customer.state_id);
    setValue("city_id", customer.city_id);
  }, []);

  return (
    <Card className="px-4 py-3 mb-3">
      <h6 className="pb-2">Billing Information</h6>
      <form id="customer-lead-form " onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
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
                <span className="text-danger">{errors.first_name.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
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
                <span className="text-danger">{errors.last_name.message}</span>
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
                <span className="text-danger">{errors.state_id.message}</span>
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
                <span className="text-danger">{errors.city_id.message}</span>
              )}
            </div>
          </div>
        </div>

        {/* City Dropdown (Shown after State is selected) */}
        <div className="row">
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
        </div>

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
                <span className="text-danger">{errors.address.message}</span>
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
  );
};

export default EditBillingForm;
