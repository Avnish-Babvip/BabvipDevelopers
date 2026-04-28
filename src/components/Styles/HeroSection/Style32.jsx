import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";

const Style32 = ({ data }) => {
  const swiperRef = useRef(null);
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
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
      <div class="it-company-hero-area it-company-bg-two pt-160 pb-40 position-relative z-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="it-company-hero-title it-company-color fs-64 mb-30">
                <span class="fs-40 fw-600">{data?.banner_title}</span>{" "}
                {data?.sub_title}
              </h1>
              <p class="clr-paragraph fs-18 fw-500 flh-28 fch-50 mb-40">
                {data?.banner_description}
              </p>
              {data?.button_text && (
                <Link
                  to={data?.button_url}
                  target="_blank"
                  class="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
                >
                  {data?.button_text}
                </Link>
              )}
            </div>
            <div class="col-lg-6">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="it-company-img img-fluid"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="swiper digi-logo-slider">
                <div class="swiper-wrapper align-items-center">
                  {data?.step_data.map((item, idx) => (
                    <div class="swiper-slide ">
                      <div class="single-logo text-center p-3 risk-btn-hover">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
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
        <img
          src={`${assetRoute}/assets/img/it_company/shape/hero.png`}
          alt=""
          class="s-one position-absolute"
        />
        <img
          src={`${assetRoute}/assets/img/it_company/shape/hero_2.png`}
          alt=""
          class="s-two position-absolute"
        />
      </div>
    </>
  );
};

export default Style32;
