import React from "react";
import { Link } from "react-router-dom";

const Style2 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="cta-section bg-dark ptb-60 position-relative overflow-hidden">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 col-md-12">
            <div class="position-relative z-5">
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
              {data?.button_url && (
                <Link to={data?.button_url} class="btn btn-primary mt-4">
                  {data?.button_text}
                </Link>
              )}
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="row align-items-center justify-content-center position-relative z-2">
              <div class="col-md-6">
                {data?.steps?.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    class="cta-card rounded-custom text-center shadow p-5 bg-white my-4"
                  >
                    <h3 class="display-5 fw-bold">{item?.step_title}</h3>
                    <p class="mb-0">{item?.step_description}</p>
                  </div>
                ))}
              </div>
              <div class="col-md-6">
                {data?.steps?.slice(2, 3).map((item, idx) => (
                  <div
                    key={idx}
                    class="cta-card rounded-custom text-center shadow p-5 bg-white"
                  >
                    <h3 class="display-5 fw-bold">{item?.step_title}</h3>
                    <p class="mb-0">{item?.step_description}</p>
                  </div>
                ))}
              </div>
              <div class="bg-circle rounded-circle position-absolute z--1">
                <img
                  src={`${assetRoute}/assets/img/shape/blob.svg`}
                  alt="feature image"
                  class="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-30"></div>
        <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5"></div>
      </div>
    </section>
  );
};

export default Style2;
