import React from "react";
import { Link } from "react-router-dom";

const Style10 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <div class="position-relative pt-80">
        <div
          class="game-cta-bg rounded-top px-4 px-md-0 ps-md-5 pt-80"
          style={{
            background: `url('${assetRoute}/assets/img/Minecraft.png') no-repeat center center/cover
              `,
          }}
        >
          <div class="row">
            <div class="col-lg-5 col-md-8">
              <div class="game-cta-content">
                <h3 class="text-white mb-3">{data?.title}</h3>
                <p class="text-off-white">{data?.description}</p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="game-btn-mdm mt-4 text-white"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
            <div class="col-lg-7">
              <div class="game-img text-lg-end mt-5 mt-lg-0">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="text-end img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style10;
