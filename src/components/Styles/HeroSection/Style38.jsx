import React from "react";

const Style38 = ({ data }) => {
  return (
    <section
      class="game-counter-bg"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        })`,
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="content pt-100">
              <h2 class="text-white mb-4">{data?.title}</h2>
              <p class="text-white mb-4">{data?.description}</p>
            </div>
            <div class="row counter-grid pt-1">
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-white">
                  <h4 class="text-white">{data?.step1_title}</h4>
                  <p>{data?.step1_sub_title}</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-white">
                  <h4 class="text-white">{data?.step2_title}</h4>
                  <p>{data?.step2_sub_title}</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-white">
                  <h4 class="text-white">{data?.step3_title}</h4>
                  <p>{data?.step3_sub_title}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="game-counter-img mt-4">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style38;
