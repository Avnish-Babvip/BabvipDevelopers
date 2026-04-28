import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style25 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section class="counter-with-video pt-60 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="cyber-video-img"
                style={{
                  background: `url(${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${data?.image1})no-repeat center top/cover`,
                }}
              >
                <Link
                  onClick={() => data?.video_url && setShowVideo(true)}
                  class="video-icon popup-youtube popup-video-btn text-decoration-none"
                >
                  <i class="fas fa-play"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mt-5 mt-lg-0">
                <div class="section-heading mb-5">
                  <h5 class="h6 text-primary">{data?.sub_title}</h5>
                  <h2>{data?.title}</h2>
                  <p>{data?.description}</p>
                </div>
                <div class="row">
                  {data?.step_data.map((item, idx) => (
                    <div class="col-lg-6 col-md-6">
                      <div class="bg-white p-4 cyber-count-box mb-30 mb-lg-0">
                        <h2 class="text-primary">{item?.step_title}</h2>
                        <h5 class="h-6">{item?.step_sub_title}</h5>
                        <p>{item?.step_description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showVideo && (
        <VideoModal videoUrl={data?.video_url} setShowVideo={setShowVideo} />
      )}
    </>
  );
};

export default Style25;
