import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style4 = ({ data }) => {
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
      class="hero-section ptb-custom-120"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        })no-repeat bottom center`,
      }}
    >
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-xl-5 col-lg-5">
            <div
              class="hero-content-wrap text-center text-xl-start text-lg-start"
              data-aos="fade-right"
            >
              <h1 class="fw-bold display-5">{data?.banner_title}</h1>
              <p class="lead">{data?.banner_description}</p>
              <div class="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <SubscribeForm buttonText="Subscribe" />
                <ul class="nav subscribe-feature-list mt-3">
                  <li class="nav-item">
                    <span class="ms-0">
                      <i class="far fa-check-circle text-primary me-2"></i>
                      {data?.banner_tag_line1}
                    </span>
                  </li>
                  <li class="nav-item">
                    <span>
                      <i class="far fa-check-circle text-primary me-2"></i>
                      {data?.banner_tag_line2}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 mt-4 mt-xl-0">
            <div class="hero-img-wrap position-relative" data-aos="fade-left">
              <ul
                ref={parallaxRef}
                class="position-absolute animate-element parallax-element shape-service hide-medium"
              >
                <li class="layer" data-depth="0.3">
                  <img
                    src={`${assetRoute}/assets/img/color-shape/image-1.svg`}
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

              <div class="hero-img-wrap position-relative">
                <div class="hero-screen-wrap">
                  <div class="phone-screen">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.banner_image1
                      }`}
                      alt={data?.banner_image1_alt_tag}
                      class="position-relative img-fluid"
                    />
                  </div>
                  <div class="mac-screen">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.banner_image2
                      }`}
                      alt={data?.banner_image2_alt_tag}
                      class="position-relative img-fluid rounded-custom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style4;
