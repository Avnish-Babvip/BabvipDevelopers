import React from "react";
import { Link } from "react-router-dom";

const Style33 = ({ data }) => {
  return (
    <>
      <section class="game-services ptb-100">
        <div
          class=" pt-60 pb-60"
          style={{
            background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
              data?.banner_bg_image
            })no-repeat `,
          }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 col-md-8">
                <div class="section-title mb-5 mb-lg-0">
                  <h2 class="text-white mb-4">{data?.title}</h2>
                  <p class="mb-2 text-off-white">{data?.description}</p>
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      class="game-btn-mdm text-white mt-4"
                      target="_blank"
                    >
                      {data?.button_text}
                    </Link>
                  )}
                </div>
              </div>
              <div class="col-lg-7 col-md-12">
                <div class="game-service-right">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="row mb--200">
                        {data?.step_data.map(
                          (item, idx) =>
                            idx < 2 && (
                              <div class="col-lg-12 col-md-6">
                                <div class="game-service-wrapper mb-4">
                                  <div class="game-service-icon mb-2">
                                    <img
                                      src={`${
                                        import.meta.env
                                          .VITE_REACT_APP_IMAGE_PATH
                                      }/${item?.step_image}`}
                                      alt={item?.step_image_icon_alt_tag}
                                    />
                                  </div>
                                  <h4 class="h5 text-white fw-medium m-0 py-3">
                                    {item?.step_title}
                                  </h4>
                                  <p class="m-0 text-off-white">
                                    {item?.step_description}
                                  </p>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="row mt--200">
                        {data?.step_data.map(
                          (item, idx) =>
                            idx > 1 && (
                              <div class="col-lg-12 col-md-6">
                                <div class="game-service-wrapper mb-4">
                                  <div class="game-service-icon mb-2">
                                    <img
                                      src={`${
                                        import.meta.env
                                          .VITE_REACT_APP_IMAGE_PATH
                                      }/${item?.step_image}`}
                                      alt={item?.step_image_icon_alt_tag}
                                    />
                                  </div>
                                  <h4 class="h5 text-white fw-medium m-0 py-3">
                                    {item?.step_title}
                                  </h4>
                                  <p class="m-0 text-off-white">
                                    {item?.step_description}
                                  </p>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style33;
