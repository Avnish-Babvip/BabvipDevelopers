import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination } from "swiper/modules"; // ✅ Fix for Swiper 8+
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Style3 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper and store the instance
    const swiperInstance = new Swiper(".dg-portfolio-slider", {
      modules: [Pagination], // ✅ Correct way to use Swiper modules
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

    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      // Ensure Swiper instance exists before destroying
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null; // Reset after unmount
      }
    };
  }, []);

  return (
    <section className="dg-portfolio-section mt-50 ptb-120 position-relative z-1 overflow-hidden">
      <img
        src={`${assetRoute}/assets/img/digital-agency/pf-left-shape.png`}
        alt="shape"
        class="position-absolute top-0 z--1 pf-curve left d-none d-xxl-block"
      />
      <img
        src={`${assetRoute}/assets/img/digital-agency/pf-right-shape.png`}
        alt="shape"
        class="position-absolute top-0 z--1 pf-curve right d-none d-xxl-block"
      />
      <img
        src={`${assetRoute}/assets/img/digital-agency/pf-line.png`}
        alt="shape"
        class="position-absolute pf-line d-none d-lg-block"
      />
      <span class="dg-circle-style-1 pf-circle position-absolute rounded-circle"></span>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-lg-8">
            <div className="section-title text-center text-lg-start">
              <span className="fw-bold text-dg-primary mb-2">
                {data?.subtitle}
              </span>
              <h2 className="mb-0 clr-text">{data?.title}</h2>
            </div>
          </div>
          {data?.button_text && (
            <div class="col-lg-4 align-self-end">
              <div class="text-center text-lg-end mt-40 mt-lg-0">
                <Link
                  to={data?.button_url}
                  target="_blank"
                  class="btn dg-outline-btn rounded-pill"
                >
                  {data?.button_text}
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Swiper Slider */}
        <div className="dg-portfolio-slider pt-5 swiper">
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
                  <a class="read-more-link text-decoration-none">
                    Explore More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </Link>
            ))}
          </div>
          <div class="dg-portfolio-slider-control dg-slider-control mt-40 text-center ">
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
