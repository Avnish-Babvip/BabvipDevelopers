import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style14 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        class="hero-section text-white hero-ten"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })`,
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-10">
              <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 class="fw-bold display-5 text-white">
                  {data?.banner_title}
                </h1>
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
                      class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                    >
                      <i class="fas fa-play"></i> {data?.video_button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-8 mt-5">
              <div class="hero-img position-relative circle-shape-images">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
          <div class="cyber-down-btn text-center position-relative d-none d-lg-block">
            <Link to="#" class="text-primary">
              <i class="fas fa-arrow-down"></i>
            </Link>
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

export default Style14;
