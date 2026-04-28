import React from "react";
import { Link } from "react-router-dom";

const Style13 = ({ data }) => {
  return (
    <>
      <div class="ai-wt-feedback-area ">
        <div class="">
          <div class="ai-wi-feedback-bg ptb-120">
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-xl-6">
                  <h2 class="aiwt-title text-white ff-risk-pri fs-48 mb-30">
                    {data?.title}
                    <span class="ai-wt-brand-text fw-400">
                      {data?.highlighted_title}
                    </span>
                  </h2>
                </div>
                <div class="col-xl-5">
                  <p class="text-white mb-30">{data?.main_description}</p>
                </div>
              </div>
              <div class="aiwt-feedback-wrapper">
                <div class="row">
                  <div class="col-xl-4">
                    {data?.step_data.map(
                      (item, index) =>
                        index < 2 && (
                          <Link to={`/portfolio/${item?.port_slug}`}>
                            <div class="ai-wt-feedback-item ai-wt-bg-2 p-4 border-1 rounded-3 mt-20">
                              <p class="text-white">
                                {item?.short_description}
                              </p>
                              <div class="d-flex align-items-center gap-3">
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/${item?.step_image_icon}`}
                                  alt={item?.step_image_icon_alt_tag}
                                  className="img-fluid"
                                />
                                <div class="ail-content">
                                  <h6 class="text-white fs-20 fw-600 mb-0">
                                    {item?.step_title}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                    )}
                  </div>

                  <div class="col-xl-4">
                    {data?.step_data.map(
                      (item, index) =>
                        index > 1 &&
                        index <
                          4(
                            <Link to={`/portfolio/${item?.port_slug}`}>
                              <div class="ai-wt-feedback-item ai-wt-bg-2 p-4 border-1 rounded-3 mt-20">
                                <p class="text-white">
                                  {item?.short_description}
                                </p>
                                <div class="d-flex align-items-center gap-3">
                                  <img
                                    src={`${
                                      import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                    }/${item?.step_image_icon}`}
                                    alt={item?.step_image_icon_alt_tag}
                                    className="img-fluid"
                                  />
                                  <div class="ail-content">
                                    <h6 class="text-white fs-20 fw-600 mb-0">
                                      {item?.step_title}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          )
                    )}
                    {data?.button_text && (
                      <div class="text-center d-none d-xl-block">
                        <Link
                          to={data?.button_url}
                          target="_blank"
                          class="btn ai-wt-gd-bg-2 dark-bg-hover rounded-5 text-white fs-16 border-0 mt-30"
                        >
                          {data?.button_text}
                        </Link>
                      </div>
                    )}
                  </div>
                  <div class="col-xl-4">
                    {data?.step_data.map(
                      (item, index) =>
                        index > 3 && (
                          <Link to={`/portfolio/${item?.port_slug}`}>
                            <div class="ai-wt-feedback-item ai-wt-bg-2 p-4 border-1 rounded-3 mt-20">
                              <p class="text-white">
                                {item?.short_description}
                              </p>
                              <div class="d-flex align-items-center gap-3">
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/${item?.step_image_icon}`}
                                  alt={item?.step_image_icon_alt_tag}
                                  className="img-fluid"
                                />
                                <div class="ail-content">
                                  <h6 class="text-white fs-20 fw-600 mb-0">
                                    {item?.step_title}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style13;
