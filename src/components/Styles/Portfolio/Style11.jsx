import React from "react";
import { Link } from "react-router-dom";

const Style11 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <div class="section-space bg-design-agency-about position-relative">
      <img
        src={`${assetRoute}/assets/img/design-agency/d_show_shape.png`}
        alt=""
        class="position-absolute shape_one"
      />
      <img
        src={`${assetRoute}/assets/img/design-agency/d_show_shape_2.png`}
        alt=""
        class="position-absolute shape_two"
      />
      <img
        src={`${assetRoute}/assets/img/design-agency/d_show_shape_3.png`}
        alt=""
        class="position-absolute shape_three"
      />
      <img
        src={`${assetRoute}/assets/img/design-agency/d_show_shape_4.png`}
        alt=""
        class="position-absolute shape_four"
      />
      <div class="section-space--sm-bottom">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <h4 class="heading-4 text-center clr-text mb-0">{data?.title}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row g-4">
          {data?.step_data.map((item, index) => (
            <>
              {index === 0 && (
                <Link
                  to={`/portfolio/${item?.port_slug}`}
                  class="col-md-6 col-lg-4 
         col-xxl-5                                                                                                 "
                >
                  <div class="showcase-card showcase-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <div class="showcase-card__content padding-6 rounded-4 bgc-white">
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </div>
                  </div>
                </Link>
              )}

              {index === 1 && (
                <Link
                  to={`/portfolio/${item?.port_slug}`}
                  class="col-md-6 col-lg-4 
                         col-xxl-3                                                                                 "
                >
                  <div class="showcase-card showcase-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <div class="showcase-card__content padding-6 rounded-4 bgc-white">
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </div>
                  </div>
                </Link>
              )}

              {index === 2 && (
                <Link
                  to={`/portfolio/${item?.port_slug}`}
                  class="col-md-6 col-lg-4 
                                         col-xxl-4                                                                 "
                >
                  <div class="showcase-card showcase-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <div class="showcase-card__content padding-6 rounded-4 bgc-white">
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </div>
                  </div>
                </Link>
              )}

              {index === 3 && (
                <Link
                  to={`/portfolio/${item?.port_slug}`}
                  class="col-md-6 col-lg-4 
                                                         col-xxl-3                                                 "
                >
                  <div class="showcase-card showcase-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <div class="showcase-card__content padding-6 rounded-4 bgc-white">
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </div>
                  </div>
                </Link>
              )}

              {index === 4 && (
                <Link
                  to={`/portfolio/${item?.port_slug}`}
                  class="col-md-6 col-lg-4 
                                                                         col-xxl-5                                 "
                >
                  <div class="showcase-card showcase-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <div class="showcase-card__content padding-6 rounded-4 bgc-white">
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}
                        </div>
                      </h6>
                    </div>
                  </div>
                </Link>
              )}

              {index === 5 && (
                <Link
                  to={`/portfolio/${item?.port_slug}`}
                  class="col-md-6 col-lg-4 
                                                                                         col-xxl-4                 "
                >
                  <div class="showcase-card showcase-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid w-100 h-100"
                    />
                    <div class="showcase-card__content padding-6 rounded-4 bgc-white">
                      <div class="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4">
                        {item?.category}
                      </div>
                      <h6 class="heading-6 mb-0">
                        <div class="link d-block font-weight-semibold clr-text :clr-primary">
                          {item?.step_title}{" "}
                        </div>
                      </h6>
                    </div>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>

        <div class="text-center mt-5">
          {data?.button_url && (
            <Link
              to={data?.button_url}
              target="_blank"
              class="btn dg-outline-btn"
            >
              {data?.button_text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Style11;
