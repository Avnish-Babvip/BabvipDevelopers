import React from "react";

const Style7 = ({ data }) => {
  return (
    <>
      <div class="ail-integration-area pt-60 pb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-6 col-xl-7 col-lg-10">
              <div class="text-center mb-40">
                <p class="ail-sub-title text-black fw-500 ah-input-bg d-inline-flex align-items-center gap-2 rounded-5 mb-20">
                  <span class="ail-gd-bg"></span>
                  {data?.sub_title}
                </p>
                <h2 class="ail-title text-black fs-48 fw-600">
                  {data?.title}{" "}
                  <span class="ail-highlighted-text">
                    {data?.highlighted_title}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="w-100 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style7;
