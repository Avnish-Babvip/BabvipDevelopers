import React from "react";
import { Link } from "react-router-dom";

const Style2 = ({ data }) => {
  return (
    <section class="integration-section bg-light-subtle ptb-80">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-7 col-md-12">
            <div class="section-heading">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="text-lg-end mb-5 mb-lg-0">
              <Link
                to={data?.button_url}
                target="_blank"
                class="btn btn-primary"
              >
                {data?.button_text}
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="integration-wrapper position-relative w-100">
              <ul class="integration-list list-unstyled mt-5">
                {data?.step_data?.map((item, idx) => (
                  <li>
                    <div class="single-integration">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="img-fluid"
                      />
                      <h6 class="mb-0 mt-4">{item?.step_title}</h6>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style2;
