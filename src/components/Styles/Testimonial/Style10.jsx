import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style10 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".payment-testimonial-slider", {
      modules: [Autoplay],
      slidesPerView: 2,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
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
      <section class="payment-testimonial bg-white-light ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="text-center mb-5">
                <h2 class="mb-3">{data?.title}</h2>
                <p class="m-0">{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="swiper payment-testimonial-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper">
                  {data?.review.map((item, idx) => (
                    <div
                      class="swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="0"
                      role="group"
                      aria-label="1 / 3"
                    >
                      <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                        <img
                          src={`${assetRoute}/assets/img/testimonial/quotes-p.svg`}
                          class="mb-4"
                          alt="quotes"
                        />
                        <h5 class="mb-3">{item?.review_title}</h5>
                        <p class="mb-3">{item?.review_description}</p>
                        <ul class="list-unstyled rating-list list-inline mb-4">
                          {Array(Number(item?.client_rating))
                            .fill()
                            .map((_, idx) => (
                              <li class="list-inline-item">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                            ))}
                        </ul>
                        <div class="payment-t-author d-flex align-items-center">
                          <div class="payment-auth-img me-3">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.image}`}
                              alt={item?.alt_tag}
                            />
                          </div>
                          <div class="payment-auth-info">
                            <h5 class="h6 m-0">{item?.client_name}</h5>
                            <small>{item?.designation}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style10;
