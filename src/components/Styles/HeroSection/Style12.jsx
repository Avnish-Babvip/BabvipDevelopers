import React from "react";
import { Link } from "react-router-dom";

const Style12 = ({ data }) => {
  return (
    <section
      class="hero-section ptb-custom-120 bg-purple text-white"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        })no-repeat
      center center / cover`,
      }}
    >
      <div class="container">
        <div class="row justify-content-xl-between align-items-center">
          <div class="col-lg-5 col-xl-5 col-xl-5 col-md-10">
            <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h5 class="text-warning">{data?.sub_title}</h5>
              <h1 class="fw-bold display-5">{data?.banner_title}</h1>
              <p class="lead">{data?.banner_description}</p>
              <div class="action-btns mt-5">
                {data?.button_text && (
                  <Link to={data?.button_url} class="btn btn-outline-light">
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 mt-5">
            <div class="hero-app-img position-relative text-center">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style12;
