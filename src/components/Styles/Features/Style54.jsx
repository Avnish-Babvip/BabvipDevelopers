import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Style54 = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".ca-goal-slider", {
      modules: [Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: ".ca-goal-slider__pagination",
        clickable: true,
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
    <div class="ca-goal-section bgc-primary">
      <div class="section-space--sm-bottom">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-xl-6">
              <h4 class="heading-4 clr-white mb-0 text-center">
                Does More then Ever Platform to Achieve Goal Stages.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="swiper ca-goal-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index="1"
                  role="group"
                  aria-label="2 / 4"
                >
                  <div class="padding-x-3">
                    <div class="ca-goal-card bgc-white rounded-4 padding-5 padding-md-10 text-center">
                      <div class="d-grid place-content-center width-21 height-21 rounded-circle mx-auto margin-bottom-6 bgc-warning">
                        <img
                          src="assets/img/creative-agency/icon-crown.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <h6 class="heading-6 clr-text margin-bottom-3 lh-1 font-weight-bold">
                        Automated Reports
                      </h6>
                      <p class="clr-paragraph mb-0">
                        We provide best IT solutions for type of business as
                        company
                      </p>
                      <span class="ca-goal-card__extension ca-goal-card__extension-start"></span>
                      <span class="ca-goal-card__extension ca-goal-card__extension-end"></span>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="2"
                  role="group"
                  aria-label="3 / 4"
                >
                  <div class="padding-x-3">
                    <div class="ca-goal-card bgc-white rounded-4 padding-5 padding-md-10 text-center">
                      <div class="d-grid place-content-center width-21 height-21 rounded-circle mx-auto margin-bottom-6 bgc-secondary">
                        <img
                          src="assets/img/creative-agency/icon-upload.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <h6 class="heading-6 clr-text margin-bottom-3 lh-1 font-weight-bold">
                        User Journey Flow
                      </h6>
                      <p class="clr-paragraph mb-0">
                        We provide best IT solutions for type of business as
                        company
                      </p>
                      <span class="ca-goal-card__extension ca-goal-card__extension-start"></span>
                      <span class="ca-goal-card__extension ca-goal-card__extension-end"></span>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  data-swiper-slide-index="3"
                  role="group"
                  aria-label="4 / 4"
                >
                  <div class="padding-x-3">
                    <div class="ca-goal-card bgc-white rounded-4 padding-5 padding-md-10 text-center">
                      <div class="d-grid place-content-center width-21 height-21 rounded-circle mx-auto margin-bottom-6 bgc-warning">
                        <img
                          src="assets/img/creative-agency/icon-crown.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <h6 class="heading-6 clr-text margin-bottom-3 lh-1 font-weight-bold">
                        Automated Reports
                      </h6>
                      <p class="clr-paragraph mb-0">
                        We provide best IT solutions for type of business as
                        company
                      </p>
                      <span class="ca-goal-card__extension ca-goal-card__extension-start"></span>
                      <span class="ca-goal-card__extension ca-goal-card__extension-end"></span>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-active"
                  data-swiper-slide-index="0"
                  role="group"
                  aria-label="1 / 4"
                >
                  <div class="padding-x-3">
                    <div class="ca-goal-card bgc-white rounded-4 padding-5 padding-md-10 text-center">
                      <div class="d-grid place-content-center width-21 height-21 rounded-circle mx-auto margin-bottom-6 bgc-base">
                        <img
                          src="assets/img/creative-agency/icon-cpu-set.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <h6 class="heading-6 clr-text margin-bottom-3 lh-1 font-weight-bold">
                        Advanced analytics
                      </h6>
                      <p class="clr-paragraph mb-0">
                        We provide best IT solutions for type of business as
                        company
                      </p>
                      <span class="ca-goal-card__extension ca-goal-card__extension-start"></span>
                      <span class="ca-goal-card__extension ca-goal-card__extension-end"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-relative margin-top-8">
              <div class="swiper-pagination ca-goal-slider__pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span
                  class="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 1"
                  aria-current="true"
                ></span>
                <span
                  class="swiper-pagination-bullet"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 2"
                ></span>
                <span
                  class="swiper-pagination-bullet"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 3"
                ></span>
                <span
                  class="swiper-pagination-bullet"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 4"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style54;
