import React, { useEffect, useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style19 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  return (
    <>
      <section
        class="event-hero"
        style={{
          background: `url('assets/img/event/event-h-bg.jpg')no-repeat center center/cover`,
        }}
      >
        <div class="position-relative">
          <div class="container">
            <div class="row align-items-md-center">
              <div class="col-lg-6">
                <div class="event-hero-content">
                  <span class="text-pink fw-bold">{data?.sub_title}</span>
                  <h1 class="fw-bold display-5">
                    <span class="display-2 fw-bold">{data?.banner_title}</span>{" "}
                    <br />
                    {data?.highlighted_title}
                  </h1>
                  <p class="mb-4">{data?.banner_description}</p>
                  <div class="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                    {data?.button_text_1 && (
                      <Link
                        to={data?.button_url_1}
                        target="_blank"
                        class="btn btn-primary bg-pink me-3 mb-3"
                      >
                        {data?.button_text_1}
                      </Link>
                    )}
                    {data?.button_text_2 && (
                      <Link
                        to={data?.button_url_2}
                        target="_blank"
                        class="btn border-pink text-pink mb-3"
                      >
                        {data?.button_text_2}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mt-5 mt-lg-0 event-hero-img">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_1_image_alt_tag}
                    class="img-fluid"
                  />
                  <Link
                    onClick={() => data?.you_tube_url && setShowVideo(true)}
                    class="popup-youtube"
                  >
                    <i class="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <ul class="list-unstyled ev-hero-shape d-none d-xl-block m-0">
              <li>
                <img
                  src={`${assetRoute}/assets/img/event/star.png`}
                  alt="star"
                />
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <img
                  src={`${assetRoute}/assets/img/event/square.png`}
                  alt="shape"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      {showVideo && (
        <VideoModal videoUrl={data?.you_tube_url} setShowVideo={setShowVideo} />
      )}
    </>
  );
};

export default Style19;
