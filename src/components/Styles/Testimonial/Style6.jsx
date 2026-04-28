import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".cyber-testimonial-slider", {
      slidesPerView: 1,
      speed: 700,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },

      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
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
      <section
        class="cyber-testimonial pt-100"
        style={{
          background: `url('assets/img/map.png') no-repeat center center / cover`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-10">
              <div class="cyber-testimonial pe-5 mb-30 mb-lg-0">
                <h5 class="h6 text-primary">{data?.sub_title}</h5>
                <h2 class="">{data?.title}</h2>
                <p>{data?.description}</p>
                <div class="action-btn mt-5">
                  {data?.button_text && (
                    <Link to={data?.button_url} class="btn btn-primary me-3">
                      {data?.button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="swiper cyber-testimonial-slider ">
                <div class="swiper-wrapper">
                  {data?.review.map((item, idx) => (
                    <div class="swiper-slide position-relative ">
                      <div class="cyber-single-testimonial bg-white shadow-sm m-3">
                        <div class="cyber-t-q mb-4">
                          <img
                            src={`${assetRoute}/assets/img/quoate.png`}
                            alt="quoate"
                          />
                        </div>
                        <p class="mb-30">{item?.review_description}</p>
                        <div class="cyber-auth-info d-flex">
                          <div class="pe-3 cyber-testimonial-author-img">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.image}`}
                              alt={item?.client_image_alt_tag}
                            />
                          </div>
                          <div class="cyber-testimonial-author">
                            <h5 class="mb-0 h6">{item?.client_name}</h5>
                            <span>{item?.designation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="swiper-pagination "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
