import React from "react";
import { Link } from "react-router-dom";

const Style36 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="digi-services pt-40 pb-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <div>
                  <span class="span-arrow">{data?.sub_title}</span>
                  <img
                    src={`${assetRoute}/assets/img/arro-right.svg`}
                    alt="arrow"
                  />
                </div>
                <h2>
                  {data?.title}{" "}
                  <span class="text-orange">{data?.highlighted_title}</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            {data?.step_data.map((item, idx) => (
              <div class="col-lg-6 col-md-6 col-xl-3">
                <div class="digi-service-single bg-white p-4 mb-4 mb-xl-0">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.step_image
                    }`}
                    alt={item?.step_image_icon_alt_tag}
                  />
                  <h3 class="h5">{item?.step_title}</h3>
                  <p>{item?.step_description}</p>
                  {item?.link_text && (
                    <Link
                      to={item?.link_url}
                      target="_blank"
                      class="read-more-link text-decoration-none"
                    >
                      {item?.link_text} <i class="fas fa-arrow-right ms-2"></i>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style36;
