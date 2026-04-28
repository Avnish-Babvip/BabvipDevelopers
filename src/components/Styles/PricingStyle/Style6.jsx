import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="hd-pricing-section pt-120 overflow-hidden">
        <div class="container position-relative z-1">
          <img
            src={`${assetRoute}/assets/img/shape/arrow-3.png`}
            alt="arrow shape"
            class="arrow-shape position-absolute z--1"
          />
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-8">
              <div class="hd-title text-center">
                <h2 class="clr-text">
                  {data?.title}{" "}
                  <mark class="bg-transparent p-0 position-relative">
                    {data?.highlighted_title}{" "}
                    <img
                      src={`${assetRoute}/assets/img/shape/line-shape.png`}
                      alt="line-shape"
                      class="line-shape position-absolute"
                    />
                  </mark>
                </h2>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center g-4">
              {data?.step_data.map((item, index) => (
                <div class="col-xl-8">
                  <div class="hd-pricing-single bg-white position-relative">
                    <div class="row align-items-center">
                      <div class="col-md-5">
                        <div class="hd-pricing-info">
                          <h4 class="mb-2">{item?.plan_title}</h4>
                          <p class="mb-2">{item?.plan_description}</p>
                          <h2 class="hd-pricing-amount mb-0">
                            <sup>₹</sup>
                            {item?.plan_price}
                            <span>
                              {item?.plan_type === "monthly"
                                ? "/month"
                                : "/year"}
                            </span>
                          </h2>
                          {item?.bottom_title && (
                            <p class="mt-2 mb-0">{item?.bottom_title}</p>
                          )}
                          {item?.plan_button_text && (
                            <Link
                              to={item?.plan_button_url}
                              class={`btn ${
                                item?.plan_type === "monthly"
                                  ? "hd-secondary-btn"
                                  : "crm-primary-btn"
                              } mt-3`}
                            >
                              {item?.plan_button_text}
                            </Link>
                          )}
                        </div>
                      </div>
                      <div class="col-md-7">
                        <ul class="hd-pricing-features list-unstyled">
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer1}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer2}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer3}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer4}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer5}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer6}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer7}
                          </li>
                          <li>
                            <span class="me-2">
                              <i class="far fa-check-circle"></i>
                            </span>
                            {item?.plan_offer8}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
