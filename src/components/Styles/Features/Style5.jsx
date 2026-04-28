import React from "react";
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="feature-section ptb-120">
      <div class="container">
        <div class="feature-color bg-primary-soft px-5 rounded-custom position-relative">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-5 col-md-12">
              <div class="feature-content-wrap pe-lg-4 ptb-60 p-lg-0 mb-5 mb-lg-0">
                <h5 class="text-primary h6 fw-bold">{data?.subtitle}</h5>
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>

                {data?.button_url && (
                  <Link to={data?.button_url} class="btn btn-primary mt-4">
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="row align-items-center justify-content-center position-relative mt--100 z-2">
                <div class="col-md-6">
                  {data?.step_data?.slice(0, 1).map((item, idx) => (
                    <div class="cta-card rounded-custom text-center shadow p-5 bg-white my-4">
                      <div class="feature-icon d-inline-block  rounded mb-4">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          class=" p-0"
                        />
                      </div>
                      <h3 class="h5 fw-bold">{item?.step_title}</h3>
                      <p class="mb-0">{item?.step_description} </p>
                    </div>
                  ))}
                </div>
                <div class="col-md-6">
                  {data?.step_data?.slice(1, 3).map((item, idx) => (
                    <div class="cta-card rounded-custom text-center shadow p-5 bg-white my-4">
                      <div class="feature-icon d-inline-block  rounded mb-4">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          class=" p-0"
                        />
                      </div>
                      <h3 class="h5 fw-bold">{item?.step_title}</h3>
                      <p class="mb-0">{item?.step_description} </p>
                    </div>
                  ))}
                </div>
                <ul
                  class="position-absolute animate-element parallax-element z--1"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <li
                    class="layer"
                    data-depth="0.06"
                    style={{
                      position: "relative",
                      display: "block",
                      left: "0px",
                      top: "0px",
                      transform: "translate3d(-35.7369px, 36.1954px, 0px)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={`${assetRoute}/assets/img/shape/shape-bg-3.svg`}
                      alt="shape"
                      class="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style5;
