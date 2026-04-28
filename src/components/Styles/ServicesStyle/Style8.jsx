import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";

const Style8 = ({ data }) => {
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
    <section class="promo-section ptb-120 bg-light-subtle ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-6">
            <div class="section-heading text-center " data-aos="fade-up">
              <h2>{data?.title}</h2>
              <p>{data?.description} </p>
            </div>
          </div>
        </div>
        <div class="row">
          {data?.step_data.map((item, idx) => (
            <div class="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0">
              <div
                class="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="promo-card-info mb-4">
                  <h3 class="display-5 fw-bold mb-4">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_alt_tag}
                      className="me-2"
                    />
                    {item?.step_title}
                  </h3>
                  <p>{item?.step_description} </p>
                </div>
                <div class="mt-auto">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image_icon
                    }`}
                    alt={item?.step_image_icon_alt_tag}
                    width="120"
                    class="img-fluid me-auto customer-logo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Style8;
