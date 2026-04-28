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
      <section class="dg-service-section bg-light-subtle pb-120 position-relative z-1 overflow-hidden">
        <img
          src={`${assetRoute}/assets/img/digital-agency/sr-line.png`}
          alt="doted line"
          class="position-absolute end-0 z--1 sr-line"
        />
        <span class="sr-circle-1 dg-circle-style-1 rounded-circle position-absolute z--1"></span>
        <span class="sr-circle-2 dg-circle-style-2 rounded-circle position-absolute z--1"></span>
        <div class="container position-relative z-1">
          <div class="row justify-content-center">
            <div class="col-xl-5">
              <div class="section-title text-center mb-5">
                <span class="fw-bold text-dg-primary">{data?.sub_title}</span>
                <h2 class="mt-2 heading-dg-color clr-text">{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="row g-4 justify-content-center">
            {data?.step_data.map((item, idx) => (
              <div class="col-xxl-3 col-lg-4 col-md-6">
                <div class="dg-service-item bg-white rounded">
                  <div class="icon-wrapper rounded-circle shadow-1">
                    <span class="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100 ">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                        class="rounded-full p-1 "
                      />
                    </span>
                  </div>
                  <Link to="service-single.html">
                    <h5 class="mt-4 mb-2 heading-dg-color">
                      {item?.step_title}
                    </h5>
                  </Link>
                  <p class="mb-3 text-dg-color">{item?.step_description}</p>
                  <span class="number-count position-relative color-1 fw-semibold">
                    {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <img
            src={`${assetRoute}/assets/img/digital-agency/sr-doted.png`}
            alt="doted shape"
            class="position-absolute start-50 translate-middle-x sr-doted-shape z--1"
          />
        </div>
      </section>
    </>
  );
};

export default Style6;
