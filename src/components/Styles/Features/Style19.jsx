import React from "react";
import { Link } from "react-router-dom";

const Style19 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="dg-about-section pt-120 bg-white position-relative z-1">
        <img
          src={`${assetRoute}/assets/img/digital-agency/ab-shadow-shape.png`}
          alt="shadows"
          class="position-absolute end-0 top-0 z--1"
        />
        <div class="container">
          <div class="row g-4 justify-content-between">
            <div class="col-xl-5 col-lg-6">
              <div class="dg-about-left pe-4">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="rounded-4 img-fluid"
                />
              </div>
            </div>
            <div class="col-xl-7 col-lg-6">
              <div class="dg-about-right ps-lg-4">
                <span class="fw-bold text-dg-primary">{data?.sub_title}</span>
                <h2 class="mt-2 mb-4 heading-dg-color">{data?.title}</h2>
                <p class="mb-5 text-dg-color">{data?.description}</p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn dg-outline-btn rounded-pill"
                  >
                    {data?.button_text}
                  </Link>
                )}
                <div class="dg-about-bottom position-relative mt-70">
                  <img
                    src={`${assetRoute}/assets/img/digital-agency/ab-shape-box.jpg`}
                    alt="not found"
                    class="rounded-3 shape-box"
                  />
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image2
                    }`}
                    alt={data?.image2_alt_tag}
                    class="rounded-4 img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${assetRoute}/assets/img/digital-agency/doted-line-left.png`}
          alt="doted line"
          class="position-absolute start-0 bottom-0 z--1"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/doted-line-right.png`}
          alt="doted line"
          class="position-absolute end-0 bottom-0 z--1"
        />
        <span class="dg-circle-1 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span class="dg-circle-2 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span class="dg-circle-3 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>
        <span class="dg-circle-4 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>
      </section>
    </>
  );
};

export default Style19;
