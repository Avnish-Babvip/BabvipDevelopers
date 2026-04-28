import React from "react";

const Style27 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <div class="design-agency-hero bg-design-agency position-relative">
        <img
          src={`${assetRoute}/assets/img/design-agency/line_shape.png`}
          alt=""
          class="position-absolute w-100 shape_one"
        />
        <img
          src={`${assetRoute}/assets/img/design-agency/shape_three.png`}
          alt=""
          class="position-absolute shape_three"
        />
        <img
          src={`${assetRoute}/assets/img/design-agency/shape_four.png`}
          alt=""
          class="position-absolute shape_four"
        />
        <img
          src={`${assetRoute}/assets/img/design-agency/shape_five.png`}
          alt=""
          class="position-absolute shape_five"
        />
        <img
          src={`${assetRoute}/assets/img/design-agency/shape_six.png`}
          alt=""
          class="position-absolute shape_six"
        />
        <img
          src={`${assetRoute}/assets/img/design-agency/shape_seven.png`}
          alt=""
          class="position-absolute shape_seven"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center position-relative z-5">
                <h1 class="design-agency-hero__title clr-white">
                  {data?.banner_title}
                </h1>
                <h2 class="design-agency-hero__title title-2 clr-white margin-bottom-20">
                  {data?.sub_title}
                </h2>
                <div class="design-agency-hero__img-box position-relative">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_image_alt_tag}
                    class="design-agency-hero__img position-relative"
                  />
                  <img
                    src={`${assetRoute}/assets/img/design-agency/hero_shape.png`}
                    alt=""
                    class="shape position-absolute"
                  />
                  <img
                    src={`${assetRoute}/assets/img/design-agency/shape_two.png`}
                    alt=""
                    class="shape_two position-absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style27;
