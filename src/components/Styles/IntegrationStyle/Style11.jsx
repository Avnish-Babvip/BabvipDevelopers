import React from "react";
import { Link } from "react-router-dom";

const Style11 = ({ data }) => {
  return (
    <>
      <div class="aih-info-card-area ah-bg ptb-100 overflow-hidden">
        <div class="container">
          <div class="row align-items-center g-xxl-0">
            <div class="col-xxl-6 col-xl-5 col-lg-9">
              <div class="position-relative">
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${data?.image3}`}
                  alt={data?.image3_alt_tag}
                  class="aih-info-card-img img-fluid"
                />
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${data?.image4}`}
                  alt={data?.image4_alt_tag}
                  class="aih-info-card-img s-one position-absolute"
                />
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${data?.image1}`}
                  alt={data?.image1_alt_tag}
                  class="aih-info-card-img s-two position-absolute"
                />
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${data?.image2}`}
                  alt={data?.image2_alt_tag}
                  class="aih-info-card-img s-three position-absolute"
                />
              </div>
            </div>
            <div class="col-xxl-6 col-xl-7">
              <h2 class="aih-title aih-color-two fs-48 fw-600 mb-20">
                {data?.title}{" "}
                <span class="aih-color">{data?.highlighted_title}</span>
              </h2>
              <p class="aih-color-three mb-20">{data?.description}</p>
              <div class="row">
                {data?.step_data.map((item, idx) => (
                  <div class="col-lg-6">
                    <div class="aih-info-card-item bgc-white aih-shadow-hover p-4 ptb-30 rounded-10 mt-20">
                      <img
                        src={`${
                          import.meta.env.VITE_REACT_APP_IMAGE_PATH
                        }/${item?.step_image}`}
                        alt={item?.step_image_icon_alt_tag}
                      />
                      <h5 class="aih-color-two fs-24 fw-600 mt-30 mb-20">
                        {item?.step_title}
                      </h5>
                      <p class="ca-two-body-clr pb-20">
                        {item?.step_description}
                      </p>
                      <Link
                        to={item?.button_url}
                        class="d-inline-flex align-items-center gap-2 aih-color-two fs-16 fw-600"
                      >
                        <svg
                          width="32"
                          height="22"
                          viewBox="0 0 32 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="11"
                            cy="11"
                            r="10"
                            stroke="#141414"
                            stroke-width="1.5"
                          ></circle>
                          <path
                            d="M25.1667 4.75L31 11M31 11L25.1667 17.25M31 11H10.375"
                            stroke="#141414"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <span>{item?.button_text}</span>
                      </Link>
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

export default Style11;
