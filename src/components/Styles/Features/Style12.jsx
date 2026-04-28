import React from "react";
import { Link } from "react-router-dom";

const Style12 = ({ data }) => {
  return (
    <section class="ptb-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-left text-lg-center mb-32 mb-lg-0">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-right">
              <h4 class="text-primary h5 mb-3">{data?.sub_title}</h4>
              <h2 class="mb-4">{data?.title}</h2>
              <p>{data?.description}</p>
              <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li class="py-1">
                  <div class="d-flex about-icon-box align-items-center">
                    <div class="me-3">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          data?.image1
                        }`}
                        alt={data?.image1_alt_tag}
                      />
                    </div>
                    <div>
                      <h5> {data?.image_1_title}</h5>
                    </div>
                  </div>
                </li>
                <li class="py-1">
                  <div class="d-flex about-icon-box align-items-center">
                    <div class="me-3">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          data?.image2
                        }`}
                        alt={data?.image2_alt_tag}
                      />
                    </div>
                    <div>
                      <h5>{data?.image_2_title}</h5>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                {data?.step_data?.map((item, idx) => (
                  <li class="py-1">
                    <i class="fas fa-check-circle me-2 text-primary"></i>
                    {item?.step_title}
                  </li>
                ))}
              </ul>
              {data?.button_url && (
                <Link
                  to={data?.button_url}
                  class="link-with-icon text-decoration-none mt-3 btn btn-primary"
                >
                  {data?.button_text}
                  <i class="fas fa-arrow-right"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style12;
