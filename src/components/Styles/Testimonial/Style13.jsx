import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import {
  Navigation,
  Autoplay,
  Controller,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css/navigation"; // Import Navigation styles

const Style13 = () => {
  const sliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  useEffect(() => {
    // Initialize the thumbnail swiper (crm-feedback-control-slider)
    const thumbSwiper = new Swiper(".crm-feedback-control-slider", {
      modules: [Controller, EffectCoverflow],
      spaceBetween: 0,
      centeredSlides: true,
      slidesPerView: 5,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: true,
      speed: 800,
      loopedSlides: 4,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        scale: 1,
        stretch: 12,
        depth: 185,
      },
    });

    // Initialize the main swiper (crm-feedback-slider)
    const mainSwiper = new Swiper(".crm-feedback-slider", {
      modules: [Navigation, Autoplay, Controller],
      spaceBetween: 10,
      autoplay: true,
      speed: 800,
      navigation: {
        nextEl: ".crm-next-control",
        prevEl: ".crm-prev-control",
      },
      loop: true,
      loopedSlides: 4,
    });

    // Link both Swipers
    mainSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = mainSwiper;

    // Store instances in refs
    sliderRef.current = mainSwiper;
    thumbSliderRef.current = thumbSwiper;

    // Cleanup on unmount
    return () => {
      if (sliderRef.current) {
        sliderRef.current.destroy(true, true);
      }
      if (thumbSliderRef.current) {
        thumbSliderRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <>
      <section class="crm-feedback-section ptb-40 overflow-hidden bg-white">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="crm-feedback-box rounded position-relative">
                <div class="crm-feedback-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                  <div class="swiper-wrapper">
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index="1"
                      role="group"
                      aria-label="2 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="3 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate"
                      data-swiper-slide-index="3"
                      role="group"
                      aria-label="4 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate"
                      data-swiper-slide-index="4"
                      role="group"
                      aria-label="5 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-prev"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-active"
                      data-swiper-slide-index="1"
                      role="group"
                      aria-label="2 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-next"
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="3 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center"
                      data-swiper-slide-index="3"
                      role="group"
                      aria-label="4 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center"
                      data-swiper-slide-index="4"
                      role="group"
                      aria-label="5 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index="1"
                      role="group"
                      aria-label="2 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="3 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="crm-feedback-single swiper-slide text-center swiper-slide-duplicate"
                      data-swiper-slide-index="3"
                      role="group"
                      aria-label="4 / 5"
                    >
                      <p class="mb-4 text-white">
                        “Easily organize your infrastructure with Projects. And
                        with Teams, everyone can get their own account, with
                        just the privileges they need to do their and
                        we’rerunning a jobs. Our hosting costs have decreased by
                        over 90% and we're running at about 25% of our capacity”
                      </p>
                      <h4 class="mb-0 text-white">Jerry G. Sanchez</h4>
                      <ul class="crm-stars d-inline-flex align-items-center p-0 m-0">
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li class="list-inline">
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div class="crm-next-control"></div>
                  <div class="crm-prev-control"></div> */}
                </div>
                <div class="crm-feedback-control-slider swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress">
                  <div
                    class="swiper-wrapper"
                    id="swiper-wrapper-cec9a7f169d216107"
                    aria-live="polite"
                  >
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index="1"
                      role="group"
                      aria-label="2 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-2.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="3 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-3.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate swiper-slide-visible"
                      data-swiper-slide-index="3"
                      role="group"
                      aria-label="4 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-4.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate swiper-slide-visible swiper-slide-prev"
                      data-swiper-slide-index="4"
                      role="group"
                      aria-label="5 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-5.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-visible swiper-slide-active"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-1.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-visible swiper-slide-next"
                      data-swiper-slide-index="1"
                      role="group"
                      aria-label="2 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-2.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-visible"
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="3 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-3.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide"
                      data-swiper-slide-index="3"
                      role="group"
                      aria-label="4 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-4.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate-prev"
                      data-swiper-slide-index="4"
                      role="group"
                      aria-label="5 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-5.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-1.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index="1"
                      role="group"
                      aria-label="2 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-2.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="2"
                      role="group"
                      aria-label="3 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-3.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                    <div
                      class="crm-feedback-control-thumb swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="3"
                      role="group"
                      aria-label="4 / 5"
                    >
                      <img
                        src="assets/img/marketing/client-4.png"
                        alt="client"
                        class="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <span
                    class="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
                <div class="crm-next-control crm-next-control-outer crm-fd-slide-control">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="crm-next-control crm-prev-control-outer crm-fd-slide-control">
                  <i class="fa-solid fa-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style13;
