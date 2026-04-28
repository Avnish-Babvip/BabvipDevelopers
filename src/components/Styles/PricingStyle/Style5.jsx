import React, { useState } from "react";
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [activeTab, setActiveTab] = useState("monthly"); // Default tab

  return (
    <section className="mk-pricing-section ptb-120 bg-light-subtle">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="mk-title text-center text-lg-start">
              <span className="mk-subtitle fw-bold">{data?.sub_title}</span>
              <h2 className="mk-heading mb-0 mt-3">{data?.title}</h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-7">
            <div className="mk-pricing-desc mt-4 mt-xl-0 text-center text-lg-start">
              <p className="mb-3">{data?.description}</p>
              <p className="text-center fw-bold mk-offer-text">
                {data?.sub_title1}
              </p>
              <div className="mk-pricing-control-wrapper d-flex align-items-center justify-content-center justify-content-lg-start">
                <ul className="mk-pricing-control list-unstyled p-0 m-0 d-flex align-items-center">
                  <li>
                    <a
                      href="#"
                      className={`mk_monthly_switch ${
                        activeTab === "monthly" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("monthly");
                      }}
                    >
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`mk_yearly_switch ${
                        activeTab === "yearly" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("yearly");
                      }}
                    >
                      Yearly
                    </a>
                  </li>
                </ul>
                <img
                  src={`${assetRoute}/assets/img/shape/arrow-shape.png`}
                  alt="arrow"
                  className="mk-arrow-shape"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="row justify-content-center g-4">
            {data?.step_data.map(
              (item, index) =>
                activeTab === item?.plan_type && (
                  <div className="col-xl-4 col-md-6">
                    <div className="mk-pricing-column bg-white rounded">
                      <span className=" ">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          className="img-fluid"
                        />
                      </span>
                      <h6 className="mk-heading mb-2 mt-3">
                        {item?.plan_title}
                      </h6>
                      <p className="mb-4">{item?.plan_description}</p>

                      {/* Prices */}
                      {activeTab === "monthly" ? (
                        <h2 className="mk-heading mk-price-title mb-4">
                          ₹{item?.plan_price}
                          <span>{activeTab === "monthly" && "/month"}</span>
                        </h2>
                      ) : (
                        <h2 className="mk-heading mk-price-title mb-4">
                          ₹{item?.plan_price}
                          <span>{activeTab === "yearly" && "/year"}</span>
                        </h2>
                      )}

                      <ul className="mk-pricing-list list-unstyled">
                        <li>
                          <span class="me-2">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.26667L4.73333 9L12.2 1"
                                stroke="#FF724B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          {item?.plan_offer1}
                        </li>
                        <li>
                          <span class="me-2">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.26667L4.73333 9L12.2 1"
                                stroke="#FF724B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          {item?.plan_offer2}
                        </li>
                        <li>
                          <span class="me-2">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.26667L4.73333 9L12.2 1"
                                stroke="#FF724B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          {item?.plan_offer3}
                        </li>
                        <li>
                          <span class="me-2">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.26667L4.73333 9L12.2 1"
                                stroke="#FF724B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          {item?.plan_offer4}
                        </li>
                        <li>
                          <span class="me-2">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.26667L4.73333 9L12.2 1"
                                stroke="#FF724B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          {item?.plan_offer5}
                        </li>
                        <li>
                          <span class="me-2">
                            <svg
                              width="13"
                              height="10"
                              viewBox="0 0 13 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 5.26667L4.73333 9L12.2 1"
                                stroke="#FF724B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          {item?.plan_offer6}
                        </li>
                      </ul>

                      {item?.plan_button_text && (
                        <Link
                          to={item?.plan_button_url}
                          target="_blank"
                          className="mk-pricing-btn fw-bold mt-40"
                        >
                          {item?.plan_button_text}
                        </Link>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style5;
