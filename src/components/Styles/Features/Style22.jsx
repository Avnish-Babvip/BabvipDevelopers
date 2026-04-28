import React from "react";

const Style22 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <div class="rm-service-area risk-bg-color-two ptb-120 position-relative">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="position-relative">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="rm-service-img img-fluid"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="s-one position-absolute"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="pr-40">
                <h6 class="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  {data?.sub_title}
                </h6>
                <h2 class="risk-title text-white fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-15">
                  {data?.title}
                  <span class="risk-gd-text"> {data?.highlighted_title}</span>
                </h2>
                <p class="text-white ff-dmsans fs-16 flh-28 mb-0 mt-20">
                  {data?.description}
                </p>
                <ul class="risk-service-list list-unstyled mb-0 mt-40">
                  <li class="d-flex align-items-center flex-wrap gap-3 text-white fs-16 fw-700 ff-dmsans flh-28 mb-20">
                    <div class="risk-service-count d-flex align-items-center justify-content-center fs-12 rounded-circle">
                      1
                    </div>
                    {data?.step_text1}
                  </li>
                  <li class="d-flex align-items-center flex-wrap gap-3 text-white fs-16 fw-700 ff-dmsans flh-28 mb-20">
                    <div class="risk-service-count d-flex align-items-center justify-content-center fs-12 rounded-circle">
                      2
                    </div>
                    {data?.step_text2}
                  </li>
                  <li class="d-flex align-items-center flex-wrap gap-3 text-white fs-16 fw-700 ff-dmsans flh-28 mb-20">
                    <div class="risk-service-count d-flex align-items-center justify-content-center fs-12 rounded-circle">
                      3
                    </div>
                    {data?.step_text3}
                  </li>
                </ul>
                <a
                  href=""
                  class="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-30"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
          <div class="risk-gd-border-line mt-60"></div>
        </div>
        <img
          src={`${assetRoute}/assets/img/risk_managment/shape/service_2.png`}
          alt=""
          class="s-two position-absolute"
        />
        <img
          src={`${assetRoute}/assets/img/risk_managment/shape/service_3.png`}
          alt=""
          class="s-three position-absolute"
        />
      </div>
      <div class="rm-counter-area risk-bg-color-two pt-60 pb-120">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xxl-4">
              <h6 class="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                {data?.bottom_sub_title}
              </h6>
              <h2 class="text-white fs-36 ff-risk-pri flh-44 fw-800 mb-20 fch-14">
                {data?.bottom_title}
              </h2>
              <p class="text-white ff-dmsans fs-16 flh-24 mb-0">
                {data?.bottom_description}
              </p>
            </div>
            <div class="col-xxl-7">
              <div class="row">
                {data?.step_data.map((item, idx) => (
                  <div class="col-lg-4">
                    <div class="risk-counter-item mt-20">
                      <h3 class="text-white fs-56 ff-dmsans fw-700">
                        {item?.step_title}
                      </h3>
                      <p class="text-white ff-dmsans fs-16 flh-24 mb-0">
                        {item?.step_sub_title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style22;
