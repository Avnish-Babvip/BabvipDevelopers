import React from "react";
import { Link } from "react-router-dom";

const Style16 = ({ data }) => {
  return (
    <>
      <div class="section-space ca-digital-service">
        <div class="section-space--sm-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10 col-xl-7 col-xxl-6">
                <h3 class="heading-3 clr-text font-weight-semibold text-center">
                  {data?.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row g-4">
            {data?.step_data.map((item, index) => (
              <Link
                to={`/portfolio/${item?.port_slug}`}
                class="col-md-6 col-xl-4"
              >
                <div class="ca-digital-service-card d-flex flex-wrap flex-sm-nowrap gap-4 rounded-4 bgc-white-50p padding-4 padding-xsm-6 padding-md-10 padding-xl-8">
                  <div class="d-grid place-content-center width-20 height-20 flex-shrink-0">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid"
                    />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="heading-6 font-weight-semibold clr-text margin-bottom-3">
                      {item?.step_title}
                    </h6>
                    <p class="clr-text margin-bottom-5">
                      {item?.short_description}
                    </p>
                    <a class="link d-inline-block heading-font font-weight-bold clr-paragraph :clr-red">
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

export default Style16;
