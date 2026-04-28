import React from "react";

const Style4 = ({ data }) => {
  return (
    <section class="feature-section soft-bg ptb-120">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="feature-subtitle">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
            <div class="row mt-5">
              {data?.step_data?.map((item, idx) => (
                <div class="col-12 col-md-6">
                  <h6 class="fw-bold display-5 text-primary mb-4">
                    {item?.step_title}
                  </h6>
                  <h3 class="h5">{item?.step_subtitle}</h3>
                  <p>{item?.step_description}</p>
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-6 col-md-10">
            <div class="feature-img mt-5 mt-lg-0">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.image
                }`}
                alt={data?.image_alt_tag}
                class="img-fluid rounded-custom "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style4;
