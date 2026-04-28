import React from "react";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  return (
    <section class="cyber-features pt-100 bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="section-heading text-center mb-5">
              <h5 class="h6 text-primary">{data?.sub_title}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          {data?.step_data.map((item, idx) => (
            <div class="col-lg-4">
              <div class="cyber-single-service bg-white rounded-custom mb-30">
                <div class="feature-icon pb-5 rounded  text-primary mb-4">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image
                    }`}
                    alt={item?.step_image_alt_tag}
                    class="img-fluid"
                  />
                </div>
                <div class="cyber feature-info-wrap">
                  <h3 class="h5">{item?.step_title}</h3>
                  <p>{item?.step_description}</p>
                </div>
                {item?.step_button_text && (
                  <Link
                    to={item?.step_button_url}
                    target="_blank"
                    class="link-with-icon text-decoration-none"
                  >
                    {item?.step_button_text} <i class="fas fa-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Style7;
