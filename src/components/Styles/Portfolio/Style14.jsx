import React from "react";
import { Link } from "react-router-dom";

const Style14 = ({ data }) => {
  return (
    <>
      <div
        class=" ptb-120"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat `,
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-9">
              <div class="text-center mb-30">
                <p class="ail-sub-title text-black fw-500 bg-white d-inline-flex align-items-center gap-2 rounded-5 mb-20">
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
          <div class="row">
            {data?.step_data.map((item, index) => (
              <Link
                to={`/portfolio/${item?.port_slug}`}
                class="col-xxl-4 col-lg-6"
              >
                <div class="ail-card-item white-50-bg p-4 pt-40 rounded-16 d-flex gap-3 flex-wrap mt-20">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image_icon
                    }`}
                    alt={item?.step_image_icon_alt_tag}
                    class="img-fluid"
                  />
                  <div class="ail-card-content">
                    <h4 class="text-black fs-20">{item?.step_title}</h4>
                    <p class="text-black truncate-2">{item?.description}</p>
                    <a class="ca-two-body-clr fs-16 ff-poppins fw-600">
                      Read More
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style14;
