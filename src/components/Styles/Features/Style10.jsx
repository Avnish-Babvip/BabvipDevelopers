import React from "react";

const Style10 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="feature-section pt-60 pb-120">
      <div class="container">
        <div class="row align-items-lg-center justify-content-between">
          <div class="col-lg-5 mb-7 mb-lg-0">
            <div class="mb-4 aos-init aos-animate" data-aos="fade-up">
              <h2>{data?.title2}</h2>
              <p>{data?.description}</p>
            </div>
            <ul
              class="list-unstyled d-flex flex-wrap list-two-col mt-5 aos-init aos-animate"
              data-aos="fade-up"
            >
              {data?.step_data?.map((item, idx) => (
                <li key={idx}>
                  <span class="d-block mb-4">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      className="img-fluid object-fit-contain p-0"
                    />
                  </span>
                  <h3 class="h5">{item?.step_title}</h3>
                  <p>{item?.step_description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-lg-6">
            <div
              class="pr-lg-4 position-relative aos-init aos-animate"
              data-aos="fade-up"
            >
              <ul
                className="position-absolute animate-element parallax-element shape-service z--1 hide-medium"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <li
                  className="layer"
                  data-depth="0.03"
                  style={{
                    position: "relative",
                    display: "block",
                    left: "0px",
                    top: "0px",
                    transform: "translate3d(-16.284px, 8.87477px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={`${assetRoute}/assets/img/color-shape/image-3.svg`}
                    alt="shape"
                    className="img-fluid position-absolute color-shape-1"
                  />
                </li>

                <li
                  className="layer"
                  data-depth="0.02"
                  style={{
                    position: "absolute",
                    display: "block",
                    left: "0px",
                    top: "0px",
                    transform: "translate3d(-10.856px, 5.91651px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={`${assetRoute}/assets/img/color-shape/feature-1.svg`}
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>

                <li
                  className="layer"
                  data-depth="0.03"
                  style={{
                    position: "absolute",
                    display: "block",
                    left: "0px",
                    top: "0px",
                    transform: "translate3d(-16.284px, 8.87477px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={`${assetRoute}/assets/img/color-shape/feature-3.svg`}
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>
              <div class="bg-light-subtle text-center shadow-sm rounded-custom overflow-hidden pt-5 px-3 px-lg-5 mx-lg-auto">
                <div class="mb-5">
                  <h3 class="fw-medium h4">{data?.title}</h3>
                </div>
                <div class="position-relative w-75 mx-auto">
                  <img
                    class="position-relative z-2 w-100 h-auto"
                    src={`${assetRoute}/assets/img/screen/half-iphone.svg`}
                    alt="Image Description"
                  />
                  <img
                    class="position-absolute half-screen"
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_image_alt_tag}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style10;
