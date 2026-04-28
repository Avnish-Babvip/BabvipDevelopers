import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"; // Import Navigation styles
import VideoModal from "../../VideoModal/VideoModal";

const Style2 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const swiperData = [...data?.step_data, ...data?.step_data];
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".ins-gallery-slider", {
      modules: [Navigation],
      slidesPerView: 3,
      loop: true,
      speed: 800,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
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
      <section class="ins-gallery ">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-6">
              <div class="ins-title">
                <div class="d-flex align-items-center">
                  <span class="subtitle fw-bold me-1">{data?.subtitle}</span>
                  <span>
                    <svg
                      width="56"
                      height="13"
                      viewBox="0 0 56 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.262474 6.51123L49.0564 6.51123"
                        stroke="#0EE7C5"
                        stroke-width="1.49369"
                      ></path>
                      <path
                        d="M55.0297 6.51187L46.0675 11.6862L46.0675 1.33758L55.0297 6.51187Z"
                        fill="#0EE7C5"
                      ></path>
                    </svg>
                  </span>
                </div>
                <h2 class="mt-2 ins-heading mb-0">
                  {data?.title} <mark>{data?.highlighted_title}</mark>
                </h2>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="ins-gallery-info mt-3 mt-xl-0">
                <p class="ins-text mb-30">{data?.main_description}</p>
                <div class="d-flex align-items-center ins-gallery-info-btns flex-wrap">
                  {data?.button_url && (
                    <Link
                      to={data?.button_url}
                      class="ins-btn ins-secondary-btn"
                    >
                      {data?.button_text}
                      <span class="ms-1">
                        <svg
                          width="22"
                          height="9"
                          viewBox="0 0 22 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.776428 4.55017L15.7133 4.55017"
                            stroke="white"
                            stroke-width="1.49369"
                          ></path>
                          <path
                            d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  )}
                  {data?.video_url && (
                    <Link
                      onClick={() => data?.video_url && setShowVideo(true)}
                      class="video-icon popup-youtube text-decoration-none"
                    >
                      <i class="fas fa-play"></i>{" "}
                      <span class="ms-2 fs-md fw-bold">
                        {" "}
                        {data?.video_text}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ins-gallery-center-slider overflow-hidden">
          <div class="ins-gallery-slider swiper overflow-visible mt-5 ">
            <div class="swiper-wrapper">
              {swiperData.map((item, index) => (
                <>
                  <div class="ins-gallery-slide-single swiper-slide position-relative ">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="ins-btn ins-primary-btn position-absolute"
                    >
                      {item?.step_title}
                      <span class="ms-1">
                        <svg
                          width="22"
                          height="9"
                          viewBox="0 0 22 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.776428 4.55017L15.7133 4.55017"
                            stroke="white"
                            stroke-width="1.49369"
                          ></path>
                          <path
                            d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </>
              ))}
            </div>
            <div class="swiper-btn-prev swiper-control">
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div class="swiper-btn-next swiper-control">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </section>
      {showVideo && (
        <VideoModal videoUrl={data?.video_url} setShowVideo={setShowVideo} />
      )}
    </>
  );
};

export default Style2;
