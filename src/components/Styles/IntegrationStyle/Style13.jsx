import React from "react";

const Style13 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <div class="ah-bg d-flex justify-content-center">
        <div class="aih-bg-color-two p-3  rounded-circle">
          <a
            href=""
            class="aih-arrow-btn d-inline-flex align-items-center justify-content-center position-relative"
          >
            <svg
              width="24"
              height="39"
              viewBox="0 0 24 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 38.0607C11.5251 38.6464 12.4749 38.6464 13.0607 38.0607L22.6066 28.5147C23.1924 27.9289 23.1924 26.9792 22.6066 26.3934C22.0208 25.8076 21.0711 25.8076 20.4853 26.3934L12 34.8787L3.51472 26.3934C2.92893 25.8076 1.97919 25.8076 1.3934 26.3934C0.807613 26.9792 0.807613 27.9289 1.3934 28.5147L10.9393 38.0607ZM10.5 2L10.5 37L13.5 37L13.5 2L10.5 2Z"
                fill="#00E1BE"
              ></path>
            </svg>
            <img
              class="aih-arrow-btn-img rotate-ani position-absolute"
              src={`${
                import.meta.env.VITE_REACT_APP_IMAGE_PATH
              }/${data?.image1}`}
              alt={data?.image1_alt_tag}
            />
          </a>
        </div>
      </div>
      <div class="aih-line-slider-area ah-bg pt-30 pb-30 overflow-hidden">
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-12">
              <div class="ticker ticker--one">
                <div class="ticker-container">
                  <div class="ticker-item">
                    <ul class="list list-row gap-4">
                      {data?.step_data.map((item, idx) => (
                        <li>
                          <div class="d-flex gap-4 align-items-center ps-5">
                            <span class="d-block flex-shrink-0">
                              <img
                                src={`${assetRoute}/assets/img/icon-star.png`}
                                alt="star"
                              />
                            </span>
                            <span class="d-block">{item?.step_title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="ticker-item">
                    <ul class="list list-row gap-4">
                      {data?.step_data.map((item, idx) => (
                        <li>
                          <div class="d-flex gap-4 align-items-center ps-5">
                            <span class="d-block flex-shrink-0">
                              <img
                                src={`${assetRoute}/assets/img/icon-star.png`}
                                alt="star"
                              />
                            </span>
                            <span class="d-block">{item?.step_title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ticker ticker--two">
                <div class="ticker-container">
                  <div class="ticker-item">
                    <ul class="list list-row gap-4">
                      {data?.step_data.map((item, idx) => (
                        <li>
                          <div class="d-flex gap-4 align-items-center ps-5">
                            <span class="d-block flex-shrink-0">
                              <img
                                src={`${assetRoute}/assets/img/icon-star.png`}
                                alt="star"
                              />
                            </span>
                            <span class="d-block">{item?.step_title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="ticker-item">
                    <ul class="list list-row gap-4">
                      {data?.step_data.map((item, idx) => (
                        <li>
                          <div class="d-flex gap-4 align-items-center ps-5">
                            <span class="d-block flex-shrink-0">
                              <img
                                src={`${assetRoute}/assets/img/icon-star.png`}
                                alt="star"
                              />
                            </span>
                            <span class="d-block">{item?.step_title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
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
