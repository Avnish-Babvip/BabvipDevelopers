import React from "react";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  return (
    <section
      class="app-two-cta ptb-120 text-white bg-purple"
      style={{
        "background-image": `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        })`,
      }}
    >
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6 col-xl-6">
            <div class="app-two-mockup position-relative text-center pe-5">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt}
                class="img-fluid position-relative z-5"
              />
            </div>
          </div>
          <div class="col-lg-6 col-xl-6 col-md-10">
            <div class="app-two-cta-right px-md-0 pt-5 pt-md-0">
              <div class="section-heading text-white">
                <h2 class="text-white">{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
              <div class="cta-count">
                <ul class="list-unstyled d-flex">
                  {data?.step_data?.map((item, idx) => (
                    <li class="me-4">
                      <h3 class="text-white mb-0">{item?.step_title}</h3>
                      <span>{item?.step_sub_title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="action-btns mt-5">
                {data?.button_text && (
                  <Link to={data?.button_url} class="btn btn-outline-light">
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style9;
