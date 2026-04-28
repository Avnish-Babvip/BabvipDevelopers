import React from "react";
import { Link } from "react-router-dom";

const Style15 = ({ data }) => {
  return (
    <>
      <div
        class="ptb-120"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat `,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-8 col-lg-10">
              <p class="ail-sub-title text-black fw-500 ah-input-bg d-inline-flex align-items-center gap-2 rounded-5 mb-20">
                <span class="ail-gd-bg"></span>
                {data?.sub_title}
              </p>
              <h2 class="ail-title text-black fs-48 fw-600 mb-20">
                {data?.title}{" "}
                <span class="ail-highlighted-text">
                  {data?.highlighted_title}
                </span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4">
              {data?.step_data.map(
                (item, index) =>
                  index < 2 && (
                    <Link to={`/portfolio/${item?.port_slug}`}>
                      <div class="aih-testimonial-item bgc-white p-4 rounded-16 mt-20">
                        <h6 class="text-black fs-18 mb-20">
                          {item?.step_title}
                        </h6>
                        <p class="ca-two-body-clr mb-20">
                          {item?.short_description}
                        </p>
                        <div class="d-flex align-items-center gap-3">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image_icon}`}
                            alt={item?.step_image_icon_alt_tag}
                          />
                          <div class="ail-content">
                            <h6 class="aih-color-two fs-20 fw-600 mb-0">
                              {item?.category}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
            <div class="col-xl-4">
              {data?.step_data.map(
                (item, index) =>
                  index > 1 &&
                  index <
                    4(
                      <Link to={`/portfolio/${item?.port_slug}`}>
                        <div class="aih-testimonial-item bgc-white p-4 rounded-16 mt-20">
                          <h6 class="text-black fs-18 mb-20">
                            {item?.step_title}
                          </h6>
                          <p class="ca-two-body-clr mb-20">
                            {item?.short_description}
                          </p>
                          <div class="d-flex align-items-center gap-3">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.step_image_icon}`}
                              alt={item?.step_image_icon_alt_tag}
                            />
                            <div class="ail-content">
                              <h6 class="aih-color-two fs-20 fw-600 mb-0">
                                {item?.category}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
              )}
            </div>
            <div class="col-xl-4">
              {data?.step_data.map(
                (item, index) =>
                  index > 3 && (
                    <Link to={`/portfolio/${item?.port_slug}`}>
                      <div class="aih-testimonial-item bgc-white p-4 rounded-16 mt-20">
                        <h6 class="text-black fs-18 mb-20">
                          {item?.step_title}
                        </h6>
                        <p class="ca-two-body-clr mb-20">
                          {item?.short_description}
                        </p>
                        <div class="d-flex align-items-center gap-3">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image_icon}`}
                            alt={item?.step_image_icon_alt_tag}
                          />
                          <div class="ail-content">
                            <h6 class="aih-color-two fs-20 fw-600 mb-0">
                              {item?.category}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style15;
