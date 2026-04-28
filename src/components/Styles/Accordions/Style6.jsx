import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  return (
    <>
      <section class="faq-section ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div
                class="section-heading text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h4 class="h5 text-primary">{data?.sub_title}</h4>
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            {data?.step_data.map((item, idx) => (
              <div class="col-lg-6 col-md-10">
                <div
                  class="faq-content-wrap d-flex mb-5 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <span class="faq-icon me-3">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_alt_tag}
                    />
                  </span>
                  <div class="faq-info">
                    <h5>{item?.step_title}</h5>
                    <p class="mb-0">{item?.step_description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="container">
          <div
            class="bg-dark shadow-lg p-5 rounded-custom mt-lg-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-7">
                <div class="cta-content">
                  <h3 class="mb-2">{data?.bottom_title}</h3>
                  <p class="mb-lg-0 mb-xl-0">{data?.bottom_description}</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="text-lg-end">
                  {data?.button_url && (
                    <Link to={data?.button_url} class="btn btn-secondary">
                      {data?.button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
