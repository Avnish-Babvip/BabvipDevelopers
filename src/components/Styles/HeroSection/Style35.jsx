import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";

const Style35 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-logo-slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 6,
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
      <div class="ai-wt-hero-area pl-20 pr-20">
        <div class="container-fluid">
          <div class="ai-wt-hero ai-wt-bg pt-160 pb-40 rounded-3 position-relative z-1 overflow-hidden">
            <div class="row justify-content-center">
              <div class="col-xxl-6 col-lg-8">
                <div class="text-center">
                  <h1 class="text-white fs-72 ff-risk-pri mb-20">
                    {data?.banner_title}
                    <span class="ai-wt-brand-text fw-400">
                      {data?.highlighted_title}
                    </span>
                  </h1>
                  <p class="text-white fs-18 ff-risk-pri">
                    {data?.banner_description}
                  </p>
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      target="_blank"
                      class="btn ai-wt-gd-bg-2 dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                    >
                      {data?.button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="ai-wt-logo-slider pt-120">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-auto">
                    <h5 class="mb-4 text-white fs-20">
                      {data?.bottom_title}{" "}
                      <span class="ai-wt-brand-text fw-400">
                        {data?.bottom_highlighted_title}
                      </span>
                    </h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto">
                    <div class="swiper digi-logo-slider ">
                      <div class="swiper-wrapper align-items-center">
                        {data?.step_data.map((item, idx) => (
                          <div class="swiper-slide ">
                            <div class="single-logo">
                              <img
                                src={`${
                                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                }/${item?.step_image}`}
                                alt={item?.step_image_alt_tag}
                                class="img-fluid"
                                height="30"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={`${assetRoute}/assets/img/ai-wt-home/shape/hero-1.png`}
              alt=""
              class="shape-1 img-fluid position-absolute left-0 top-0 z--1"
            />
            <img
              src={`${assetRoute}/assets/img/ai-wt-home/shape/hero-2.png`}
              alt=""
              class="shape-2 img-fluid position-absolute left-0 bottom-0 z--1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Style35;
