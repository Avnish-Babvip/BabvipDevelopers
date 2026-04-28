import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style12 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!data?.step_data || data.step_data.length < 4) return; // Ensure enough slides

    swiperRef.current = new Swiper(".aiart-post-slider", {
      modules: [Autoplay], // Ensure Autoplay module is included
      slidesPerView: 3,
      loop: true,
      speed: 800, // Transition speed (milliseconds)
      spaceBetween: 24,
      autoplay: {
        delay: false, // Faster autoplay speed (1 second per slide)
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);
  return (
    <div class="aiart-image-slider-area pt-60 pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
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
            <h2 class="aiart-title text-black fs-48 ff-risk-pri mb-30">
              <span class="aiart-gd-text">{data?.highlighted_title} </span>
              {data?.title}
            </h2>
          </div>
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="scroller-x mb-4"
          data-direction="left"
          data-speed="slow"
          data-animated="true"
        >
          <ul class="list list-row align-items-center gap-4 scroller-x__list">
            {data?.step_data.map((item, index) => (
              <li>
                <div class="aiart-image-slider-item">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image_icon
                    }`}
                    alt={item?.step_image_icon_alt_tag}
                    class="img-fluid"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          class="scroller-x"
          data-direction="right"
          data-speed="slow"
          data-animated="true"
        >
          <ul class="list list-row align-items-center gap-4 scroller-x__list">
            {data?.step_data.map((item, index) => (
              <li>
                <div class="aiart-image-slider-item">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image_icon
                    }`}
                    alt={item?.step_image_icon_alt_tag}
                    class="img-fluid"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Style12;
