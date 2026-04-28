import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style16 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".hero-slider", {
      modules: [Autoplay],
      slidesPerView: 1,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
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
      <div class="hero-twelve">
        <div class="swiper hero-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div class="swiper-wrapper">
            {data?.step_data?.map((item, idx) => (
              <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next">
                <div
                  class="slider-one slider"
                  style={{
                    background: `url(${
                      import.meta.env.VITE_REACT_APP_IMAGE_PATH
                    }/${item?.step_image})no-repeat
                center center / cover`,
                  }}
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="hero-content">
                          <h1
                            class="fw-bold display-5 text-white mb-4 aos-init aos-animate"
                            data-aos="fade-up"
                          >
                            {item?.title}
                            <span class="gr-text ms-lg-2">
                              {item?.highlighted_title}
                            </span>
                          </h1>
                          <p class="lead text-off-white m-0">
                            {item?.description}
                          </p>
                          {item?.button_text && (
                            <Link
                              to={item?.button_link}
                              class="btn-gradient mt-4 link-with-icon"
                            >
                              {item?.button_text}{" "}
                              <i class="fas fa-arrow-right"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default Style16;
