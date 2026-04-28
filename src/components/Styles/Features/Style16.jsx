import React from "react";
import { Link } from "react-router-dom";

const Style16 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="mk-business bg-white">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-xl-7">
              <div class="mk-business-pr position-relative">
                <img
                  src={`${assetRoute}/assets/img/shape/mk-doted-lg.png`}
                  alt="not found"
                  class="position-absolute mk-doted-lg"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-xl-5">
              <div class="mk-business-content">
                <h3 class="mk-heading mb-3">{data?.title}</h3>
                <p class="mb-30">{data?.description1}</p>
                <ul class="mk-business-reports p-0">
                  {data?.step_data?.map((item, idx) => (
                    <li class="d-flex align-items-start mk-bg-secondary">
                      <span class=" d-inline-flex align-items-center justify-content-center rounded flex-shrink-0">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          className="img-fluid object-fit-contain p-0"
                        />
                      </span>
                      <div class="ms-4">
                        <h6 class="mk-heading mb-2">{item?.step_title}</h6>
                        <p class="mb-0">{item?.step_description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mk-sass-platform bg-white pt-120 pt-xl-0">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-5">
              <div class="mk-sass-content">
                <span class="mk-subtitle mb-3 fw-bold">{data?.sub_title}</span>
                <h3 class="mk-heading lh-lg mb-3">{data?.title1}</h3>
                <p class="mb-0">{data?.description2}</p>
                {data?.button_url && (
                  <Link to={data?.button_url} class="btn btn-primary mt-40">
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
            <div class="col-xl-6">
              <div class="mk-sass-dashboard mt-4 mt-xl-0">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style16;
