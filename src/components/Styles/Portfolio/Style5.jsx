import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { Pagination } from "swiper/modules"; // ✅ Fix for Swiper 8+
import "swiper/css";
import "swiper/css/pagination";

const Style5 = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".dg-portfolio-slider", {
      modules: [Pagination], // ✅ Fix for Swiper 8+
      spaceBetween: 24,
      pagination: {
        el: ".dg-portfolio-slider-control",
        clickable: true, // Enables bullet clicks
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <section class="dg-portfolio-section dat-bg style-dark pt-60 position-relative z-1 overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-6 col-lg-8">
            <div class="section-title text-center">
              <h2 class="mb-0 clr-text">{data?.title}</h2>
            </div>
          </div>
        </div>

        <div class="dg-portfolio-slider pt-5 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div className="swiper-wrapper">
            {data?.step_data.map((item, index) => (
              <Link
                to={`/portfolio/${item?.port_slug}`}
                key={index}
                className="swiper-slide dg-portfolio-single bg-white rounded"
              >
                <div className="thunbmanil overflow-hidden rounded-top mb-4">
                  <div>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="dg-portfolio-item-content">
                  <div className="d-inline-block text-dark badge bg-warning-soft">
                    {item.category}
                  </div>
                  <div>
                    <h5 className="mt-3 mb-4">{item.step_title}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div class="dg-portfolio-slider-control dg-slider-control mt-40 text-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
              aria-current="true"
            ></span>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Style5;
