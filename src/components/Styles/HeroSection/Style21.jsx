import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style21 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section
        class="mk-hero-section bg-white position-relative overflow-hidden"
        style={{
          "background-image": `url('${assetRoute}/assets/img/shape/mk-hero-curve.svg')`,
        }}
      >
        <span class="mk-hero-rectangle-shape position-absolute"></span>
        <img
          src={`${assetRoute}/assets/img/shape/mk-hero-circle-line.png`}
          alt="circle line"
          class="position-absolute start-0 w-100 mk-hero-circle-line"
        />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-7">
              <div class="mk-title">
                <h1 class="display-4 fw-bold mk-title text-white">
                  {data?.banner_title}{" "}
                  <mark class="bg-transparent p-0">
                    {data?.highlighted_title}
                  </mark>
                </h1>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="mk-hero-content">
                <p class="mb-4 text-white">{data?.banner_description}</p>
                <div class="d-flex align-items-center mk-btn-group flex-wrap">
                  {data?.button_text && (
                    <Link to={data?.button_url} class="ins-btn mk-white-btn">
                      {data?.button_text}
                    </Link>
                  )}
                  {data?.video_button_text && (
                    <Link
                      onClick={() =>
                        data?.video_button_url && setShowVideo(true)
                      }
                      class="mk-hero-play fw-bold popup-youtube"
                    >
                      <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-white me-2">
                        <i class="fas fa-play"></i>
                      </span>{" "}
                      {data?.video_button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mk-hero-dashboard text-md-center position-relative mt-60 position-relative">
                <span class="mk-gradient-hero-shape position-absolute rounded-circle"></span>
                <span class="mk-secondary-gradient-shape position-absolute rounded-circle"></span>
                <img
                  src={`${assetRoute}/assets/img/shape/mk-doted.png`}
                  alt="doted"
                  class="mk-hero-doted position-absolute"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="dashboard-sm d-none d-sm-block"
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

export default Style21;
