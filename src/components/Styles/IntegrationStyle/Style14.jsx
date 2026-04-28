import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style14 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-logo-slider", {
      modules: [Autoplay],
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
      <section class="digtal-marketing-logo ah-bg">
        <div class="container">
          <div class="bg-light-subtle style-dark py-5 px-4 rounded-3 position-relative z-2">
            <div class="row justify-content-center">
              <div class="col-auto">
                <h5 class="mb-4 clr-text">{data?.title}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <div class="swiper digi-logo-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                  <div
                    class="swiper-wrapper"
                    aria-live="off"
                    style={{
                      transform: "translate3d(-2184px, 0px, 0px);",
                      "transition-duration": "1000ms;",
                    }}
                  >
                    {data?.step_data.map((item, idx) => (
                      <div
                        key={idx}
                        class="swiper-slide swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                        role="group"
                        style={{ width: "158px", "margin-right": "24px" }}
                      >
                        <div class="single-logo">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_icon_alt_tag}
                            class="img-fluid"
                            height="30"
                          />
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
            <div class="aih-shape position-absolute">
              <svg
                width="170"
                height="90"
                viewBox="0 0 222 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M220.5 0.5H221.5V0H0L0.5 155.5V112C0.5 103.163 7.66344 96 16.5 96H189.5C197.784 96 204.5 89.2843 204.5 81V16.5C204.5 7.66344 211.663 0.5 220.5 0.5Z"
                  fill="#f3f5f8"
                ></path>
              </svg>
            </div>
            <div class="aih-shape-two position-absolute">
              <svg
                width="170"
                height="90"
                viewBox="0 0 222 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M220.5 0.5H221.5V0H0L0.5 155.5V112C0.5 103.163 7.66344 96 16.5 96H189.5C197.784 96 204.5 89.2843 204.5 81V16.5C204.5 7.66344 211.663 0.5 220.5 0.5Z"
                  fill="#f3f5f8"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style14;
