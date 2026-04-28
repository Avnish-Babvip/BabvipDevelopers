import React from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style23 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="hd-hero-section position-relative z-1 overflow-hidden">
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_image
          }`}
          alt={data?.banner_1_image_alt_tag}
          class="position-absolute hd-hero-man"
        />
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image1}`}
          alt={data?.image1_alt_tag}
          class="position-absolute hd-hero-girl"
        />
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image2}`}
          alt={data?.image2_alt_tag}
          class="position-absolute desk-girl"
        />
        <img
          src={`${assetRoute}/assets/img/shape/line-plan.png`}
          alt="line shape"
          class="position-absolute line-plan z--1"
        />
        <img
          src={`${assetRoute}/assets/img/shape/arrow-line-shape.png`}
          alt="arrow line shape"
          class="position-absolute arrow-line-shape z--1 d-none d-sm-block"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="hd-hero-content text-center">
                <h1 class="display-3 fw-semibold hd-hero-title clr-text">
                  {data?.banner_title}{" "}
                  <mark class="bg-transparent p-0">
                    {data?.highlighted_title}{" "}
                    <img
                      src={`${assetRoute}/assets/img/shape/line-shape.png`}
                      alt="line shape"
                      class="position-absolute hd-line-shape"
                    />
                  </mark>
                </h1>
                <p class="mt-40 mb-5">{data?.subscription_title}</p>
                <SubscribeForm buttonText="Subscribe" />
                <ul class="crm-special-features list-unstyled p-0 m-0 d-flex align-items-center justify-content-center flex-wrap mt-4">
                  <li>
                    <span class="dot me-2"></span>
                    {data?.step_text1}
                  </li>
                  <li>
                    <span class="dot me-2"></span>
                    {data?.step_text2}
                  </li>
                  <li>
                    <span class="dot me-2"></span>
                    {data?.step_text3}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style23;
