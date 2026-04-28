import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";

const Style26 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

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
      <section class="feature-section ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div
                class="section-heading text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h4 class="text-primary h5">{data?.subtitle}</h4>
                <h2>{data?.title}</h2>
                <p>{data?.description} </p>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            {data?.step_data.map((item, idx) => (
              <div class="col-lg-4 col-md-6">
                <div
                  class="position-relative aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div class="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                    <div class=" d-inline-block  mb-40">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        className="img-fluid"
                      />
                    </div>
                    <h3 class="h5">{item?.step_title}</h3>
                    <p class="mb-0">{item?.step_description}</p>
                  </div>
                  <div class="dot-shape-bg position-absolute z--1 left--40 top--40">
                    <img
                      src={`${assetRoute}/assets/img/shape/dot-big-square.svg`}
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style26;
