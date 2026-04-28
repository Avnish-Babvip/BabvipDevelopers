import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style6 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-logo-slider", {
      modules: [Autoplay], // Ensure Autoplay module is included
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      loopFillGroupWithBlank: true,
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
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  // const duplicatedSlides = [...originalSlides, ...originalSlides];

  return (
    <section class="digtal-marketing-logo ah-bg pb-60">
      <div class="container">
        <div class="bg-light-subtle style-dark shadow-sm py-5 px-4 rounded-3">
          <div class="row justify-content-center">
            <div class="col-auto">
              <h5 class="mb-4 clr-text">
                Trusted by the best companies in the world
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              <div class="swiper digi-logo-slider ">
                <div class="swiper-wrapper">
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/google.svg"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/facebook.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/youtube.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide  ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/printerest.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/webflow.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/company.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/google.svg"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/facebook.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/youtube.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide  ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/printerest.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo">
                      <img
                        src="assets/img/brand-logo/webflow.svg"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style6;
