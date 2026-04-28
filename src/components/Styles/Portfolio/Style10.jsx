import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation"; // Import Navigation styles
import { Link } from "react-router-dom";

const Style10 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const swiperData = [...data?.step_data, ...data?.step_data];
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".aiart-post-slider", {
      modules: [Navigation, Autoplay],
      slidesPerView: 3,
      loop: true,
      speed: 800,
      spaceBetween: 24,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: ".aiart-swiper-button-next",
        prevEl: ".aiart-swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <div class="aiart-post-area ptb-120 position-relative z-1">
      <img
        src={`${assetRoute}/assets/img/aiart_home/shape/ps-1.png`}
        alt=""
        class="shape-1 position-absolute top-0 left-0 z--1"
      />
      <img
        src={`${assetRoute}/assets/img/aiart_home/info-bg.png`}
        alt=""
        class="shape-2 position-absolute z--1"
      />
      <div class="container">
        <div class="row align-items-end">
          <div class="col-xxl-6 col-lg-8">
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
              {data?.subtitle}
            </h6>
            <h2 class="aiart-title text-black fs-48 ff-risk-pri">
              {data?.subtitle}{" "}
              <span class="aiart-gd-text">{data?.highlighted_title}</span>
            </h2>
          </div>
          <div class="col-xxl-6 col-lg-4">
            <div class="d-flex align-items-center justify-content-lg-end gap-4">
              <div class="aiart-slider-nav aiart-swiper-button-prev">
                <i class="fas fa-arrow-left"></i>
              </div>
              <div class="aiart-slider-nav aiart-swiper-button-next">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="aiart-post-slider mt-40 pb-20 swiper">
              <div class="swiper-wrapper">
                {swiperData.map((item, index) => (
                  <div key={index} class="swiper-slide">
                    <div class="aiart-post-item bgc-white p-4 risk-shadow rounded-3 mt-3">
                      <div class="position-relative mb-30">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image_icon
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          class="w-100 img-fluid"
                        />
                        <div class="aiart-un-btn-sm d-flex align-items-center justify-content-center position-absolute top-0 right-0 rounded-circle">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.8357 20.9234C0.8357 20.9234 11.271 10.4881 20.6824 1.07661M20.6824 1.07661C13.8836 7.87541 5.68232 2.18401 5.68232 2.18401M20.6824 1.07661C13.8836 7.87541 19.575 16.0767 19.575 16.0767"
                              stroke="url(#paint0_linear_1624_6502)"
                              stroke-width="2"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_1624_6502"
                                x1="22.8348"
                                y1="3.229"
                                x2="-3.46576"
                                y2="10.7372"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F22FB0"></stop>
                                <stop
                                  offset="1"
                                  stop-color="#FF7426"
                                  stop-opacity="0.62"
                                ></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <Link to={`/portfolio/${item?.port_slug}`}>
                        <h5 class="text-black fs-24 ff-risk-pri fw-700 mb-20">
                          {item?.step_title}
                        </h5>
                      </Link>
                      <p class="mb-0 fs-14">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div class="pt-30 row align-items-center">
          <div class="col-lg-6">
            <p class="text-black fw-600 ff-risk-pri mt-20 mb-30">
              {data?.main_description}
            </p>
          </div>
          <div class="col-lg-6">
            <div class="text-lg-end">
              {data?.button_url && (
                <Link to={data?.button_url} class="btn btn-primary rounded-5">
                  {data?.button_text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style10;
