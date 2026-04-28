import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Style8 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".crypto-testimonial", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
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

    // return () => {
    //   if (swiperRef.current) {
    //     swiperRef.current.destroy(true, true); // Cleanup on unmount
    //   }
    // };
  }, []);

  return (
    <>
      <section class="crypto-testimonial bg-dark-black pt-60 pb-120">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="section-title mb-5">
                <h2 class="text-white">{data?.title}</h2>
                <p class="text-white">{data?.description}</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="text-left text-lg-end mb-5 mb-lg-0">
                {data?.button_text && (
                  <Link
                    target="_blank"
                    to={data?.button_url}
                    class="btn btn-primary rounded-pill"
                  >
                    {" "}
                    {data?.button_text}{" "}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="swiper crypto-testimonial ">
              <div class="swiper-wrapper">
                {data?.review.map((item, idx) => (
                  <div class="swiper-slide ">
                    <div class="crypto-single-testimonial bg-soft-black">
                      <ul class="review-rate mb-0 list-unstyled list-inline">
                        {Array(Number(item?.client_rating))
                          .fill()
                          .map((_, idx) => (
                            <li class="list-inline-item">
                              <i class="fas fa-star text-warning"></i>
                            </li>
                          ))}
                      </ul>
                      <blockquote class="m-0">
                        <p class="m-0">{item?.review_description}</p>
                      </blockquote>
                      <div class="author-meta d-flex align-items-center">
                        <div class="pe-3">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.image}`}
                            alt={item?.client_image_alt_tag}
                          />
                        </div>
                        <div>
                          <h5 class="fw-normal text-white h6 m-0">
                            {item?.client_name}
                          </h5>
                          <span>{item?.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style8;
