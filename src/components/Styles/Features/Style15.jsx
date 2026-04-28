import React from "react";
import { Link } from "react-router-dom";

const Style15 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="mk-feature-section pt-5 pt-lg-0 pb-40 bg-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5">
            <div class="mk-title text-center">
              <span class="mk-subtitle fw-bold">{data?.sub_title}</span>
              <h2 class="mt-3 mb-0 mk-heading">{data?.title}</h2>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-4 col-lg-7">
              <div class="mk-feature-content">
                <h3 class="mk-heading mb-3 lh-lg">{data?.title1}</h3>
                <p class="mb-30">{data?.description}</p>
                <Link to={data?.link_url} class="mk-explore-btn fw-bold">
                  {data?.link_text}
                  <span class="ms-1">
                    <svg
                      width="53"
                      height="8"
                      viewBox="0 0 53 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4.00049L48.7939 4.00049"
                        stroke="#FF724B"
                        stroke-width="0.995794"
                      ></path>
                      <path
                        d="M52.7742 3.99978L46.7994 7.44931L46.7994 0.550246L52.7742 3.99978Z"
                        fill="#FF724B"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="mk-feature-dashboard position-relative mt-5 mt-xl-0">
                <img
                  src={`${assetRoute}/assets/img/shape/mk-doted.png`}
                  alt="doted"
                  class="position-absolute mk-feature-dot"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style15;
