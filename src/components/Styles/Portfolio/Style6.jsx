import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <div class="ca-two-portfolio-post-area pb-250 position-relative">
      <div class="container-fluid">
        <div class="position-relative z-1">
          <img
            src={`${assetRoute}/assets/img/creative-agency-2/shape/pfp.png`}
            alt=""
            class="pfp-shape position-absolute z--1"
          />
          <div class="container">
            <div class="position-relative">
              <img
                src={`${assetRoute}/assets/img/creative-agency-2/shape/2.png`}
                alt=""
                class="shape-two position-absolute"
              />
              <h6 class="ca-two-subtitle ca-two-body-clr-two d-flex align-items-center mb-85 ca-two-pt-10">
                <span class="ca-two-bg-two"></span> {data?.subtitle}
              </h6>
              <div class="row align-items-center">
                <div class="col-xl-6">
                  <h2 class="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20">
                    {data?.title}
                  </h2>
                </div>
                <div class="col-xl-6">
                  <div class="text-end opacity-15">
                    <h1 class="ca-two-body-clr fw-500 fs-72 mb-0">
                      {data?.title2}
                    </h1>
                  </div>
                </div>
              </div>

              <div class="ca-two-pf-posts">
                <div class="row">
                  {data?.step_data?.map((item, idx) => (
                    <div class="col-md-4">
                      <Link to={`/portfolio/${item?.port_slug}`}>
                        <div class="ca-two-pf-post position-relative mt-30">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image_icon}`}
                            alt={item?.step_image_icon_alt_tag}
                            class="ca-two-pf-img img-fluid rounded-16 img-fluid"
                          />
                          <div>
                            <h6 class="ca-two-pf-cet ca-two-subtitle two ca-two-body-clr ff-dmsans d-flex ca-two-bg-five align-items-center mb-0 position-absolute z-2">
                              <span class="ca-two-bg-four"></span>
                              {item?.category}
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <svg
            width="1840"
            height="1122"
            viewBox="0 0 1840 1122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M236 0C249.255 0 260 10.7452 260 24C260 37.2548 270.745 48 284 48H436C449.255 48 460 37.2548 460 24C460 10.7452 470.745 0 484 0H1816C1829.25 0 1840 10.7452 1840 24V990V997V1098C1840 1111.25 1829.25 1122 1816 1122H1404C1390.75 1122 1380 1111.25 1380 1098V1045C1380 1031.75 1369.25 1021 1356 1021H24C10.7451 1021 0 1010.25 0 997V24C0 10.7451 10.7452 0 24 0H236Z"
              fill="#F6F6F6"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Style6;
