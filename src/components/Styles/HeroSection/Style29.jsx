import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style29 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div class="agency-home-hero ah-bg pt-160 position-relative overflow-hidden">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-xl-10">
              <div class="agency-home-hero__content text-end">
                <h1 class="agency-home-hero__content__title display-3 fw-semibold hd-hero-title clr-text">
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
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-6 col-xl-5">
              <div class="agency-home-hero__img-box position-relative">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="agency-home-hero__img-box__img w-100"
                />
              </div>
            </div>
            <div class="col-xxl-6 col-xl-7">
              <div class="agency-home-hero__bottom-content pl-100">
                <p class="agency-home-hero__des mt-40 mb-40">
                  {data?.banner_description}
                </p>
                <div class="design-agency-two-hero__btn-box d-flex align-items-center flex-wrap gap-10 mb-80">
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
                      onClick={() =>
                        data?.video_button_url && setShowVideo(true)
                      }
                      class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn-dat mt-lg-0 mt-md-0 clr-text"
                    >
                      <i class="fas fa-play"></i> {data?.video_button_text}{" "}
                    </Link>
                  )}
                </div>
              </div>
              <div class="ah-conunter">
                <div class="row">
                  {data?.step_data.map((item, idx) => (
                    <div class="col-sm-4" key={idx}>
                      <h3 class="ah-conunter-title clr-text">
                        <span class="ah-count">{item?.step_title}</span>
                      </h3>
                      <p class="ah-counter-des">{item?.step_sub_title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image1}`}
          alt={data?.image1_alt_tag}
          class="hero_shape position-absolute left-0 top--100"
        />
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

export default Style29;
