import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const parallaxRef = useRef(null); // Reference for the parallax container

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init(); // Initialize AOS
    }

    if (parallaxRef.current) {
      new Parallax(parallaxRef.current, {
        relativeInput: true,
        clipRelativeInput: true,
      });
    }
  }, []);

  return (
    <section
      class="hero-section ptb-custom-120 text-white bg-dark"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        })no-repeat center right`,
      }}
    >
      <div class="container">
        <div class="row justify-content-center text-center text-lg-start align-items-center">
          <div class="col-lg-6 col-md-10">
            <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 class="fw-bold display-5" data-aos="fade-up">
                {data?.banner_title}
              </h1>
              <p class="lead" data-aos="fade-up">
                {data?.banner_description}
              </p>
              <div
                class="action-btns mt-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {data?.button_text1 && (
                  <Link
                    to={data?.button_url1}
                    class="btn btn-primary me-lg-3 me-sm-3"
                  >
                    {data?.button_text1}
                  </Link>
                )}
                {data?.button_text2 && (
                  <Link to={data?.button_url2} class="btn btn-outline-light">
                    {data?.button_text2}
                  </Link>
                )}
              </div>
              <ul
                class="nav subscribe-feature-list d-flex justify-content-center justify-content-lg-start w-100 mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {data?.banner_tag_line1 && (
                  <li class="nav-item">
                    <span class="ms-0">
                      <i class="far fa-check-circle text-primary me-2"></i>
                      {data?.banner_tag_line1}
                    </span>
                  </li>
                )}
                {data?.banner_tag_line2 && (
                  <li class="nav-item">
                    <span>
                      <i class="far fa-check-circle text-primary me-2"></i>
                      {data?.banner_tag_line2}
                    </span>
                  </li>
                )}
              </ul>

              <div
                class="d-flex justify-content-center justify-content-lg-start mt-5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                {data?.top_client_image?.map((item, idx) => (
                  <img
                    key={idx}
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.top_client_image
                    }`}
                    alt={item?.icon_alt_tag}
                    class="me-4 img-fluid"
                  />
                ))}
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-8">
            <div
              class="hero-img-wrap position-relative app-screen-bg mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ul
                ref={parallaxRef}
                class="position-absolute animate-element parallax-element shape-service d-none d-lg-block"
              >
                <li class="layer" data-depth="0.3">
                  <img
                    src={`${assetRoute}/assets/img/color-shape/image-4.svg`}
                    alt="shape"
                    class="img-fluid position-absolute color-shape-1"
                  />
                </li>
                <li class="layer" data-depth="0.2">
                  <img
                    src={`${assetRoute}/assets/img/color-shape/feature-2.svg`}
                    alt="shape"
                    class="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li class="layer" data-depth="0.3">
                  <img
                    src={`${assetRoute}/assets/img/color-shape/feature-3.svg`}
                    alt="shape"
                    class="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt="hero image"
                class="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style5;
