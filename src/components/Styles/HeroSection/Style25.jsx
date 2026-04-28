import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style25 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div class="ca-hero bgc-primary">
        <div class="container">
          <div class="row gy-5 gy-lg-0 align-items-center">
            <div class="col-lg-6 col-xl-6 col-xxl-5">
              <h1 class="heading-2 font-weight-bold clr-white margin-bottom-8">
                {data?.banner_title}
              </h1>
              <p class="fs-18 clr-white margin-bottom-10 font-weight-medium">
                {data?.banner_description}
              </p>
              <div class="d-flex gap-8 flex-wrap">
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    class="link d-inline-flex rounded-pill bgc-white text-center font-weight-bold padding-y-5 padding-x-12 clr-text :clr-text flex-shrink-0 lh-1"
                  >
                    {data?.button_text}
                  </Link>
                )}
                {data?.video_button_text && (
                  <Link
                    onClick={() => data?.video_button_url && setShowVideo(true)}
                    class="link d-inline-flex align-items-center gap-4 popup-youtube"
                  >
                    <span class="d-grid place-content-center width-14 height-14 rounded-circle bgc-tertiary clr-text flex-shrink-0">
                      <i class="fas fa-play"></i>
                    </span>
                    <span class="flex-grow-1 clr-white font-weight-semibold">
                      {data?.video_button_text}
                    </span>
                  </Link>
                )}
              </div>
              <div class="follow-nav margin-top-10 margin-top-xxl-0">
                <div class="d-flex gap-4 align-items-center">
                  {(data?.fb_url ||
                    data?.twitter_url ||
                    data?.linkdin_url ||
                    data?.youtube_url) && (
                    <div class="follow-nav__text font-weight-bold clr-white">
                      {data?.social_title}
                    </div>
                  )}
                  <div class="follow-nav__dash"></div>
                </div>
                <ul class="list list-row gap-4">
                  <li>
                    <Link
                      to={data?.fb_url}
                      target="_blank"
                      class="link clr-white :clr-white"
                    >
                      <i class="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={data?.twitter_url}
                      target="_blank"
                      class="link clr-white :clr-white"
                    >
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={data?.linkdin_url}
                      target="_blank"
                      class="link clr-white :clr-white"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={data?.youtube_url}
                      target="_blank"
                      class="link clr-white :clr-white"
                    >
                      <i class="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8 col-lg-4 col-xl-4 col-xxl-5">
              <div class="text-center">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-md-4 col-lg-2">
              <div class="margin-bottom-6 text-center text-xl-end">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="img-fluid"
                />
              </div>
              <p class="margin-bottom-10 margin-bottom-xxl-25 text-center text-xl-end fs-20 clr-white font-weight-semibold lh-15">
                {data?.image1_title}
              </p>
              <div class="margin-bottom-6 text-center text-xl-end">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt_tag}
                  class="img-fluid"
                />
              </div>
              <p class="mb-0 text-center text-xl-end fs-20 clr-white font-weight-semibold lh-15">
                {data?.image2_title}
              </p>
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

export default Style25;
