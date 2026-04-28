import React from "react";

const Style8 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <div
        class=" pt-60 pb-60 position-relative z-1"
        style={{
          "background-image": `url(${
            import.meta.env.VITE_REACT_APP_IMAGE_PATH
          }/${data?.banner_bg_image})`,
        }}
      >
        <img
          src={`${assetRoute}/assets/img/aiart_home/shape/com-2.png`}
          alt=""
          class="shape-1 position-absolute z--1"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center pb-60">
                <h6 class="aiart-sub-title text-primary fs-18 fw-600 d-inline-flex align-items-center gap-3 mb-20">
                  <span>
                    <svg
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 20.75L21 1.75"
                        stroke="#175cff"
                        stroke-width="3"
                      ></path>
                      <path
                        d="M11 22.25L21 12.25"
                        stroke="#175cff"
                        stroke-width="3"
                      ></path>
                    </svg>
                  </span>
                  {data?.sub_title}
                </h6>
                <h2 class="aiart-title text-black fs-48 ff-risk-pri">
                  {data?.title}{" "}
                  <span class="aiart-gd-text">{data?.highlighted_title} </span>
                </h2>
              </div>
            </div>
          </div>
          <div class="position-relative z-1">
            <img
              src={`${assetRoute}/assets/img/aiart_home/shape/com.png`}
              alt=""
              class="aiart-com-img position-absolute z--1 img-fluid"
            />
            <div class="row justify-content-center g-0">
              <div class="col-xl-9">
                <div class="row justify-content-between">
                  <div class="col-lg-4">
                    <div class="aiart-community-item bgc-white p-4 risk-shadow rounded-3">
                      <h6 class="text-black fs-20 fw-700 d-flex align-items-center gap-3">
                        <span class="aiart-text-before aiart-gd-bg"></span>
                        {data?.step1_sub_title}
                      </h6>
                      <div class="aiart-counter-item pt-80">
                        <h4 class="text-black ff-risk-pri fs-64">
                          <span class="counter">{data?.step1_title}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="aiart-community-item bgc-white p-4 risk-shadow rounded-3 mt-40">
                      <h6 class="text-black fs-20 fw-700 d-flex align-items-center gap-3">
                        <span class="aiart-text-before aiart-gd-bg"></span>
                        {data?.step2_sub_title}
                      </h6>
                      <div class="aiart-counter-item pt-80">
                        <h4 class="text-black ff-risk-pri fs-64">
                          <span class="counter">{data?.step2_title}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center g-0">
              <div class="col-xl-9">
                <div class="row justify-content-center">
                  <div class="col-lg-4">
                    <div class="aiart-community-item last-item bgc-white p-4 risk-shadow rounded-3">
                      <h6 class="text-black fs-20 fw-700 d-flex align-items-center gap-3">
                        <span class="aiart-text-before aiart-gd-bg"></span>
                        {data?.step3_sub_title}
                      </h6>
                      <div class="aiart-counter-item pt-80">
                        <h4 class="text-black ff-risk-pri fs-64">
                          <span class="counter">{data?.step3_title}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style8;
