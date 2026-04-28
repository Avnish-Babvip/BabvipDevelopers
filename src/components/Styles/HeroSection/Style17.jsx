import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style17 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat
                center center / cover`,
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-10">
              <div class="payment-gateway-text">
                <h1 class="display-5 text-white fw-bold mb-3">
                  {data?.banner_title}
                  <span class="gr-text fw-bold">Fintech</span>
                </h1>
                <p class="text-white m-0">{data?.banner_description}</p>
                <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  {data?.button_text && (
                    <Link to={data?.button_url} class="btn-gradient-sqr me-3">
                      {data?.button_text}
                    </Link>
                  )}
                  {data?.video_button_text && (
                    <Link
                      onClick={() =>
                        data?.video_button_url && setShowVideo(true)
                      }
                      class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                    >
                      <i class="fas fa-play"></i>
                      {data?.video_button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="payment-hero-img pt-120 text-center text-lg-end position-relative">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image1
                  }`}
                  alt={data?.banner_image_2_alt_tag}
                  class="img-fluid h-shape"
                />
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

export default Style17;
