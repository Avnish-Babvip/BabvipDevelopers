import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination"; // Import Navigation styles

const Style15 = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".ca-testimonial-slider", {
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
        el: ".ca-testimonial-slider__pagination",
        clickable: true,
      },
    });
    const swiperInstance2 = new Swiper(".ca-client-slider", {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 8000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });

    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;
    swiperRef2.current = swiperInstance2;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
      if (swiperRef2.current) {
        swiperRef2.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);
  return (
    <>
      <div class="section-space bgc-secondary ca-testimonial-section">
        <div class="section-space--sm-bottom">
          <div class="container">
            <div class="row  g-4 gy-md-0 align-items-center">
              <div class="col-md-8">
                <h4 class="heading-4 clr-white font-weight-bold mb-0 text-center text-md-start">
                  Trust Members Are Saying
                </h4>
              </div>

              <div class="col-md-4">
                <div class=" ca-testimonial-slider__pagination ">
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                  ></span>
                  <span
                    class="swiper-pagination-bullet swiper-pagination-bullet-active"
                    tabindex="0"
                    role="button"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="swiper ca-testimonial-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper">
                  <div class="swiper-slide ">
                    <div class="bgc-white rounded-4 padding-4 padding-md-6 padding-xl-10 d-flex flex-wrap flex-sm-nowrap gap-6">
                      <div class="flex-shrink-0">
                        <img
                          src="assets/img/creative-agency/member-3.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="heading-6 font-weight-semibold clr-text margin-bottom-1">
                          Carl L. James
                        </h6>
                        <span class="d-block clr-paragraph fs-14 font-weight-semibold margin-bottom-4">
                          Founder &amp; CEO Google
                        </span>
                        <p class="mb-0 clr-paragraph">
                          Synergistically integrate dynamic solutions vis-a-vis
                          resource the maximizing ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="bgc-white rounded-4 padding-4 padding-md-6 padding-xl-10 d-flex flex-wrap flex-sm-nowrap gap-6">
                      <div class="flex-shrink-0">
                        <img
                          src="assets/img/creative-agency/member-3.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="heading-6 font-weight-semibold clr-text margin-bottom-1">
                          Carl L. James
                        </h6>
                        <span class="d-block clr-paragraph fs-14 font-weight-semibold margin-bottom-4">
                          Founder &amp; CEO Google
                        </span>
                        <p class="mb-0 clr-paragraph">
                          Synergistically integrate dynamic solutions vis-a-vis
                          resource the maximizing ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="bgc-white rounded-4 padding-4 padding-md-6 padding-xl-10 d-flex flex-wrap flex-sm-nowrap gap-6">
                      <div class="flex-shrink-0">
                        <img
                          src="assets/img/creative-agency/member-1.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="heading-6 font-weight-semibold clr-text margin-bottom-1">
                          Jone Smith Deo
                        </h6>
                        <span class="d-block clr-paragraph fs-14 font-weight-semibold margin-bottom-4">
                          Founder &amp; CEO Google
                        </span>
                        <p class="mb-0 clr-paragraph">
                          Synergistically integrate dynamic solutions vis-a-vis
                          resource the maximizing ROI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide ">
                    <div class="bgc-white rounded-4 padding-4 padding-md-6 padding-xl-10 d-flex flex-wrap flex-sm-nowrap gap-6">
                      <div class="flex-shrink-0">
                        <img
                          src="assets/img/creative-agency/member-2.png"
                          alt="image"
                          class="img-fluid"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="heading-6 font-weight-semibold clr-text margin-bottom-1">
                          Paul S. Williams
                        </h6>
                        <span class="d-block clr-paragraph fs-14 font-weight-semibold margin-bottom-4">
                          Founder &amp; CEO Themetags
                        </span>
                        <p class="mb-0 clr-paragraph">
                          Synergistically integrate dynamic solutions vis-a-vis
                          resource the maximizing ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-space--sm-top">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <h6 class="heading-6 clr-white margin-bottom-8 font-weight-medium text-center">
                  Trusted by More than 80 Million Users Globally
                </h6>
                <div class="swiper ca-client-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate"
                      role="group"
                      aria-label="4 / 6"
                      data-swiper-slide-index="3"
                    >
                      <img
                        src="assets/img/creative-agency/client-4.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate"
                      role="group"
                      aria-label="5 / 6"
                      data-swiper-slide-index="4"
                    >
                      <img
                        src="assets/img/creative-agency/client-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-prev"
                      role="group"
                      aria-label="6 / 6"
                      data-swiper-slide-index="5"
                    >
                      <img
                        src="assets/img/creative-agency/client-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate-active"
                      role="group"
                      aria-label="1 / 6"
                      data-swiper-slide-index="0"
                    >
                      <img
                        src="assets/img/creative-agency/client-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate-next"
                      role="group"
                      aria-label="2 / 6"
                      data-swiper-slide-index="1"
                    >
                      <img
                        src="assets/img/creative-agency/client-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center"
                      role="group"
                      aria-label="3 / 6"
                      data-swiper-slide-index="2"
                    >
                      <img
                        src="assets/img/creative-agency/client-3.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center"
                      role="group"
                      aria-label="4 / 6"
                      data-swiper-slide-index="3"
                    >
                      <img
                        src="assets/img/creative-agency/client-4.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center"
                      role="group"
                      aria-label="5 / 6"
                      data-swiper-slide-index="4"
                    >
                      <img
                        src="assets/img/creative-agency/client-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-prev"
                      role="group"
                      aria-label="6 / 6"
                      data-swiper-slide-index="5"
                    >
                      <img
                        src="assets/img/creative-agency/client-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate swiper-slide-active"
                      role="group"
                      aria-label="1 / 6"
                      data-swiper-slide-index="0"
                    >
                      <img
                        src="assets/img/creative-agency/client-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate swiper-slide-next"
                      role="group"
                      aria-label="2 / 6"
                      data-swiper-slide-index="1"
                    >
                      <img
                        src="assets/img/creative-agency/client-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div
                      class="swiper-slide text-center swiper-slide-duplicate"
                      role="group"
                      aria-label="3 / 6"
                      data-swiper-slide-index="2"
                    >
                      <img
                        src="assets/img/creative-agency/client-3.png"
                        alt="image"
                        class="img-fluid"
                      />
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
      </div>
    </>
  );
};

export default Style15;
