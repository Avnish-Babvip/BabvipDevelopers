import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style75 = () => {
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
    <section class="digtal-marketing-logo pt-120">
      <div class="container">
        <div class="style-dark py-5 px-4 rounded-3 position-relative z-2 mt-40">
          <div class="row justify-content-center">
            <div class="col-auto">
              <h5 class="mb-4 clr-text">
                Trusted by the best companies in the world
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              <div class="swiper digi-logo-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/google.svg"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/facebook.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/youtube.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="3"
                    role="group"
                    aria-label="4 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/printerest.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                    data-swiper-slide-index="4"
                    role="group"
                    aria-label="5 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/webflow.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="5"
                    role="group"
                    aria-label="6 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/company.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate-next"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/google.svg"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/facebook.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/youtube.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide"
                    data-swiper-slide-index="3"
                    role="group"
                    aria-label="4 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/printerest.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index="4"
                    role="group"
                    aria-label="5 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/webflow.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="5"
                    role="group"
                    aria-label="6 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/company.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-next"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/google.svg"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/facebook.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/youtube.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="3"
                    role="group"
                    aria-label="4 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/printerest.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                    data-swiper-slide-index="4"
                    role="group"
                    aria-label="5 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/webflow.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="5"
                    role="group"
                    aria-label="6 / 6"
                  >
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/company.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
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
    </section>
  );
};

export default Style75;
