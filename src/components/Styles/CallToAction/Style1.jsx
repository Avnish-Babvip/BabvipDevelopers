import React from "react";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="cta-with-feature ptb-120">
      <div class="container">
        <div class="bg-dark text-white rounded-custom position-relative">
          <div class="row">
            <div class="col-lg-7 col-md-10">
              <div class="cta-with-feature-wrap p-5">
                <h2>{data?.title}</h2>
                <ul class="cta-feature-list list-unstyled d-flex flex-wrap list-two-col mb-0 mt-3">
                  {data?.steps?.map((item, idx) => (
                    <li key={idx} class="d-flex align-items-center py-1">
                      <i class="fas fa-check-circle me-2 text-warning"></i>{" "}
                      {item?.step_title}
                    </li>
                  ))}
                </ul>
                <div class="action-btns mt-5">
                  {data?.button_url1 && (
                    <Link to={data?.button_url1} class="btn btn-primary me-3">
                      {data?.button_text1}
                    </Link>
                  )}
                  {data?.button_url2 && (
                    <Link to={data?.button_url2} class="btn btn-outline-light">
                      {data?.button_text2}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-5">
              <img
                src={`${assetRoute}/assets/img/shape/dot-shape-color.svg`}
                alt=""
                class="dot-shape-img position-absolute z-1 pt-5 img-fluid"
              />
              <div class="shape-img position-absolute d-none d-lg-block top--40 right--40">
                <img
                  src={`${assetRoute}/assets/img/shape/paper-plane.png`}
                  alt="paper-plane"
                />
              </div>
              <div
                class="software-uikit h-100 z-2 position-relative"
                style={{
                  "background-image": `url(${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${data?.image})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
