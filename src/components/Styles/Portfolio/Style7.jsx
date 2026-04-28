import React from "react";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  return (
    <div class="ca-two-portfolio-area ptb-60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                data?.image1
              }`}
              alt={data?.image1_alt_tag}
              class="ca-two-pf-img img-fluid"
            />
          </div>
          <div class="col-lg-6">
            <div class="pl-40">
              <h6 class="ca-two-subtitle ca-two-body-clr-two d-flex align-items-center">
                <span class="bg-black"></span>
                {data?.subtitle}
              </h6>
              <h2 class="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20 mt-20">
                {data?.title}
              </h2>
              <p class="ca-two-body-clr flh-24 fch-55 mb-0">
                {data?.description}
              </p>
              <div class="ca-two-btn-area d-flex align-items-center gap-10  mt-50">
                {data?.button_url && (
                  <Link
                    to={data?.button_url}
                    class="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover-two"
                  >
                    {data?.button_text}
                  </Link>
                )}
                {data?.link_url && (
                  <Link
                    to={data?.link_url}
                    class="ca-two-call-btn ca-two-body-clr-two d-flex align-items-center gap-5"
                  >
                    <h6 class="fw-500 fs-20">{data?.link_text}</h6>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style7;
