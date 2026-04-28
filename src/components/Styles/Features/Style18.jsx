import React from "react";
import { Link } from "react-router-dom";

const Style18 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="crm-about-section ptb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6">
            <div class="crm-title text-center">
              <span class="crm-subtitle">
                {data?.sub_title}{" "}
                <img
                  src={`${assetRoute}/assets/img/shape/arrow-red.png`}
                  alt="arrow"
                />
              </span>
              <h2 class="mt-1 clr-text">{data?.title}</h2>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <div class="row justify-content-center g-4">
            <div class="col-xl-6">
              <div class="crm-about-content-box crm-bg-light rounded overflow-hidden">
                <div class="crm-content-top">
                  <h4>{data?.title1}</h4>
                  <p class="mb-4">{data?.description1}</p>
                  <Link to={data?.link_url1} class="read-more-link">
                    {data?.link_text1}{" "}
                    <i class="fa-solid fa-arrow-right-long ms-1"></i>
                  </Link>
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
                      <h4>{data?.title2}</h4>
                      <p class="mb-4">{data?.description2}</p>
                      <Link to={data?.link_url2} class="read-more-link">
                        {data?.link_text2}{" "}
                        <i class="fa-solid fa-arrow-right-long ms-1"></i>
                      </Link>
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
                      <h4>{data?.title3}</h4>
                      <p class="mb-4">{data?.description3}</p>
                      <Link to={data?.link_url3} class="read-more-link">
                        {data?.link_text3}{" "}
                        <i class="fa-solid fa-arrow-right-long ms-1"></i>
                      </Link>
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

export default Style18;
