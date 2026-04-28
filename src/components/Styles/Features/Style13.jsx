import React from "react";
import { Link } from "react-router-dom";

const Style13 = ({ data }) => {
  return (
    <section class="payment-counter payment-counter-bg ptb-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 order-last order-md-first">
            <div class="card-shape position-relative">
              <div class="card-img mt-5 mt-lg-0">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="img-fluid"
                />
              </div>
              <ul class="list-unstyled m-0">
                {data?.step_data?.map((item, idx) => (
                  <li>
                    <div class="counter-circle">
                      <h4 class="text-danger m-0">{item?.step_title}</h4>
                      <small>{item?.step_sub_title}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="payment-counter-right">
              <h2 class="mb-4">{data?.title}</h2>
              <div class="mb-3">
                <h5 class="mb-2 h6">{data?.sub_title1}</h5>
                <p class="m-0">{data?.description1}</p>
              </div>
              <div class="">
                <h5 class="mb-2 h6">{data?.sub_title2}</h5>
                <p class="m-0">{data?.description2}</p>
              </div>
              {data?.button_url && (
                <Link to={data?.button_url} class="btn-gradient-sqr mt-40">
                  {data?.button_text}{" "}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style13;
