import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Style1 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(".testimonialSwiper", {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1142: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
    <section class="testimonial-section ptb-120 ">
      <div class="container">
        <div class="row justify-content-center align-content-center">
          <div class="col-md-10 col-lg-6">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.sub_title}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="position-relative w-100">
              <div class="swiper testimonialSwiper ">
                <div class="swiper-wrapper">
                  {data?.review?.map((item, idx) => (
                    <div key={idx} class="swiper-slide">
                      <div class="border border-2 p-5 rounded-custom position-relative">
                        <img
                          src={`${assetRoute}/assets/img/testimonial/quotes-dot.svg`}
                          alt="quotes"
                          width="100"
                          class="img-fluid position-absolute left-0 top-0 z--1 p-3"
                        />
                        <div class="d-flex mb-32 align-items-center">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.image}`}
                            alt={item?.alt_tag}
                            class="img-fluid me-3 rounded"
                            width="60"
                          />
                          <div class="author-info">
                            <h6 class="mb-0">{item?.client_name}</h6>
                            <small>{item?.designation}</small>
                          </div>
                        </div>
                        <blockquote>
                          <h6>{item?.review_title}</h6>
                          {item?.review_description}
                        </blockquote>
                        <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                          {Array(Number(item?.client_rating))
                            .fill()
                            .map((_, idx) => {
                              return (
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              );
                            })}
                        </ul>
                        <img
                          src={`${assetRoute}/assets/img/testimonial/quotes.svg`}
                          alt="quotes"
                          class="position-absolute right-0 bottom-0 z--1 pe-4 pb-4"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="swiper-nav-control">
                <span class="swiper-button-next"></span>
                <span class="swiper-button-prev"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
