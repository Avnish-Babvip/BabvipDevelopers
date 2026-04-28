import React from "react";
import { Link } from "react-router-dom";

const Style11 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="crm-cta-section ptb-80 crm-bg-yellow-light position-relative z-1">
      <img
        src={`${assetRoute}/assets/img/shape/circle-half.png`}
        alt="circle half"
        class="position-absolute circle-half z--1"
      />
      <img
        src={`${assetRoute}/assets/img/shape/dot-red.png`}
        alt="doted"
        class="position-absolute doted z--1 d-none d-md-block"
      />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7">
            <div class="crm-title text-center">
              <span class="crm-subtitle">
                {data?.title}{" "}
                <img
                  src={`${assetRoute}/assets/img/shape/arrow-red.png`}
                  alt="arrow"
                  class="ms-1"
                />
              </span>
              <h2 class="mt-2 mb-3 clr-text">{data?.sub_title}</h2>
              <p class="mb-0">{data?.description} </p>
              {data?.button_text && (
                <Link to={data?.button_url} class="btn crm-primary-btn mt-40">
                  {data?.button_text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style11;
