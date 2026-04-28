import React from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style3 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="cta-with-subscribe ptb-120">
      <div class="container">
        <div class="bg-dark text-white rounded-custom position-relative">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 col-md-10">
              <div class="cta-with-feature-wrap p-5">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
                <SubscribeForm buttonText="Subscribe" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="img-with-shape-wrap">
                <div class="shape-top position-absolute top--40 z-2 right--40">
                  <img
                    src={`${assetRoute}/assets/img/shape/circel-shape-top-1.png`}
                    alt="shape"
                  />
                </div>
                <div class="shape-image">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image
                    }`}
                    alt={data?.image_alt_tag}
                    class="img-fluid screen-img"
                  />
                </div>

                <div class="shape-bottom">
                  <img
                    src={`${assetRoute}/assets/img/shape/circel-shape-bottom-1.png`}
                    alt="shape"
                  />
                  <img
                    src={`${assetRoute}/assets/img/shape/circel-shape-bottom-2.png`}
                    alt="shape"
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

export default Style3;
