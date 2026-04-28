import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const Style47 = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperContainerRef.current, {
      modules: [Autoplay, Pagination],
      slidesPerView: 2,
      loop: true,
      speed: 800,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    });

    return () => swiperInstance.destroy(true, true);
  }, []);

  return (
    <section className="crm-how-it-works position-relative z-1 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-5 col-lg-7">
            <div className="crm-title">
              <span className="crm-subtitle">
                How It Work{" "}
                <img
                  src="assets/img/shape/arrow-red.png"
                  alt="arrow"
                  className="ms-1"
                />
              </span>
              <h2 className="mb-3 text-white">
                Learn What Quiety Can <br className="d-none d-xxl-block" />
                Do For You.
              </h2>
              <p className="mb-0 text-white">
                Bring in quality leads, nurture them, and turn them into happy,
                paying customers—all in a single place.
              </p>
              <a href="#" className="btn crm-primary-btn mt-40">
                Explore More
              </a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-7 col-lg-5">
            <div ref={swiperContainerRef} className="crm-htw-slider swiper">
              <div className="swiper-wrapper">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="crm-htw-single bg-white text-center rounded swiper-slide"
                  >
                    <img
                      src={`assets/img/crm/htw-${(item % 2) + 1}.png`}
                      alt="slide"
                      className="img-fluid mb-30"
                    />
                    <h6 className="mb-2">Grow your Small Business</h6>
                    <p className="mb-4">
                      Bring in quality leads, nurture them, in a single place.
                    </p>
                    <a href="#" className="read-more-link">
                      Explore More{" "}
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>
                  </div>
                ))}
              </div>
              <div className="pagination-wrapper">
                <span className="crm_init_value slide_counter">01</span>
                <div className="swiper-pagination"></div>

                <span className="crm_total_value slide_counter">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style47;
