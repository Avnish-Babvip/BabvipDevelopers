import Parallax from "parallax-js";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style2 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);

  const parallaxRef = useRef(null); // Reference for the parallax container

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init(); // Initialize AOS
    }

    if (parallaxRef.current) {
      new Parallax(parallaxRef.current, {
        relativeInput: true,
        clipRelativeInput: true,
      });
    }
  }, []);

  return (
    <>
      <section
        class="hero-section ptb-custom-120 text-white bg-gradient"
        style={{
          background: `url('${assetRoute}/assets/img/hero-dot-bg.png')no-repeat center right`,
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
                        data?.video_button_link && setShowVideo(true)
                      }
                      class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                    >
                      {" "}
                      <i class="fas fa-play"></i>
                      {data?.video_button_text}{" "}
                    </Link>
                  )}
                </div>
                <div class="row justify-content-lg-start mt-60">
                  <h6 class="text-white-70 mb-2">{data?.trusted_title}</h6>
                  {data?.top_client_image?.map((item, idx) => (
                    <div key={idx} class="col-4 col-sm-3 my-2 ps-lg-0">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.top_client_image
                        }`}
                        alt={item?.icon_alt_tag}
                        class="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-8 mt-5">
              <div class="hero-img position-relative circle-shape-images">
                <ul
                  ref={parallaxRef}
                  class="position-absolute animate-element parallax-element circle-shape-list"
                >
                  <li class="layer" data-depth="0.3">
                    <img
                      src={`${assetRoute}/assets/img/shape/circle-1.svg`}
                      alt="shape"
                      class="circle-shape-item type-0 hero-1"
                    />
                  </li>
                  <li class="layer" data-depth="0.2">
                    <img
                      src={`${assetRoute}/assets/img/shape/circle-1.svg`}
                      alt="shape"
                      class="circle-shape-item type-1 hero-1"
                    />
                  </li>
                  <li class="layer" data-depth="0.4">
                    <img
                      src={`${assetRoute}/assets/img/shape/circle-1.svg`}
                      alt="shape"
                      class="circle-shape-item type-2 hero-1"
                    />
                  </li>
                  <li class="layer" data-depth="0.4">
                    <img
                      src={`${assetRoute}/assets/img/shape/circle-1.svg`}
                      alt="shape"
                      class="circle-shape-item type-3 hero-1"
                    />
                  </li>
                  <li class="layer" data-depth="0.3">
                    <img
                      src={`${assetRoute}/assets/img/shape/circle-1.svg`}
                      alt="shape"
                      class="circle-shape-item type-4 hero-1"
                    />
                  </li>
                  <li class="layer" data-depth="0.3">
                    <img
                      src={`${assetRoute}/assets/img/shape/circle-1.svg`}
                      alt="shape"
                      class="circle-shape-item type-5 hero-1"
                    />
                  </li>
                </ul>

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
        </div>
      </section>
      {showVideo && (
        <VideoModal
          videoUrl={data?.video_button_link}
          setShowVideo={setShowVideo}
        />
      )}
    </>
  );
};

export default Style2;
