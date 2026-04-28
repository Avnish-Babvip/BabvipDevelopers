import React from "react";

const Style1 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="feature-section ptb-120">
      <div class="container">
        <div class="row align-content-center justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="section-heading mb-5">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
            {data?.step_data?.map((item, idx) => (
              <div key={idx} class="single-feature d-flex mb-4">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    item?.step_image
                  }`}
                  alt={item?.step_image_icon_alt_tag}
                  className=" object-fit-contain p-0"
                />
                <div class="ms-4 mt-2">
                  <h5>{item?.step_title}</h5>
                  <p>{item?.step_description} </p>
                </div>
              </div>
            ))}
          </div>
          <div class="col-lg-6 col-md-8">
            <div class="feature-shape-img position-relative mt-5 mt-lg-0">
              <div class="img-bg-shape position-absolute">
                <img
                  src={`${assetRoute}/assets/img/integations/shape.svg`}
                  alt="integations"
                />
              </div>
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.image
                }`}
                alt={data?.image_alt_tag}
                class="img-fluid skewed-img-right rounded-custom shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
