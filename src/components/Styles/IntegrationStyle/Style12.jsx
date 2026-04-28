import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style12 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".qty-brand-slider", {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 2,
      centeredSlides: true,
      centeredSlidesBounds: true,
      speed: 5000,
      spaceBetween: 16,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
        1600: {
          slidesPerView: 8,
        },
        1920: {
          slidesPerView: 9,
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
      <div class="aih-logo-slider ah-bg ptb-60">
        <div class="container-fluid container-xmax p-0">
          <div class="row g-0 justify-content-center">
            <div class="col-12">
              <div class="swiper qty-brand-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                <div
                  class="swiper-wrapper"
                  id="swiper-wrapper-3fff6ea1f85461af"
                  aria-live="off"
                  style={{
                    "transition-duration": "5000ms",
                    transform: "translate3d(-1920.58px, 0px, 0px)",
                  }}
                >
                  {data?.step_data.map((item, idx) => (
                    <div
                      class="swiper-slide swiper-slide-duplicate"
                      role="group"
                      style={{ width: "186.167px", "margin-right": "16px" }}
                      data-swiper-slide-index={idx + 1}
                    >
                      <div class="qty-brand">
                        <div class="qty-brand__img">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_icon_alt_tag}
                            class="img-fluid"
                          />
                        </div>
                        <div class="qty-brand__text">{item?.step_title}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style12;
