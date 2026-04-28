import React from "react";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  return (
    <>
      <div class="ail-cta-area pt-80">
        <div class="container">
          <div class="ail-cta-wrapper p-5 rounded-16 position-relative z-1">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <h2 class="ail-title text-black fs-48 fw-600">
                  {data?.title}{" "}
                  <span class="ail-highlighted-text">
                    {data?.highlighted_title}
                  </span>
                </h2>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
              <div class="col-lg-6">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image
                  }`}
                  alt={data?.image_alt_tag}
                  class="w-100 img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style7;
