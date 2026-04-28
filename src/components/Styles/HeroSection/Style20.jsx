import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style20 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section class="ins-hero-section position-relative overflow-hidden">
        <img
          src={`${assetRoute}/assets/img/shape/gradient-rectangle-1.png`}
          alt="shape"
          class="position-absolute rectangle-shape start-0 top-0"
        />
        <img
          src={`${assetRoute}/assets/img/shape/gradient-rectangle-2.png`}
          alt="shape"
          class="position-absolute rectangle-shape end-0 top-0"
        />
        <img
          src={`${assetRoute}/assets/img/shape/ins-primary-circle.png`}
          alt="not found"
          class="position-absolute start-50 bottom-0 translate-middle-x"
        />
        <img
          src={`${assetRoute}/assets/img/shape/hero-curve.png`}
          alt="not found"
          class="position-absolute start-0 bottom-0 ins-hero-curve w-100"
        />
        <img
          src={`${assetRoute}/assets/img/shape/arrow-shape.png`}
          alt="not found"
          class="position-absolute arrow-shape d-none d-sm-block"
        />
        <span class="heart-sign bg-white position-absolute d-inline-flex align-items-center justify-content-center text-danger rounded-circle">
          <i class="fa-solid fa-heart"></i>
        </span>
        <Link
          onClick={() => data?.you_tube_url && setShowVideo(true)}
          class="hero-play video-icon popup-youtube bg-white rounded-circle d-inline-flex align-items-center justify-content-center position-absolute"
        >
          <i class="fas fa-play"></i>
        </Link>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8">
              <div class="ins-hero-content text-center">
                <div class="ins-title text-center">
                  <h1 class="display-3 ins-heading mb-20 fw-semibold">
                    {data?.banner_title} <mark>{data?.highlighted_title}</mark>
                  </h1>
                  <p class="mb-5">{data?.banner_description}</p>
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      target="_blank"
                      class="ins-btn ins-primary-btn ins-primary-btn-shadow"
                    >
                      {data?.button_text}
                    </Link>
                  )}
                </div>
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid mt-4 position-relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showVideo && (
        <VideoModal videoUrl={data?.you_tube_url} setShowVideo={setShowVideo} />
      )}
    </>
  );
};

export default Style20;
