import React from "react";
import { Link } from "react-router-dom";

const Style37 = ({ data }) => {
  return (
    <div class="rm-cta-area risk-bg-color-two ptb-100 position-relative z-1">
      <div class="container">
        <div class="position-relative">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-7">
              <div class="text-center">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="risk-cta-img position-absolute z--1"
                />
                <h6 class="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  {data?.sub_title}
                </h6>
                <h2 class="risk-title text-white fs-42 ff-risk-pri flh-56 fw-800">
                  {data?.title}
                </h2>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-20"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style37;
