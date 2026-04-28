import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination"; // Import Navigation styles
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".risk-testimonial-items", {
      modules: [Pagination, Autoplay],
      autoplay: true,
      loop: true,
      speed: 700,
      spaceBetween: 24,
      pagination: {
        el: ".risk-slider__pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
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
    <>
      <div class="rm-testimonial-area ptb-60">
        <div class="container">
          <div class="risk-bg-color-three pt-80 pb-80 pl-50 pr-50 rounded-12 position-relative z-1">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <h2 class="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-20">
                  {data?.title}
                  <span class="risk-gd-text">{data?.highlighted_title}</span>
                </h2>
                <p class="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">
                  {data?.description}
                </p>
              </div>
              <div class="col-lg-6">
                {data?.button_text && (
                  <div class="text-end">
                    <Link
                      to={data?.button_url}
                      class="btn risk-btn-bg risk-outline-btn-hover clr-white ff-risk-pri fs-14 fw-600"
                    >
                      {data?.button_text}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div class="risk-testimonial-items ptb-20 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div class="swiper-wrapper">
                {data?.review.map((item, idx) => (
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    role="group"
                    aria-label="2 / 3"
                    data-swiper-slide-index="1"
                  >
                    <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                      <div class="d-flex align-items-center gap-3">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.image
                          }`}
                          alt={item?.client_image_alt_tag}
                        />
                        <div class="rm-testimonial-info">
                          <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">
                            {item?.client_name}
                          </h6>
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0">
                        {" "}
                        {item?.review_description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div class="risk-slider__controls">
                <div class="risk-slider__pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 1"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 2"
                    aria-current="true"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 3"
                  ></span>
                </div>
              </div>
            </div>
            <img
              src={`${assetRoute}/assets/img/risk_managment/shape/testimonial.png`}
              alt=""
              class="s-one position-absolute z--1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Style5;
