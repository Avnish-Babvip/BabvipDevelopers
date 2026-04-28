import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";

const Style36 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-logo-slider", {
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

    // return () => {
    //   if (swiperRef.current) {
    //     swiperRef.current.destroy(true, true); // Cleanup on unmount
    //   }
    // };
  }, []);
  return (
    <>
      <div class="aiart-hreo-area bgc-white pt-200 pb-60 position-relative z-1 overflow-hidden">
        <img
          src={`${assetRoute}/assets/img/aiart_home/shape/hero-1.png`}
          alt=""
          class="shape-1 z--1 position-absolute"
        />
        <img
          src={`${assetRoute}/assets/img/aiart_home/shape/hero-2.png`}
          alt=""
          class="shape-2 z--1 position-absolute"
        />
        <img
          src={`${assetRoute}/assets/img/aiart_home/shape/hero-3.png`}
          alt=""
          class="shape-3 z--1 position-absolute"
        />
        <div class="container">
          <div class="position-relative">
            <div class="row">
              <div class="col-xxl-10 col-xl-11">
                <h1 class="text-black fs-142 ff-risk-pri">
                  {data?.banner_title1} <br />
                  <span class="bg-white pr-40 pb-20 rounded-3">
                    {data?.banner_title2}
                  </span>{" "}
                  <br />
                  <span class="title-img">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image1
                      }`}
                      alt={data?.image1_alt_tag}
                    />
                  </span>
                  <span class="bgc-white fs-130 pr-40 pb-20 rounded-3">
                    <span class="aiart-outline-text ">
                      {data?.image1_title}
                    </span>
                  </span>
                </h1>
                <div class="row">
                  <div class="col-lg-8">
                    <p class="text-black fw-700 ff-risk-pri mt-20 mb-30">
                      {data?.bottom_title}{" "}
                      <span class="aiart-gd-text">
                        {data?.bottom_highlighted_title}
                      </span>
                    </p>
                    <ul class="aiart-hero-list d-flex align-items-center flex-wrap gap-4 list-unstyled">
                      {data?.step1_text && (
                        <li>
                          <Link
                            to={data?.step1_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step1_text}
                          </Link>
                        </li>
                      )}
                      {data?.step2_text && (
                        <li>
                          <Link
                            to={data?.step2_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step2_text}
                          </Link>
                        </li>
                      )}
                      {data?.step3_text && (
                        <li>
                          <Link
                            to={data?.step3_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step3_text}
                          </Link>
                        </li>
                      )}
                      {data?.step4_text && (
                        <li>
                          <Link
                            to={data?.step4_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step4_text}
                          </Link>
                        </li>
                      )}
                      {data?.step5_text && (
                        <li>
                          <Link
                            to={data?.step5_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step5_text}
                          </Link>
                        </li>
                      )}
                      {data?.step6_text && (
                        <li>
                          <Link
                            to={data?.step6_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step6_text}
                          </Link>
                        </li>
                      )}
                      {data?.step7_text && (
                        <li>
                          <Link
                            to={data?.step7_url}
                            target="_blank"
                            class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                          >
                            {data?.step7_text}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-8">
                <div class="aiart-hero-right">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_image_alt_tag}
                    class="aiart-hero-img position-absolute img-fluid z--1"
                  />
                  {data?.button_text && (
                    <Link
                      target="_blank"
                      to={data?.button_url}
                      class="aiart-un-btn aiart-gd-bg text-white fw-700 rounded-circle d-flex align-items-center justify-content-center flex-column gap-0 position-absolute"
                    >
                      <span class="d-flex align-items-center justify-content-center gap-3">
                        {data?.button_text}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.763587 17.2308C0.763587 17.2308 9.42193 8.57241 17.2308 0.76353M17.2308 0.76353C11.5897 6.40463 4.78493 1.68236 4.78493 1.68236M17.2308 0.76353C11.5897 6.40463 16.312 13.2094 16.312 13.2094"
                            stroke="white"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aiart-logo-area bg-white pt-60 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <h6 class="text-black fs-20 fw-800 ff-risk-pri mt-20 mb-30">
                  {data?.crousal_title}{" "}
                  <span class="aiart-gd-text">
                    {data?.crousal_highlighted_title}
                  </span>
                </h6>
              </div>
              <div class="swiper digi-logo-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                <div class="swiper-wrapper align-items-center">
                  {data?.step_data.map((item, idx) => (
                    <div
                      class="swiper-slide "
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 6"
                    >
                      <div class="single-logo">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_alt_tag}
                          class="img-fluid"
                          height="30"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style36;
