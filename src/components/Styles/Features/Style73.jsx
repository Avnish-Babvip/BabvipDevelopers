import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style73 = () => {
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
    <div class="aih-logo-slider ah-bg ptb-60">
      <div class="container-fluid container-xmax p-0">
        <div class="row g-0 justify-content-center">
          <div class="col-12">
            <div class="swiper qty-brand-slider swiper-initialized swiper-horizontal swiper-pointer-events">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="10 / 16"
                  data-swiper-slide-index="9"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Dribbble</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="11 / 16"
                  data-swiper-slide-index="10"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-3.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Spotify</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="12 / 16"
                  data-swiper-slide-index="11"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-4.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Figma</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  role="group"
                  aria-label="13 / 16"
                  data-swiper-slide-index="12"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-5.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Google</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  role="group"
                  aria-label="14 / 16"
                  data-swiper-slide-index="13"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-6.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">bootstrap</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  role="group"
                  aria-label="15 / 16"
                  data-swiper-slide-index="14"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-7.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Vscode</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="16 / 16"
                  data-swiper-slide-index="15"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-8.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Mailchimp</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="1 / 16"
                  data-swiper-slide-index="0"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Slack</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="2 / 16"
                  data-swiper-slide-index="1"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Dribbble</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="3 / 16"
                  data-swiper-slide-index="2"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-3.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Spotify</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="4 / 16"
                  data-swiper-slide-index="3"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-4.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Figma</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="5 / 16"
                  data-swiper-slide-index="4"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-5.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Google</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="6 / 16"
                  data-swiper-slide-index="5"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-6.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">bootstrap</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="7 / 16"
                  data-swiper-slide-index="6"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-7.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Vscode</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="8 / 16"
                  data-swiper-slide-index="7"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-8.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Mailchimp</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="9 / 16"
                  data-swiper-slide-index="8"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Slack</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="10 / 16"
                  data-swiper-slide-index="9"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Dribbble</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="11 / 16"
                  data-swiper-slide-index="10"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-3.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Spotify</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="12 / 16"
                  data-swiper-slide-index="11"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-4.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Figma</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-prev"
                  role="group"
                  aria-label="13 / 16"
                  data-swiper-slide-index="12"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-5.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Google</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="14 / 16"
                  data-swiper-slide-index="13"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-6.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">bootstrap</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="15 / 16"
                  data-swiper-slide-index="14"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-7.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Vscode</div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  role="group"
                  aria-label="16 / 16"
                  data-swiper-slide-index="15"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-8.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Mailchimp</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="1 / 16"
                  data-swiper-slide-index="0"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-1.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Slack</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="2 / 16"
                  data-swiper-slide-index="1"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-2.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Dribbble</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="3 / 16"
                  data-swiper-slide-index="2"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-3.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Spotify</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="4 / 16"
                  data-swiper-slide-index="3"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-4.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Figma</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="5 / 16"
                  data-swiper-slide-index="4"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-5.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Google</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="6 / 16"
                  data-swiper-slide-index="5"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-6.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">bootstrap</div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  role="group"
                  aria-label="7 / 16"
                  data-swiper-slide-index="6"
                >
                  <div class="qty-brand">
                    <div class="qty-brand__img">
                      <img
                        src="assets/img/brand-img-7.png"
                        alt="image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="qty-brand__text">Vscode</div>
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
  );
};

export default Style73;
