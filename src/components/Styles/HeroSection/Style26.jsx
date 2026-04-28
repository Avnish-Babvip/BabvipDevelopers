import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style26 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div class="ca-agency-hero bgc-background">
        <div class="container">
          <div class="row g-4 gy-5 gx-xl-5">
            <div class="col-xl-11 col-xxl-10">
              <h1 class="ca-agency-hero__heading heading-1 clr-white font-weight-semibold mb-0">
                {data?.banner_title}{" "}
                <span class="clr-red">{data?.highlighted_title}</span>
              </h1>
            </div>
            <div class="col-md-8">
              <div class="border border-red-clr rounded-4 padding-5 position-relative z-1">
                <div class="rounded-4 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_1_image_alt_tag}
                    class="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
                <Link
                  onClick={() => data?.you_tube_url && setShowVideo(true)}
                  class="popup-youtube link d-grid place-content-center bgc-primary-gradient clr-white :clr-white fs-24 padding-x-20 padding-y-12 position-absolute top-0 end-0 rounded-start-end-4"
                >
                  <i class="fas fa-play"></i>
                </Link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="margin-top-xl-20">
                <div class="d-flex flex-wrap align-items-center gap-4 margin-bottom-8">
                  <div class="flex-shrink-0">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image1
                      }`}
                      alt={data?.image1_alt_tag}
                      class="img-fluid"
                    />
                  </div>
                  <h4 class="heading-4 mb-0 clr-white font-weight-semibold">
                    {data?.image1_title}
                  </h4>
                </div>
                <p class="mb-0 clr-white">{data?.banner_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <VideoModal videoUrl={data?.you_tube_url} setShowVideo={setShowVideo} />
      )}
    </>
  );
};

export default Style26;
