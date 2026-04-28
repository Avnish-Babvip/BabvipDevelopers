import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

const Style27 = ({ data }) => {
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
      <section class="feature-section pt-60 pb-120">
        <div class="container">
          <div class="row align-items-lg-center justify-content-between">
            <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
              <div class="mb-4 " data-aos="fade-up">
                <h2>{data?.title}</h2>
                <p>{data?.description} </p>
              </div>
              <ul
                class="list-unstyled d-flex flex-wrap list-two-col mt-5 "
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {data?.step_data.map((item, idx) => (
                  <li>
                    <span class="d-block mb-4">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                      />
                    </span>
                    <h3 class="h5">{item?.step_title}</h3>
                    <p>{item?.step_description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="pr-lg-4">
                <div
                  class="bg-light-subtle text-center rounded-custom overflow-hidden p-lg-5 p-3 mx-lg-auto "
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image
                    }`}
                    alt={data?.image_alt_tag}
                    class="img-fluid"
                  />
                  <div class="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style27;
