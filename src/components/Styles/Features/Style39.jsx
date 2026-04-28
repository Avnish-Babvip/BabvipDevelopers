import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const Style39 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
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
                {data?.sub_title}{" "}
                <img
                  src={`${assetRoute}/assets/img/shape/arrow-red.png`}
                  alt="arrow"
                  className="ms-1"
                />
              </span>
              <h2 className="mb-3 text-white">{data?.title}</h2>
              <p className="mb-0 text-white">{data?.description}</p>
              {data?.button_text && (
                <Link
                  to={data?.button_url}
                  target="_blank"
                  className="btn crm-primary-btn mt-40"
                >
                  {data?.button_text}
                </Link>
              )}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-7 col-lg-5">
            <div ref={swiperContainerRef} className="crm-htw-slider swiper">
              <div className="swiper-wrapper">
                {data?.step_data.map((item, index) => (
                  <div
                    key={index}
                    className="crm-htw-single bg-white text-center rounded swiper-slide "
                  >
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      className="img-fluid mb-30"
                    />
                    <h6 className="mb-2">{item?.step_title}</h6>
                    <p className="mb-4">{item?.step_description}</p>
                    {item?.link_text && (
                      <Link
                        to={item?.link_url}
                        target="_blank"
                        className="read-more-link"
                      >
                        {item?.link_text}{" "}
                        <i className="fa-solid fa-arrow-right-long ms-1"></i>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="pagination-wrapper mt-5"
                style={{
                  zIndex: 10,
                  position: "relative",
                }}
              >
                <span className="crm_init_value slide_counter">01</span>
                <div className="swiper-pagination"></div>

                <span className="crm_total_value slide_counter">
                  0{data?.step_data.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style39;
