import React from "react";
import { Link } from "react-router-dom";

const Style24 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="dg-hero-section position-relative z-1 overflow-hidden">
        <img
          src={`${assetRoute}/assets/img/digital-agency/hero-left-shape.png`}
          alt="hero shape"
          class="position-absolute hero-curve left z--1"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/hero-right-shape.png`}
          alt="hero shape"
          class="position-absolute hero-curve right z--1"
        />
        <span class="dg-circle-blur position-absolute rounded-circle"></span>
        <img
          src={`${assetRoute}/assets/img/digital-agency/hero-line-shape-1.png`}
          alt="line shape"
          class="position-absolute hero-line-shape-1 z--1"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/hero-line-shape-2.png`}
          alt="line shape"
          class="position-absolute hero-line-shape-2 z--1"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/hero-net-shape.png`}
          alt="hero net"
          class="position-absolute hero-net-shape z--1"
        />

        <span class="dg-hero-circle-1 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span class="dg-hero-circle-2 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span class="dg-hero-circle-3 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-xl-6 col-lg-10">
              <div class="dg-hero-content">
                <span class="fw-bold text-warning mb-3">{data?.sub_title}</span>
                <h1 class="display-2 text-white mb-4 fw-bold">
                  {data?.banner_title}
                </h1>
                <p class="mb-5 text-white">{data?.banner_description}</p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn dg-primary-btn rounded-pill"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
            <div class="col-xl-6">
              <div class="dg-hero-right position-relative">
                <img
                  src={`${assetRoute}/assets/img/digital-agency/doted.png`}
                  alt="doted shape"
                  class="position-absolute doted-shape"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style24;
