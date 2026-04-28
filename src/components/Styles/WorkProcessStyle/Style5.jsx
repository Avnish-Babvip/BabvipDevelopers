import React from "react";

const Style5 = ({ data }) => {
  return (
    <div class="aiart-wbart-area bg-white ptb-120 position-relative z-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="text-center">
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
              <h2 class="aiart-title text-black fs-48 ff-risk-pri mb-40">
                <span class="aiart-gd-text">{data?.highlighted_title}</span>{" "}
                {data?.title}
              </h2>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6">
            {Array.isArray(data?.step_data) &&
              data?.step_data.map((item, idx) => (
                <div class="aiart-art-item bg-white aiart-shadow p-4 d-inline-flex align-items-center flex-wrap gap-3 rounded-3 mb-20">
                  <div class="aiart-counter text-black fs-36 fw-800 ff-risk-pri d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                    0{idx + 1}
                  </div>
                  <div class="aiart-counter-content">
                    <h5 class="text-black fs-20 ff-risk-pri fw-700">
                      {item?.step_title}
                    </h5>
                    <p class="fs-14 mb-0">{item?.step_description}</p>
                  </div>
                </div>
              ))}
          </div>
          <div class="col-lg-5">
            <img
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                data?.image
              }`}
              alt={data?.image_alt_tag}
              class="aiart-art-img img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style5;
