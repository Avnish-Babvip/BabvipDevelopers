import React, { useState } from "react";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <>
      <section class="sc-pricing-section ah-bg-4 position-relative z-1 overflow-hidden ptb-120">
        <div class="container">
          <div class="row justify-content-between align-items-center g-3">
            <div class="col-xl-5 col-lg-6">
              <div class="section-title text-center text-lg-start">
                <h2 class="mb-0 sc-heading-color clr-text">{data?.title}</h2>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6">
              <div class="text-center text-lg-end mt-3 mt-lg-0">
                <div class="sc-pricing-switch d-inline-flex bg-white rounded overflow-hidden">
                  <button
                    type="button"
                    href="#"
                    className={` ${activeTab === "monthly" ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("monthly");
                    }}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    href="#"
                    className={` ${activeTab === "yearly" ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("yearly");
                    }}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-4 mt-2 justify-content-center">
            {data?.step_data.map(
              (item, index) =>
                activeTab === item?.plan_type && (
                  <div class="col-xl-4 col-md-6">
                    <div
                      class={`sc-pricing-column ${
                        index % 2 !== 0 ? "popular" : "bg-white"
                      }  rounded`}
                    >
                      <div class="sc-pricing-title d-flex align-items-center">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_alt_tag}
                          className="img-fluid"
                        />
                        <div class="sc-pricing-title-right ms-3">
                          <h6 class="mb-0 text-dg-color">{item?.sub_title}</h6>
                          <h4 class="mb-0 mt-1">{item?.plan_title}</h4>
                        </div>
                      </div>
                      <p class="mt-4 mb-4">{item?.plan_description}</p>
                      <div class="pricing-amount monthly">
                        <h3
                          class={` ${
                            index % 2 !== 0 && "text-white"
                          } d-inline-block mb-3 fs-40`}
                        >
                          ₹ {item?.plan_price}
                        </h3>
                        <h5 class="d-inline-block text-dg-color fw-normal mb-3">
                          {activeTab === "monthly" ? "/monthly" : "/yearly"}
                        </h5>
                      </div>

                      <h6 class="mb-4">{item?.offer_title}</h6>
                      <ul class="pricing-features mb-40 list-unstyled">
                        <li>
                          <span class="me-3">
                            <i class="fa-solid fa-circle-check"></i>
                          </span>
                          {item?.plan_offer1}
                        </li>
                        <li>
                          <span class="me-3">
                            <i class="fa-solid fa-circle-check"></i>
                          </span>
                          {item?.plan_offer2}
                        </li>
                        <li>
                          <span class="me-3">
                            <i class="fa-solid fa-circle-check"></i>
                          </span>
                          {item?.plan_offer3}
                        </li>
                        <li>
                          <span class="me-3">
                            <i class="fa-solid fa-circle-check"></i>
                          </span>
                          {item?.plan_offer4}
                        </li>
                      </ul>
                      <Link
                        to={item?.plan_button_url}
                        target="_blank"
                        class={`btn  ${
                          index % 2 !== 0 ? "btn-primary" : "sc-outline-btn"
                        } `}
                      >
                        {item?.plan_button_text}
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style9;
