import React from "react";
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  return (
    <div class="ail-feature-area pt-60 pb-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-8">
            <p class="ail-sub-title text-black fw-500 ah-input-bg d-inline-flex align-items-center gap-2 rounded-5 mb-20">
              <span class="ail-gd-bg"></span> {data?.sub_title}
            </p>
            <h2 class="ail-title text-black fs-48 fw-600">
              {data?.title}{" "}
              <span class="ail-highlighted-text">
                {data?.highlighted_title}
              </span>
            </h2>
          </div>
          <div class="col-xl-5 col-lg-4">
            <div class="text-end">
              <div class="p-3 d-inline-flex justify-content-end  rounded-circle">
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
                      fill="#666666"
                    ></path>
                  </svg>
                  <img
                    class="aih-arrow-btn-img rotate-ani position-absolute"
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image2
                    }`}
                    alt={data?.image2_alt_tag}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-40">
          <div class="row">
            <div class="col-12">
              <ul
                class="nav ail-feature-tab align-items-center justify-content-between gap-2 mb-0"
                id="nav-tab"
                role="tablist"
              >
                {data?.tab_data.map((item, idx) => (
                  <li class="nav-item" role="presentation">
                    <a
                      class={`nav-link ${idx === 0 && "active"}`}
                      href={`#${idx + 1}`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${idx + 1}`}
                      role="tab"
                    >
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image_icon
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                      />
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image_icon
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="active"
                      />
                      <p>{item?.tab_main_title}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <div class="tab-content" id="nav-tabContent">
                {data?.tab_data.map((item, idx) => (
                  <div
                    class={`tab-pane fade pt-40 ${idx === 0 && "active show"}`}
                    id={`${idx + 1}`}
                    role="tabpanel"
                  >
                    <div
                      class=" ail-main-dbg p-5 pt-60 pb-60 rounded-10 position-relative z-1 overflow-hidden"
                      style={{
                        "background-image": `url(${
                          import.meta.env.VITE_REACT_APP_IMAGE_PATH
                        }/${data?.image1})`,
                      }}
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <div class="ail-op-bg p-4 rounded-10">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.tab_image}`}
                              alt={item?.tab_image_alt_tag}
                              class="w-100 img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="ail-tab-con pl-15">
                            <h3 class="text-black fs-30 mb-20">
                              {item?.tab_title}
                            </h3>
                            <p class="mb-20">{item?.tab_description}</p>
                            <ul class="ail-tab-con_list list-unstyled">
                              <li class="d-flex align-items-center gap-3">
                                <span>
                                  <i class="fa-solid fa-chevron-right"></i>
                                </span>
                                <p class="text-black mb-0">
                                  {item?.step1_text}
                                </p>
                              </li>
                              <li class="d-flex align-items-center gap-3">
                                <span>
                                  <i class="fa-solid fa-chevron-right"></i>
                                </span>
                                <p class="text-black mb-0">
                                  {item?.step2_text}
                                </p>
                              </li>
                            </ul>
                            {item?.button_text && (
                              <Link
                                to={item?.button_url}
                                target="_blank"
                                class="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                              >
                                {item?.button_text}
                              </Link>
                            )}
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
    </div>
  );
};

export default Style5;
