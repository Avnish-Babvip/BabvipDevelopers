import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style18 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section class="digi-hero ptb-custom-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <div class="digi-hero-text mt-5 mt-lg-0">
                <div>
                  <span class="span-arrow">{data?.sub_title}</span>
                  <img
                    src={`${assetRoute}/assets/img/arro-right.svg`}
                    alt="arrow"
                  />
                </div>
                <h1 class="display-5 fw-bold mb-3">
                  {data?.banner_title}{" "}
                  <span class="text-orange fw-bold">
                    {data?.highlighted_title}
                  </span>
                </h1>
                <p class="m-0">{data?.banner_description}</p>
                <div class="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  {data?.button_text && (
                    <Link
                      href="contact-us.html"
                      class="btn rounded-pill bg-orange me-3"
                    >
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
            <div class="col-lg-7 cool-md-6">
              <div class="digi-hero-img text-center position-relative mt-5">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid"
                />
                <ul class="list-unstyled d-none d-xl-block">
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image1
                      }`}
                      alt={data?.image1_alt_tag}
                      class=""
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image2
                      }`}
                      alt={data?.image2_alt_tag}
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image3
                      }`}
                      alt={data?.image3_alt_tag}
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image4
                      }`}
                      alt="shape"
                    />
                  </li>
                </ul>
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

export default Style18;
