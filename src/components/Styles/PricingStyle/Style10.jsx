import React from "react";
import { Link } from "react-router-dom";

const Style10 = ({ data }) => {
  return (
    <>
      <div class="ca-two-price-area ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="text-center">
                <h2 class="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20">
                  {data?.title}
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xxl-10">
              <div class="ca-two-price-items mt-20">
                <div class="row justify-content-center">
                  {data?.step_data.map((item, index) => (
                    <div class="col-lg-4 col-md-6">
                      <div class="ca-two-price-item text-center ca-two-bg-five pt-60 pb-30 pl-40 pr-40 rounded-16 mt-20 position-relative">
                        <h6 class="ca-two-pf-cet ca-two-subtitle ca-two-body-clr ff-dmsans d-flex bg-white align-items-center mb-0 position-absolute z-2">
                          <span class="ca-two-bg-four"></span>
                          {item?.plan_title}
                        </h6>
                        <h5 class="ca-two-price text-black fw-600 fs-48">
                          ₹{item?.plan_price}
                          <span class="fs-16">
                            {item?.plan_type === "monthly"
                              ? "/Month"
                              : "/Yearly"}
                          </span>
                        </h5>
                        <p class="ca-two-body-clr flh-24 mt-20 mb-0">
                          {item?.sub_title}
                        </p>
                        <Link
                          to={item?.plan_button_url}
                          target="_blank"
                          class="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover mt-30 w-100"
                        >
                          {item?.plan_button_text}
                        </Link>
                        <ul class="ca-two-price-list list-unstyled text-start d-flex flex-column gap-2 mt-30">
                          <li class="ca-two-body-clr fs-16 d-flex align-items-center gap-3">
                            <span class="ca-two-body-clr fs-12 ca-two-border-two ca-two-border-color-two rounded-circle">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item?.plan_offer1}
                          </li>
                          <li class="ca-two-body-clr fs-16 d-flex align-items-center gap-3">
                            <span class="ca-two-body-clr fs-12 ca-two-border-two ca-two-border-color-two rounded-circle">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item?.plan_offer2}
                          </li>
                          <li class="ca-two-body-clr fs-16 d-flex align-items-center gap-3">
                            <span class="ca-two-body-clr fs-12 ca-two-border-two ca-two-border-color-two rounded-circle">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item?.plan_offer3}
                          </li>
                          <li class="ca-two-body-clr fs-16 d-flex align-items-center gap-3">
                            <span class="ca-two-body-clr fs-12 ca-two-border-two ca-two-border-color-two rounded-circle">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            {item?.plan_offer4}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style10;
