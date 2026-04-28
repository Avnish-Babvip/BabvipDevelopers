import React from "react";

const Style4 = ({ data }) => {
  return (
    <section class="work-process pt-40 ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 col-md-12 order-1 order-lg-0">
            <div class="img-wrap">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul class="work-process-list list-unstyled">
              {data?.step_data?.map((item, idx) => (
                <li class="d-flex align-items-start mb-4">
                  <div class="process-icon-2 bg-white me-4 mt-2">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class=""
                    />
                  </div>
                  <div class="icon-content">
                    <span class="text-primary h6">{item?.step_title}</span>
                    <h3 class="h5 mb-2">{item?.step_subtitle}</h3>
                    <p>{item?.step_description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style4;
