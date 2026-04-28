import React from "react";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <div class="aih-portfolio-area ah-bg ptb-60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-xl-8 col-lg-9">
            <h2 class="aih-title aih-color-two fs-48 fw-600">{data?.title}</h2>
          </div>
        </div>
      </div>

      <div class="qty-portfolio-section mt-30">
        <div class="container">
          <div class="row g-4 justify-content-xl-between">
            {data?.step_data?.map((item, idx) => (
              <div class="col-md-6 col-xl-5">
                <div class="qty-portfolio">
                  <div class="qty-portfolio__img">
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="qty-portfolio__img-link ratio ratio-4x3"
                    >
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image_icon
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="img-fluid object-fit-cover"
                        style={{ height: "100%" }}
                      />
                    </Link>
                    <div class="qty-portfolio__arrow">
                      <Link
                        to={`/portfolio/${item?.port_slug}`}
                        class="qty-portfolio__arrow-link"
                      >
                        <img
                          src={`${assetRoute}/assets/img/icon-arrow-down.png`}
                          alt="arrow down"
                          class="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                  <div class="qty-portfolio__body">
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="aih-color-two fs-24 fw-600"
                    >
                      <h6 class="aih-color-two fs-24 fw-600">
                        {item?.step_title}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span class="qty-portfolio-section__text">
          <span class="qty-portfolio-section__start">{data?.title2}</span>
          <span class="qty-portfolio-section__end">PORTFOLIO</span>
        </span>
      </div>
    </div>
  );
};

export default Style9;
