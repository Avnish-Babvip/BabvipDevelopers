import React from "react";
import { Link } from "react-router-dom";

const Style31 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <div class="rm-hero pt-100 pb-120 position-relative overflow-hidden">
        <div class="container">
          <div class="position-relative">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6">
                <h1 class="rm-hero-title text-white fs-72 fw-800 ff-risk-pri mb-20">
                  {data?.banner_title1}
                  <span class="risk-gd-text"> {data?.banner_title2}</span>{" "}
                  <br />
                  <span class="text-ind">{data?.banner_title3}</span>{" "}
                  <span>
                    <img
                      src={`${assetRoute}/assets/img/risk_managment/font.png`}
                      alt=""
                    />
                  </span>
                </h1>
                <p class="text-white fs-20 ff-dmsans fw-500 flh-28">
                  {data?.banner_description}
                </p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-30"
                  >
                    {data?.button_text}
                  </Link>
                )}
                <div class="risk-customer-area mt-60">
                  <p class="text-white ff-risk-pri fw-600">
                    {data?.bottom_title}{" "}
                    <span class="risk-highlight-color fw-800">
                      {data?.bottom_highlighted_title}
                    </span>
                  </p>
                  <div class="risk-customer-logo-wrapper d-flex align-items-center gap-10 flex-wrap">
                    {data?.step_data.map((item, idx) => (
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-8">
                <div class="position-relative">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_image_alt_tag}
                    class="risk-hero-img img-fluid"
                  />
                  <Link
                    to=""
                    class="risk-click-btn risk-gd-bg rounded-circle d-flex align-items-center justify-content-center position-absolute"
                  >
                    <svg
                      width="25"
                      height="32"
                      viewBox="0 0 25 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.39397 1.4711C1.39397 1.4711 11.7558 16.9705 21.1011 30.9492M21.1011 30.9492C14.3501 20.851 23.4213 12.0896 23.4213 12.0896M21.1011 30.9492C14.3501 20.851 2.78667 25.8846 2.78667 25.8846"
                        stroke="white"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </Link>
                  <div class="risk-social d-flex align-items-center flex-column gap-20">
                    <Link
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      to={data?.fb_url}
                      target="_blank"
                    >
                      <span>
                        <i class="fa-brands fa-facebook-f"></i>
                      </span>
                      Facebook
                    </Link>
                    <Link
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      to={data?.linkdin_url}
                      target="_blank"
                    >
                      <span>
                        <i class="fa-brands fa-linkedin"></i>
                      </span>
                      LinkedIn
                    </Link>
                    <Link
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      to={data?.insta_url}
                      target="_blank"
                    >
                      <span>
                        <i class="fa-brands fa-instagram"></i>
                      </span>
                      Instagram
                    </Link>
                    <Link
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      to={data?.twitter_url}
                      target="_blank"
                    >
                      <span>
                        <i class="fa-brands fa-twitter"></i>
                      </span>
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={`${assetRoute}/assets/img/risk_managment/shape/hero.png`}
              alt=""
              class="hero-shape position-absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Style31;
