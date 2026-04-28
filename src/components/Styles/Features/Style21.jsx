import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Style21 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".dg-team-slider", {
      modules: [Pagination],
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: ".dg-team-slider-controls",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
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
      <section class="dg-team-section  position-relative z-1 overflow-hidden ptb-120">
        <img
          src={`${assetRoute}/assets/img/digital-agency/team-curve-left.png`}
          alt="team curve"
          class="position-absolute left tm-curve top-0 h-100 z--1 d-none d-xxl-block"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/team-curve-right.png`}
          alt="team curve"
          class="position-absolute right tm-curve top-0 z--1 h-100 d-none d-xxl-block"
        />
        <img
          src={`${assetRoute}/assets/img/digital-agency/team-line.png`}
          alt="line shape"
          class="position-absolute team-line z--1 bottom-0"
        />
        <span class="dg-circle-style-1 dg-circle-1 rounded-circle position-absolute z--1"></span>
        <span class="dg-circle-style-2 dg-circle-2 rounded-circle position-absolute z--1"></span>
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-xl-5 col-lg-6">
              <div class="dg-team-content text-center text-lg-start mb-4 mb-lg-0">
                <span class="fw-bold text-dg-primary mb-2">
                  {data?.sub_title}
                </span>
                <h2 class="mb-4 clr-text">{data?.title}</h2>
                <p class="mb-40">{data?.description}</p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn dg-primary-btn rounded-pill"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
            <div class="col-xl-7 col-lg-6">
              <div class="dg-team-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper">
                  {data?.step_data.map((item, idx) => (
                    <div
                      class="dg-team-single swiper-slide rounded-3 position-relative overflow-hidden swiper-slide-duplicate"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 3"
                    >
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                        class="img-fluid"
                      />
                      <div class="designation-box bg-white rounded-3 text-center">
                        <h6 class="heading-dg-color mb-0">{item?.name}</h6>
                        <span class="fs-sm d-block">{item?.designation}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="dg-team-slider-controls dg-slider-control d-flex align-items-center justify-content-center mt-40 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 1"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 2"
                  ></span>
                  <span
                    class="swiper-pagination-bullet "
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 3"
                    aria-current="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style21;
