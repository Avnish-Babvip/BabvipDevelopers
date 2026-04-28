import React from "react";
import { Link } from "react-router-dom";

const Style3 = ({ data }) => {
  return (
    <section class="feature-section ptb-120 bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="feature-grid">
              {data?.service_data?.map((item, idx) => (
                <div class="feature-card border border-light border-2 rounded-custom p-5">
                  <div class="rounded mb-2 d-flex align-items-center">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.service_image_icon
                      }`}
                      class="me-3"
                    />
                    <h3 class="h5 mb-0">{item?.service_title}</h3>
                  </div>
                  <div class="feature-content">
                    <p class="mb-0">{item?.service_description}</p>
                  </div>
                  <Link
                    to={item?.link_url}
                    class="link-with-icon text-decoration-none mt-4"
                  >
                    {item?.link_text} <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
