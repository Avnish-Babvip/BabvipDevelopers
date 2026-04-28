import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style28 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div class="design-agency-two-hero dat-bg pt-160 position-relative overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-shape position-relative">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image3
                  }`}
                  alt={data?.image3_alt_tag}
                  class="position-absolute one"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image4
                  }`}
                  alt={data?.image4_alt_tag}
                  class="position-absolute two"
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-7">
              <h1 class="design-agency-two-hero__title text-center clr-text mb-30">
                {data?.banner_title}
              </h1>
              <div class="design-agency-two-hero__btn-box d-flex justify-content-center align-items-center flex-wrap gap-10 mb-80">
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn btn-dat-one clr-white"
                  >
                    {data?.button_text}
                  </Link>
                )}
                {data?.video_button_text && (
                  <Link
                    onClick={() => data?.video_button_url && setShowVideo(true)}
                    class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn-dat mt-lg-0 mt-md-0 clr-text"
                  >
                    <i class="fas fa-play"></i>
                    {data?.video_button_text}{" "}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 col-sm-12">
              <div class="design-agency-two-hero__bottom-content position-relative z-1">
                <div
                  class="design-agency-two-hero__bottom-content__icon d-flex
                            align-items-center justify-content-center"
                >
                  <img
                    src={`${assetRoute}/assets/img/design-agency/two/alarm.png`}
                    alt=""
                  />
                </div>
                <h5 class="design-agency-two-hero__bottom-content__title mt-4 clr-text">
                  {data?.bottom_title}
                </h5>
                <div class="design-agency-two-hero__bottom-content__user-box mt-4 d-flex align-items-center gap-5">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image5
                    }`}
                    alt={data?.image5_alt_tag}
                  />
                  <span class="dat-user-text">{data?.image5_title}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-sm-12">
              <div class="design-agency-two-hero__bottom-img position-relative">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="main-img"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="position-absolute hero-two"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt_tag}
                  class="position-absolute hero-three"
                />
                <img
                  src={`${assetRoute}/assets/img/design-agency/hero_shape.png`}
                  alt=""
                  class="position-absolute hero-four"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <VideoModal
          videoUrl={data?.video_button_url}
          setShowVideo={setShowVideo}
        />
      )}
    </>
  );
};

export default Style28;
