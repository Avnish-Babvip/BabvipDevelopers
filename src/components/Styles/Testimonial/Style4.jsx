import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style4 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".dg-feedback-slider", {
      modules: [Autoplay],
      spaceBetween: 24,
      autoplay: true,
      speed: 700,
      loop: true,
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
      <section class="dg-feedback-section pt-40">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="section-title text-center">
                <span class="fw-bold text-dg-primary">{data?.sub_title}</span>
                <h2 class="mt-2 clr-text">{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="dg-feedback-slider swiper py-5 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div class="swiper-wrapper">
              {data?.review.map((item, idx) => (
                <div
                  class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="2 / 3"
                  data-swiper-slide-index="1"
                >
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image
                    }`}
                    alt={item?.step_image_alt_tag}
                    class="img-fluid"
                  />
                  <p class="mt-4 mb-4">{item?.review_description}</p>
                  <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                    <div class="dg-clients-info d-inline-flex align-items-center">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.image
                        }`}
                        alt={item?.client_image_alt_tag}
                        class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"
                      />
                      <div class="ms-4">
                        <h6 class="heading-dg-color mb-0">
                          {item?.client_name}
                        </h6>
                        <span class="fs-sm text-dg-color d-block">
                          {item?.designation}
                        </span>
                      </div>
                    </div>
                    <span class="serial-number fw-semibold position-relative color-2">
                      {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style4;
