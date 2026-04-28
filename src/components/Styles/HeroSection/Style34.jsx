import React from "react";
import { Link } from "react-router-dom";

const Style34 = ({ data }) => {
  return (
    <>
      <div
        class="ail-hero-area pt-120 "
        style={{
          "background-image": `url(${
            import.meta.env.VITE_REACT_APP_IMAGE_PATH
          }/${data?.banner_bg_image})`,
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="text-center">
                <h1 class="ail-hero-title text-black fs-72">
                  {data?.banner_title}{" "}
                  <span class="ail-highlighted-text">Predictable Results</span>
                </h1>
                <p class="ail-body-color fs-20 fch-55 mx-auto">
                  {data?.banner_description} &amp; {data?.highlighted_title}
                </p>
                {data?.button_text && (
                  <Link
                    target="_blank"
                    to={data?.button_url}
                    class="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                  >
                    {data?.button_text}
                  </Link>
                )}
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="ail-hero-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style34;
