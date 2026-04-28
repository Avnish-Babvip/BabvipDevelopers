import React from "react";

const Style6 = ({ data }) => {
  return (
    <section class="feature-section two-bg-dark-light ptb-120">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6 col-md-6">
            <div class="image-wrap">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.image
                }`}
                alt={data?.image_alt_tag}
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="feature-content-wrap">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
              <ul class="list-unstyled mt-5">
                {data?.step_data?.map((item, idx) => (
                  <li class="d-flex align-items-start mb-4">
                    <div class="icon-box  rounded me-4">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class=" p-0"
                      />
                    </div>
                    <div class="icon-content">
                      <h3 class="h5">{item?.step_title}</h3>
                      <p>{item?.step_description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style6;
