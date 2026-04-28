import React from "react";

const Style4 = ({ data }) => {
  return (
    <>
      <div class="social-media-section section-space--sm bgc-background">
        <div class="section-space--sm-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10 col-xl-8">
                <h3 class="heading-3 clr-text font-weight-semibold text-center mb-0">
                  {data?.title}{" "}
                  <span class="clr-red">{data?.highlighted_title} </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="list-group flex-row flex-wrap justify-content-center margin-bottom-13"
                role="tablist"
              >
                {data?.tab_data.map((item, idx) => (
                  <a
                    href={`#${idx + 1}`}
                    class={`social-media-btn ${idx === 0 && "active"}`}
                    data-bs-toggle="list"
                    role="tab"
                  >
                    <span class="d-grid place-content-center width-12 height-12 rounded-circle bgc-text-1 clr-paragraph flex-shrink-0 fs-20">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image_icon
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="rounded"
                      />
                    </span>
                    <span class="d-inline-block font-weight-bold fs-20 clr-paragraph">
                      {item?.tab_main_title}
                    </span>
                  </a>
                ))}
              </div>
              <div class="tab-content">
                {data?.tab_data.map((item, idx) => (
                  <div
                    class={`tab-pane fade ${!idx && "active show"}`}
                    id={idx + 1}
                    role="tabpanel"
                  >
                    <div class="border border-red-clr rounded-4 padding-4">
                      <div class=" bgc-white rounded-4 pt-3 pb-5 pt-md-5 pb-md-5 pt-xl-0 pb-xl-0 padding-x-2 padding-x-xsm-4 padding-x-sm-8 padding-x-md-12 padding-x-lg-0 ">
                        <div class="row align-items-center">
                          {/* Image Column (visible only on lg and up) */}
                          <div class="col-lg-5 d-none d-lg-block">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.tab_image}`}
                              alt={item?.tab_image_alt_tag}
                              class="img-fluid w-100 h-100 object-fit-cover"
                              style={{ objectFit: "cover" }}
                            />
                          </div>

                          {/* Text Content Column */}
                          <div class="col-12 col-lg-7 col-xl-6 col-xxl-5 mt-4 mt-lg-0">
                            <h5 class="heading-5 font-weight-semibold mb-3 clr-text">
                              {item?.tab_title}
                            </h5>
                            <p class="clr-paragraph mb-4">
                              {item?.tab_description}
                            </p>
                            <ul class="list gap-3 p-0">
                              {[
                                item?.step1_text,
                                item?.step2_text,
                                item?.step3_text,
                              ].map(
                                (step, index) =>
                                  step && (
                                    <li key={index}>
                                      <div class="d-flex gap-2 align-items-center clr-paragraph">
                                        <div class="flex-shrink-0">
                                          <i class="far fa-check-circle"></i>
                                        </div>
                                        <p class="mb-0 flex-grow-1">{step}</p>
                                      </div>
                                    </li>
                                  )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style4;
