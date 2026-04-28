import React from "react";
import { Link } from "react-router-dom";

const Style4 = ({ data }) => {
  return (
    <div class="section-space bgc-white">
      <div class="section-space--sm-bottom">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h4 class="heading-4 text-center clr-text mb-0">{data?.title}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row g-4">
          {data?.step_data?.map((item, idx) => (
            <>
              {" "}
              {idx !== 4 && idx !== 6 && (
                <div class="col-md-6 col-lg-4 col-xxl-3">
                  <div class="showcase-card">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="showcase-card__content padding-6 rounded-4 bgc-white"
                    >
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 rounded-pill bgc-danger clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </Link>
                  </div>
                </div>
              )}
              {idx === 4 && (
                <div class="col-md-6 col-lg-4 col-xxl-5">
                  <div class="showcase-card">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="showcase-card__content padding-6 rounded-4 bgc-white"
                    >
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 rounded-pill bgc-danger clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </Link>
                  </div>
                </div>
              )}
              {idx === 6 && (
                <div class="col-md-6 col-lg-4 col-xxl-4">
                  <div class="showcase-card">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="showcase-card__content padding-6 rounded-4 bgc-white"
                    >
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 rounded-pill bgc-danger clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Style4;
