import React from "react";

const Style38 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="mk-about-section bg-white pt-60 pb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-8">
              <div class="mk-title text-center">
                <span class="fw-bold mk-subtitle">{data?.sub_title}</span>
                <h2 class="mt-3 mb-0 mk-heading">{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="mt-5 position-relative mk-sf-bottom">
            <div class="row justify-content-center g-4">
              {data?.step_data.map((item, idx) => (
                <div class="col-xl-4 col-lg-6">
                  <div class="mk-sf-item bg-white">
                    <span class="icon-wrapper d-inline-flex align-items-center justify-content-center rounded">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="img-fluid"
                      />
                    </span>
                    <h4 class="mk-heading mb-3 mt-4">{item?.step_title}</h4>
                    <p class="mb-0">{item?.step_description} </p>
                  </div>
                </div>
              ))}
            </div>

            <img
              src={`${assetRoute}/assets/img/shape/mk-wave.png`}
              alt="wave"
              class="position-absolute mk-wave"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Style38;
