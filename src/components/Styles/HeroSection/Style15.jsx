import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style15 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section class="hero-eleven bg-dark-black pt-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12">
              <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 class="fw-bold display-5 text-white">
                  {data?.banner_title}
                </h1>
                <p class="lead text-white">{data?.banner_description}</p>
                <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      class="btn rounded-pill btn-primary me-3"
                    >
                      {" "}
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
            <div class="col-lg-7 col-md-12">
              <div class="crypto-hero-img pt-80">
                <ul class="currency-icon list-unstyled">
                  <li>
                    <img
                      src={`${assetRoute}/assets/img/currency1.svg`}
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img
                      src={`${assetRoute}/assets/img/currency2.svg`}
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img
                      src={`${assetRoute}/assets/img/currency3.svg`}
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img
                      src={`${assetRoute}/assets/img/currency4.svg`}
                      alt="icon"
                    />
                  </li>
                </ul>
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_image_alt_tag}
                  class="img-fluid"
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

export default Style15;
