import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  return (
    <>
      <section class="mk-integration bg-white  pt-0 pb-0 pt-md-5 pb-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="mk-title text-center">
                <span class="mk-subtitle fw-bold">{data?.sub_title}</span>
                <h2 class="mk-heading mb-0 mt-3">{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center g-4">
              {data?.step_data.map((item, idx) => (
                <div class="col-xxl-3 col-xl-4 col-md-6">
                  <div class="mk-app-single d-flex align-items-center p-3">
                    <span class=" d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded ">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                        class="img-fluid"
                      />
                    </span>
                    <div class="ms-3">
                      <h6 class="mk-heading mb-1">{item?.step_title}</h6>
                      <p class="mb-0 fs-sm">{item?.short_description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p class="text-center mb-0 mt-40">
              {data?.bottom_tagline}
              {/* <Link to="#" class="text-mk-secondary fw-bold">
             
              </Link> */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
