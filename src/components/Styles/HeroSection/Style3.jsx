import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Style3 = ({ data }) => {
  const parallaxRef = useRef(null); // Reference for the parallax container

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init(); // Initialize AOS
    }

    if (parallaxRef.current) {
      new Parallax(parallaxRef.current, {
        relativeInput: true,
        clipRelativeInput: true,
      });
    }
  }, []);

  return (
    <>
      <section
        class="hero-section ptb-custom-120 position-relative overflow-hidden"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat center top`,
          backgroundSize: "100% auto",
        }}
      >
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-xl-8 col-lg-10 mb-5">
              <div class="hero-content-wrap">
                <h1 class="fw-bold display-5 " data-aos="fade-up">
                  {data?.banner_title}
                </h1>
                <p class="lead " data-aos="fade-up" data-aos-delay="50">
                  {data?.banner_description}
                </p>
                <div
                  class="action-btns text-center pt-4 "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {data?.button_text1 && (
                    <Link
                      to={data?.button_url1}
                      class="btn btn-primary me-lg-3 me-sm-3"
                    >
                      {data?.button_text1}
                    </Link>
                  )}
                  {data?.button_text2 && (
                    <Link
                      to={data?.button_url2}
                      class="btn btn-outline-primary"
                    >
                      {data?.button_text2}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div class="col-lg-9">
              <div
                class="position-relative "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ul
                  ref={parallaxRef}
                  class="position-absolute animate-element parallax-element widget-img-wrap z-2"
                >
                  <li class="layer" data-depth="0.4">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.banner_image1
                      }`}
                      alt={data?.banner_image1_alt_tag}
                      class="img-fluid widget-img-1 position-absolute shadow-lg rounded-custom"
                    />
                  </li>
                  <li class="layer" data-depth="0.2">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.banner_image3
                      }`}
                      alt={data?.banner_image3_alt_tag}
                      class="img-fluid widget-img-3 position-absolute shadow-lg rounded-custom"
                    />
                  </li>
                </ul>
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image2
                  }`}
                  alt={data?.banner_image2_alt_tag}
                  class="img-fluid position-relative rounded-custom mt-lg-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-dark position-absolute bottom-0 h-25  left-0 right-0 z--1 py-5"></div>
      </section>
      <section class="customer-review pb-120 bg-dark">
        <div class="container">
          <div class="row">
            <div class="section-heading text-center">
              <h2 class="fw-medium h4">
                Rated 5 out of 5 stars by our customers
              </h2>
            </div>
          </div>
          <div class="row">
            {data?.review?.map((item, idx) => (
              <div key={idx} class="col-lg-4 col-md-4">
                <div class="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.image
                    }`}
                    alt={item?.alt_tag}
                    width="130"
                    class="img-fluid m-auto"
                  />
                  <div class="review-info-content mt-2">
                    <p class="mb-4">{item?.review_description}</p>
                  </div>
                  <Link
                    to={item?.link_url}
                    class="link-with-icon p-0 mt-auto text-decoration-none text-warning"
                  >
                    {item?.link_text} <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style3;
