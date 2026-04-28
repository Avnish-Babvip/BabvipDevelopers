import { Container, Row, Col, Tab, Card, Table } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCustomerOrders } from "../../../features/actions/authentication";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import {
  getProfileData,
  updateBillingDashboard,
} from "../../../features/actions/dashboard";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../../features/actions/countryStateCity";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../../components/Loader/ButtonLoader";
import { instance } from "../../../services/axiosInterceptor";
import { toast } from "sonner";
import { ViewOrderModal } from "../../../components/OrderModal/OrderModal";

export const getDownloadInvoice = async (orderNumber, loginToken) => {
  try {
    const toastId = toast.loading("Preparing your invoice...");

    const response = await instance.get(
      `/customer/downloadcustomerinvoice/${orderNumber}`,
      {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        responseType: "blob",
      }
    );

    // ✅ Create blob and download file
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${orderNumber}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("Invoice downloaded successfully!", { id: toastId });
  } catch (error) {
    console.error("Invoice download failed:", error);
    toast.error("Failed to download invoice. Please try again.");
  } finally {
    setIsDownloading(false);
  }
};

const BillingTab = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const dispatch = useDispatch();
  const { orderData, customerData } = useSelector(
    (state) => state.authentication
  );
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity
  );
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const { isLoading } = useSelector((state) => state.dashboard);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) || "Please enter a valid email address";
  };
  const onSubmit = (data) => {
    const country = countryData.find(
      (c) => c.id === Number(data.billing_country)
    );
    const state = stateData.find((s) => s.id === Number(data.billing_state));
    const city = cityData.find((c) => c.id === Number(data.billing_city));

    const payload = {
      ...data,
      billing_country: country?.country_name,
      billing_state: state?.state_name,
      billing_city: city?.city_name,
    };
    dispatch(
      updateBillingDashboard({
        payload,
        loginToken: customerData?.login_token,
      })
    );
  };

  useEffect(() => {
    if (!customer || !countryData.length) return;

    const billing = customer?.customer_billing || {};

    const country = countryData.find(
      (c) => c.country_name === billing?.billing_country
    );
    const state = stateData.find(
      (s) => s.state_name === billing?.billing_state
    );
    const city = cityData.find((c) => c.city_name === billing?.billing_city);

    setValue("billing_name", billing?.billing_name || customer.first_name);
    setValue("billing_email", billing?.billing_email || customer.email);
    setValue("billing_tel", billing?.billing_tel || customer.phone_number);
    setValue("billing_zip", billing?.billing_zip || customer.postal_code);
    setValue("billing_address", billing?.billing_address || customer.address);

    if (country) setValue("billing_country", country.id);
    if (state) setValue("billing_state", state.id);
    if (city) setValue("billing_city", city.id);
  }, [customer, countryData, stateData, cityData]);

  useEffect(() => {
    if (!customer) return;

    // Always fetch countries
    dispatch(getAllCountries());

    if (customer.country_id) {
      dispatch(getAllStatesById(customer.country_id));
    }

    if (customer.state_id) {
      dispatch(getAllCityById(customer.state_id));
    }
  }, [customer]);

  useEffect(() => {
    dispatch(getProfileData(customerData?.login_token));
  }, []);

  useEffect(() => {
    dispatch(getCustomerOrders(customerData?.login_token));
  }, []);

  return (
    <>
      <Container fluid>
        <h3 className="mb-4">My Account Center</h3>
        <Tab.Container defaultActiveKey="billing">
          <Row>
            {/* Tabs Navigation */}
            <AccountCenterTab />
          </Row>

          {/* Tabs Content */}
          <Row>
            <Col md={12}>
              <Tab.Content>
                {/* Billing Tab */}
                <Tab.Pane eventKey="billing">
                  {/* Contact Information only in Profile */}
                  <Col md={6}>
                    <Card className="px-4 py-4">
                      <form
                        id="customer-lead-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Full Name *</label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("billing_name", {
                                  required: "Full name is required",
                                })}
                                placeholder="Enter Full Name *"
                              />
                              {errors.billing_name && (
                                <span className="text-danger">
                                  {errors.billing_name.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Email *</label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("billing_email", {
                                  required: "Email is required",
                                  validate: validateEmail,
                                })}
                                placeholder="Enter Email Address *"
                              />
                              {errors.billing_email && (
                                <span className="text-danger">
                                  {errors.billing_email.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Phone Number *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("billing_tel", {
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
                              <label className="form-label">
                                Select Country *
                              </label>
                              <select
                                className="form-control"
                                {...register("billing_country")}
                                onChange={(e) => {
                                  dispatch(
                                    getAllStatesById(e.target.selectedIndex)
                                  );

                                  setValue("billing_state", ""); // Reset city selection
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
                          {errors.billing_country && (
                            <span className="text-danger">
                              {errors.billing_country.message}
                            </span>
                          )}
                        </div>

                        {/* Country Dropdown (Fixed to India) */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Select State *
                              </label>
                              <select
                                className="form-control"
                                {...register("billing_state", {
                                  required: "State is required",
                                })}
                                onChange={(e) => {
                                  dispatch(
                                    getAllCityById(e.target.selectedIndex)
                                  );
                                  setValue("billing_city", ""); // Reset city selection
                                }}
                              >
                                <option value="">Select State</option>
                                {stateData.map((state) => (
                                  <option key={state?.id} value={state?.id}>
                                    {state?.state_name}
                                  </option>
                                ))}
                              </select>
                              {errors.billing_state && (
                                <span className="text-danger">
                                  {errors.billing_state.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Select City *
                              </label>
                              <select
                                className="form-control"
                                {...register("billing_city", {
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
                              {errors.billing_city && (
                                <span className="text-danger">
                                  {errors.billing_city.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* City Dropdown (Shown after State is selected) */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Postal Code *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("billing_zip", {
                                  required: "Postal Code is required",
                                })}
                                placeholder="Enter Postal Code *"
                              />
                              {errors.billing_zip && (
                                <span className="text-danger">
                                  {errors.billing_zip.message}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Enter Your Address *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("billing_address", {
                                  required: "Address is required",
                                })}
                                placeholder="Enter Your Address"
                              />
                              {errors.billing_address && (
                                <span className="text-danger">
                                  {errors.billing_address.message}
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

                  <Col md={12}>
                    <Card className="my-3 h-100 ">
                      <Card.Body>
                        <h6 className="pb-2">Your Payments</h6>

                        <Table responsive border>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Order No.</th>
                              <th>Amount</th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(orderData) &&
                              orderData.map((item, idx) => (
                                <tr>
                                  <td>{formatDate(item?.created_at)}</td>
                                  <td>{item?.order_number}</td>
                                  <td>₹ {item?.total_amount}</td>
                                  <td>
                                    <div
                                      onClick={() =>
                                        getDownloadInvoice(
                                          item?.order_number,
                                          customerData?.login_token
                                        )
                                      }
                                      className="text-primary"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <span className="d-none d-lg-inline">
                                        {" "}
                                        Download invoice as PDF
                                      </span>
                                      <span className="d-block d-lg-none">
                                        {" "}
                                        <FaDownload size={20} />
                                      </span>
                                    </div>
                                  </td>

                                  <td
                                    className="text-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setSelectedOrder(item?.order_number);
                                      setShowOrderModal(true);
                                    }}
                                  >
                                    <span className="d-none d-lg-inline">
                                      {" "}
                                      View details
                                    </span>
                                    <span className="d-block d-lg-none">
                                      {" "}
                                      <MdOutlineRemoveRedEye size={20} />
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Col>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <ViewOrderModal
        show={showOrderModal}
        handleClose={() => setShowOrderModal(false)}
        orderNumber={selectedOrder}
        token={customerData?.login_token}
      />
    </>
  );
};

export default BillingTab;
