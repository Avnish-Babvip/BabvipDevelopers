import React from "react";
import { Link } from "react-router-dom";

const Style20 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="dg-cta-section pt-40 pb-80 position-relative overflow-hidden z-1">
      <img
        src={`${assetRoute}/assets/img/digital-agency/cta-curve-left.png`}
        alt="curve shape"
        class="position-absolute ct-curve left top-0 h-100 z--1 d-none d-xxl-block"
      />
      <img
        src={`${assetRoute}/assets/img/digital-agency/cta-curve-right.png`}
        alt="curve shape"
        class="position-absolute ct-curve right top-0 h-100 z--1 d-none d-xxl-block"
      />
      <img
        src={`${assetRoute}/assets/img/digital-agency/cta-line.png`}
        alt="cta line"
        class="position-absolute start-50 bottom-0 translate-middle-x z--1 d-none d-md-block"
      />
      <span class="dg-circle-style-1 position-absolute z--1 dg-circle rounded-circle start-50"></span>
      <div class="container">
        <div class="row g-4 justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="dg-cta-content">
              <span class="text-dg-primary fw-bold">{data?.sub_title}</span>
              <h2 class="mt-2 mb-3 heading-dg-color clr-text">{data?.title}</h2>
              <p class="mb-40 heading-dg-color">{data?.description}</p>
              <div class="dg-cta-btns d-flex align-items-center flex-wrap">
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn dg-primary-btn rounded-pill"
                  >
                    {data?.button_text}
                  </Link>
                )}
                {data?.button2_text && (
                  <Link
                    to={data?.button2_url}
                    target="_blank"
                    class="btn dg-outline-btn rounded-pill"
                  >
                    {data?.button2_text}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="dg-cta-imgs d-flex mt-5 mt-lg-0">
              <div class="thumb">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="img-fluid rounded-4"
                />
              </div>
              <div class="thumb mt-4">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt_tag}
                  class="img-fluid rounded-4"
                />
              </div>
              <div class="thumb align-self-end">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image3
                  }`}
                  alt={data?.image3_alt_tag}
                  class="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style20;
