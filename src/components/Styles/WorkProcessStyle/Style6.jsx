import React from "react";

const Style6 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <div class="ai-wt-journey-area pl-20 pr-20">
      <div class="container-fluid">
        <div class="ai-wt-body-bg-2 pt-120 position-relative z-1 overflow-hidden">
          <img
            src={`${assetRoute}/assets/img/ai-wt-home/shape/step-1.png`}
            alt=""
            class="shape-1 p-5 img-fluid position-absolute right-0 top-0 z--1"
          />
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-7">
                <div class="text-center">
                  <h2 class="aiwt-title text-black ff-risk-pri fs-48">
                    {data?.title}
                    <span class="ai-wt-brand-text fw-400">
                      {data?.highlighted_title}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="ai-wt-journey-tab pt-40 pb-80 ai-wt-bb-style position-relative z-1">
              <img
                src="assets/img/ai-wt-home/shape/step-2.png"
                alt=""
                class="shape-2 img-fluid position-absolute z--1"
              />
              <div class="row align-items-center">
                <div class="col-xl-6">
                  <div class="tab-content" id="nav-tabContent">
                    {Array.isArray(data?.step_data) &&
                      data?.step_data.map((item, idx) => (
                        <div
                          class={`tab-pane fade ${!idx && "active show"}`}
                          id={`ai-tab-${idx + 1}`}
                          role="tabpanel"
                        >
                          <div class="ai-wt-tab-content">
                            <img
                              class="w-100 img-fluid"
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.step_image}`}
                              alt={item?.step_image_alt_tag}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div class="col-xxl-5  col-xl-6">
                  <ul class="nav flex-column mb-0" id="nav-tab" role="tablist">
                    {Array.isArray(data?.step_data) &&
                      data?.step_data.map((item, idx) => (
                        <li class="nav-item" role="presentation">
                          <a
                            class={`nav-link ${!idx && "active"}`}
                            href={`#ai-tab-${idx + 1}`}
                            data-bs-toggle="tab"
                            data-bs-target={`#ai-tab-${idx + 1}`}
                            role="tab"
                          >
                            <div class="ai-wt-tab-nav p-4 rounded-16">
                              <h6 class="text-black ff-risk-pri fw-bolder fs-20">
                                {item?.step_title}
                              </h6>
                              <p class="mb-0">{item?.step_description}</p>
                            </div>
                          </a>
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
  );
};

export default Style6;
