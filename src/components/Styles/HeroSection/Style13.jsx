import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style13 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        class="hero-it-solution hero-nine-bg ptb-custom-120"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat center center`,
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-10">
              <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 class="fw-bold display-5">{data?.banner_title}</h1>
                <p class="lead">{data?.banner_description}</p>
                <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  {data?.button_text && (
                    <Link to={data?.button_url} class="btn btn-primary me-3">
                      {data?.button_text}
                    </Link>
                  )}
                  {data?.video_button_text && (
                    <Link
                      onClick={() =>
                        data?.video_button_url && setShowVideo(true)
                      }
                      class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 text-primary"
                    >
                      <i class="fas fa-play text-primary border-2 border-primary"></i>
                      {data?.video_button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-img position-relative mt-5 mt-lg-0">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="img-fluid"
                />
                <div class="dots">
                  <img
                    src={`${assetRoute}/assets/img/banner_dot.png`}
                    alt="dot"
                    class="dot-1"
                  />
                  <img
                    src={`${assetRoute}/assets/img/banner_dot.png`}
                    alt="dot"
                    class="dot-2"
                  />
                </div>
                <div class="bubble">
                  <span class="bubble-1"></span>
                  <span class="bubble-2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showVideo && (
        <VideoModal
          videoUrl={data?.video_button_url}
          setShowVideo={setShowVideo}
        />
      )}
    </>
  );
};

export default Style13;
