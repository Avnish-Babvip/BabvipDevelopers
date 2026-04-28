import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  return (
    <section
      class="hero-section ptb-custom-120  d-flex align-items-center bg-dark text-white position-relative overflow-hidden"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        }) no-repeat bottom right`,
      }}
    >
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="hero-content-wrap">
              <h5 class="text-warning">{data?.banner_subtitle}</h5>
              <h1 class="fw-bold display-5">{data?.banner_title}</h1>
              <p class="lead">{data?.banner_description}</p>
              <div class="action-btns mt-5">
                {data?.button_text1 && (
                  <Link to={data?.button_url1} class="btn btn-primary me-3">
                    {data?.button_text1}
                  </Link>
                )}
                {data?.button_text2 && (
                  <Link to={data?.button_url2} class="btn btn-outline-light">
                    {data?.button_text2}
                  </Link>
                )}
              </div>
            </div>
            <div class="row justify-content-lg-start mt-60">
              <h6 class="text-white-70 mb-2">Our Top Clients:</h6>
              {data?.top_client_image?.map((item, idx) => (
                <div key={idx} class="col-4 col-sm-3 my-2 ps-lg-0">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.top_client_image
                    }`}
                    alt={item?.icon_alt_tag}
                    class="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-6 col-md-8 mt-5 mt-lg-0">
            <div class="animated-img-wrap">
              <ul class="animate-element parallax-element animated-hero-1">
                <li class="layer" data-depth="0.02">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image1
                    }`}
                    alt={data?.banner_image1_alt_tag}
                    class="img-fluid position-absolute type-0"
                  />
                </li>
              </ul>
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image2
                }`}
                alt={data?.banner_image2_alt_tag}
                class="position-relative img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style6;
