import React, { useState } from "react";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <>
      <section class="dg-pricing-section bg-light-subtle ptb-120 position-relative overflow-hidden z-1">
        <img
          src={`${assetRoute}/assets/img/digital-agency/pr-line-1.png`}
          alt="line shape"
          class="position-absolute pr-line-shape-1 z--1 start-0"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/pr-line-2.png`}
          alt="line shape"
          class="position-absolute pr-line-shape-2 z--1 end-0"
        />
        <span class="dg-circle-style-1 position-absolute dg-circle-1 rounded-circle z--1"></span>
        <span class="dg-circle-style-2 position-absolute dg-circle-2 rounded-circle z--1"></span>
        <span class="dg-circle-style-2 position-absolute dg-circle-3 rounded-circle z--1"></span>
        <div class="container position-relative z-1">
          <div class="row justify-content-center">
            <div class="col-xl-5">
              <div class="section-title text-center mb-4">
                <span class="text-dg-primary">{data?.sub_title}</span>
                <h2 class="mt-2 mb-0 clr-text">{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="dg-pricing-tab text-center">
            <ul
              class="nav nav-tabs border-0 d-inline-flex bg-white rounded overflow-hidden p-0"
              role="tablist"
            >
              <li>
                <a
                  href="#"
                  className={` ${activeTab === "monthly" ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("monthly");
                  }}
                  data-bs-toggle="tab"
                  aria-selected="true"
                  role="tab"
                >
                  Monthly
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={` ${activeTab === "yearly" ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("yearly");
                  }}
                  data-bs-toggle="tab"
                  aria-selected="false"
                  tabindex="-1"
                  role="tab"
                >
                  Yearly
                </a>
              </li>
            </ul>
            <div class="tab-content mt-5">
              <div class="tab-pane fade show active" role="tabpanel">
                <div class="row g-4 justify-content-center">
                  {data?.step_data.map(
                    (item, index) =>
                      activeTab === item?.plan_type && (
                        <div class="col-xl-4 col-md-6">
                          <div class="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                            <img
                              src={`${assetRoute}/assets/img/digital-agency/circle-shape.png`}
                              alt="circle shape"
                              class="position-absolute start-0 top-0 z--1"
                            />
                            {item?.step_image_icon && (
                              <img
                                src={`${
                                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                }/${item?.step_image_icon}`}
                                alt={item?.step_image_icon_alt_tag}
                                class="position-absolute top-0 offer-badge z-2"
                              />
                            )}
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.step_image}`}
                              alt={item?.step_image_alt_tag}
                              className="img-fluid"
                            />

                            <h5 class="mt-4 mb-3">{item?.plan_title}</h5>
                            <p class="mb-4 fs-sm">{item?.plan_description}</p>
                            <ul class="dg-feature-list list-unstyled d-inline-block text-start p-0">
                              <li class="fs-sm">
                                <span class="me-2">
                                  <i class="fas fa-check"></i>
                                </span>
                                {item?.plan_offer1}
                              </li>
                              <li class="fs-sm">
                                <span class="me-2">
                                  <i class="fas fa-check"></i>
                                </span>
                                {item?.plan_offer2}
                              </li>
                              <li class="fs-sm">
                                <span class="me-2">
                                  <i class="fas fa-check"></i>
                                </span>
                                {item?.plan_offer3}
                              </li>
                              <li class="fs-sm">
                                <span class="me-2">
                                  <i class="fas fa-check"></i>
                                </span>
                                {item?.plan_offer4}
                              </li>
                              <li class="fs-sm">
                                <span class="me-2">
                                  <i class="fas fa-check"></i>
                                </span>
                                {item?.plan_offer5}
                              </li>
                            </ul>
                            <div
                              class={`dg-pricing-amount d-inline-block rounded-4 ${
                                item?.step_image_icon && "bg-dg-primary"
                              }`}
                            >
                              <h2>
                                ₹{item?.plan_price}
                                <span class="ms-2 fs-md fw-normal">
                                  {activeTab === "monthly" ? "/month" : "/year"}
                                </span>
                              </h2>
                              <Link
                                to={item?.plan_button_url}
                                target="_blank"
                                class="btn dg-outline-btn rounded-pill"
                              >
                                {item?.plan_button_text}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
          <img
            src={`${assetRoute}/assets/img/digital-agency/pr-doted.png`}
            alt="doted shape"
            class="pr-doted position-absolute z--1"
          />
        </div>
      </section>
    </>
  );
};

export default Style7;
