import React, { useState } from "react";
import { Link } from "react-router-dom";

const Style8 = ({ data }) => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <>
      <div class="section-space bgc-background">
        <div class="section-space--sm-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <h4 class="heading-4 text-center clr-text mb-0">
                  {data?.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="container-xxl">
          <div class="row justify-content-center">
            <div class="col-12">
              <div
                class="list-group flex-row justify-content-center margin-bottom-10"
                role="tablist"
              >
                <a
                  data-bs-toggle="list"
                  href="#"
                  className={`package-btn link d-inline-flex text-center font-weight-bold clr-text :clr-text bgc-white padding-y-3 padding-x-6 rounded-start ${
                    activeTab === "monthly" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("monthly");
                  }}
                  aria-selected="true"
                  role="tab"
                >
                  Monthly
                </a>
                <a
                  data-bs-toggle="list"
                  href="#"
                  className={`package-btn link d-inline-flex text-center font-weight-bold clr-text :clr-text bgc-white padding-y-3 padding-x-6 rounded-end ${
                    activeTab === "yearly" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("yearly");
                  }}
                  aria-selected="false"
                  tabindex="-1"
                  role="tab"
                >
                  Yearly
                </a>
              </div>
            </div>
            <div class="col-12">
              <div class="tab-content">
                <div class="tab-pane fade show active" role="tabpanel">
                  <div class="row g-4">
                    {data?.step_data.map(
                      (item, index) =>
                        activeTab === item?.plan_type && (
                          <div class="col-md-6">
                            <div class="package-card bgc-white rounded-4 padding-4 padding-xsm-6 padding-xl-8 d-flex flex-column flex-xl-row align-items-start gap-6">
                              <div
                                class={`padding-x-5 padding-y-8 ${
                                  item?.step_image_icon
                                    ? "bgc-primary"
                                    : "bgc-secondary"
                                } text-center rounded-pill flex-shrink-0`}
                              >
                                <div class="d-flex align-items-start justify-content-center">
                                  <h6 class="heading-6 mb-0 clr-white font-weight-bold">
                                    ₹
                                  </h6>
                                  <h4 class="heading-6 mb-0 clr-white font-weight-bold">
                                    {item?.plan_price}
                                  </h4>
                                </div>
                                <p class="mb-0 clr-white font-weight-semibold">
                                  {activeTab === "monthly" ? "/month" : "/year"}
                                </p>
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="heading-5 font-weight-bold clr-text margin-bottom-6">
                                  {item?.plan_title}
                                </h5>
                                <p class="clr-paragraph font-weight-bold margin-bottom-8">
                                  {item?.plan_description}
                                </p>
                                <div class="row g-4 margin-bottom-8">
                                  <div class="col-lg-6">
                                    <div class="d-flex gap-2 align-items-center clr-paragraph">
                                      <div class="flex-shrink-0">
                                        <i class="far fa-check-circle"></i>
                                      </div>
                                      <p class="mb-0 flex-grow-1">
                                        {item?.plan_offer1}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="d-flex gap-2 align-items-center clr-paragraph">
                                      <div class="flex-shrink-0">
                                        <i class="far fa-check-circle"></i>
                                      </div>
                                      <p class="mb-0 flex-grow-1">
                                        {item?.plan_offer2}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="d-flex gap-2 align-items-center clr-paragraph">
                                      <div class="flex-shrink-0">
                                        <i class="far fa-check-circle"></i>
                                      </div>
                                      <p class="mb-0 flex-grow-1">
                                        {item?.plan_offer3}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="d-flex gap-2 align-items-center clr-paragraph">
                                      <div class="flex-shrink-0">
                                        <i class="far fa-check-circle"></i>
                                      </div>
                                      <p class="mb-0 flex-grow-1">
                                        {item?.plan_offer4}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <Link
                                  to={item?.plan_button_url}
                                  target="_blank"
                                  class={`link d-inline-flex text-center font-weight-semibold clr-text :clr-text border rounded-pill ${
                                    item?.step_image_icon &&
                                    "bgc-primary clr-white :clr-white"
                                  } padding-y-5 padding-x-10 bgc-white lh-1`}
                                >
                                  {item?.plan_button_text}
                                </Link>
                              </div>

                              {item?.step_image_icon && (
                                <img
                                  src={`https://babvipcreations.com/storage/uploads/d35f1284-4374-4fc1-b8a9-05100df05bfe.png`}
                                  alt={
                                    item?.step_image_icon_alt_tag ||
                                    "Plan Badge"
                                  }
                                  className="position-absolute top-0 end-0 offer-badge z-2"
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "contain",
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        )
                    )}
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

export default Style8;
