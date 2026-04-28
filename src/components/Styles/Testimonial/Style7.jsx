import React, { useEffect, useRef } from "react";

const Style7 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".appTwoReviewSwiper", {
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
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
      <section class="cutomer-review-app-two ptb-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-12">
              <div class="mb-4 mb-sm-5">
                <h2>{data?.title}</h2>
                <p class="m-0">{data?.description}</p>
              </div>
            </div>
            <div class="col-lg-5 col-12 text-end d-none d-lg-block">
              <div class=" ms-md-auto position-relative">
                <span class="swiper-button-next"></span>
                <span class="swiper-button-prev"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="swiper appTwoReviewSwiper">
                <div class="swiper-wrapper">
                  {data?.review.map((item, idx) => (
                    <div class="swiper-slide position-relative ">
                      <div class=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                        <ul class="review-rate mb-1 list-unstyled list-inline">
                          {Array(Number(item?.client_rating))
                            .fill()
                            .map((_, idx) => (
                              <li class="list-inline-item">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                            ))}
                        </ul>
                        <h5 class="h6">{item?.review_title}</h5>
                        <p>{item?.review_description}</p>
                        <div class="d-flex align-items-center">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.image}`}
                            alt={item?.alt_tag}
                            class="img-fluid me-3 rounded-circle"
                            width="50"
                          />
                          <div class="author-info">
                            <h6 class="mb-0">{item?.client_name}</h6>
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

export default Style7;
