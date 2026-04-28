import React from "react";
import { Link } from "react-router-dom";

const Style23 = ({ data }) => {
  return (
    <section class="crm-about-section dat-section-after position-relative dat-bg pt-120 pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6">
            <div class="crm-title text-center">
              <h2 class="mt-1 clr-text">{data?.title}</h2>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <div class="row justify-content-center g-4">
            <div class="col-xl-6">
              <div class="crm-about-content-box crm-bg-light rounded overflow-hidden">
                <div class="crm-content-top">
                  <h4 class="clr-text">{data?.step1_title}</h4>
                  <p class="mb-4">{data?.step1_description}</p>
                  {data?.step1_link_text && (
                    <Link
                      to={data?.step1_link_url}
                      class="read-more-link dat-about-btn"
                    >
                      {data?.step1_link_text}{" "}
                      <i class="fa-solid fa-arrow-right-long ms-1"></i>
                    </Link>
                  )}
                </div>
                <div class="text-center mt-4 position-relative z-1">
                  <span class="circle-shape position-absolute rounded-circle z--1"></span>
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image1
                    }`}
                    alt={data?.image1_alt_tag}
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="row g-4 justify-content-center">
                <div class="col-xl-12">
                  <div class="crm-about-content-box crm-bg-yellow-light rounded position-relative z-1 overflow-hidden">
                    <div class="crm-content-wrapper">
                      <h4 class="clr-text">{data?.step2_title}</h4>
                      <p class="mb-4">{data?.step2_description}</p>
                      {data?.step2_link_text && (
                        <Link
                          to={data?.step2_link_url}
                          class="read-more-link dat-about-btn"
                        >
                          {data?.step2_link_text}{" "}
                          <i class="fa-solid fa-arrow-right-long ms-1"></i>
                        </Link>
                      )}
                    </div>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image2
                      }`}
                      alt={data?.image2_alt_tag}
                      class="crm-vector-img"
                    />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="crm-about-content-box crm-bg-light-green rounded position-relative z-1 overflow-hidden">
                    <div class="crm-content-wrapper">
                      <h4 class="clr-text">{data?.step3_title}</h4>
                      <p class="mb-4">{data?.step3_description}</p>
                      {data?.step3_link_text && (
                        <Link
                          to={data?.step3_link_url}
                          class="read-more-link dat-about-btn"
                        >
                          {data?.step3_link_text}{" "}
                          <i class="fa-solid fa-arrow-right-long ms-1"></i>
                        </Link>
                      )}
                    </div>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image3
                      }`}
                      alt={data?.image3_alt_tag}
                      class="crm-vector-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style23;
