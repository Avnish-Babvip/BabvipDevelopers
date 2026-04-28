import React from "react";
import { Link } from "react-router-dom";

const Style10 = ({ data }) => {
  return (
    <section
      class="app-two-download-cta ptb-custom-120"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        }) no-repeat
    center center / cover`,
      }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-xl-6 col-md-10">
            <div class="section-heading text-center">
              <h2 class="text-white">{data?.title}</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-7 col-12">
            <div class="action-btns mt-3">
              <ul class="list-unstyled text-center">
                <li class="d-inline-block me-2 mb-lg-0">
                  <Link
                    class="
                    d-flex
                    align-items-center
                    text-decoration-none
                    rounded
                    active
                  "
                    to={data?.icon_1_url}
                  >
                    <i class="fab fa-apple pe-2"></i>
                    <span>
                      Available on the <span>App Store</span>
                    </span>
                  </Link>
                </li>
                <li class="d-inline-block me-2 mb-lg-0">
                  <Link
                    class="d-flex align-items-center text-decoration-none rounded"
                    to={data?.icon_2_url}
                  >
                    <i class="fab fa-google-play pe-2"></i>
                    <span>
                      Available on the <span>Google Play</span>
                    </span>
                  </Link>
                </li>
                <li class="d-inline-block mb-lg-0">
                  <Link
                    class="d-flex align-items-center text-decoration-none rounded"
                    to={data?.icon_3_url}
                  >
                    <i class="fab fa-windows pe-2"></i>
                    <span>
                      Available on the <span>Google Play</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style10;
