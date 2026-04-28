import React from "react";
import { Link } from "react-router-dom";

const Style3 = ({ data }) => {
  return (
    <>
      <section class="ptb-120 bg-dark">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6">
              <div class="text-center">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="service-tabs">
                <ul
                  class="nav nav-pills d-flex justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  {data?.tab_data.map((item, idx) => (
                    <li class="nav-item" role="presentation">
                      <button
                        class={`nav-link me-4 ${idx === 0 && "active"}`}
                        id={`pills-tab-${idx + 1}`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${idx + 1}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-tab-${idx + 1}`}
                        aria-selected={`${idx === 0 ? true : false}`}
                      >
                        <i class="fas fa-desktop me-3"></i>
                        <span>{item?.tab_main_title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="tab-content" id="pills-tabContent">
              {data?.tab_data.map((item, idx) => (
                <div
                  class={`tab-pane fade ${!idx && "active show"}`}
                  id={`pills-${idx + 1}`}
                  role="tabpanel"
                  aria-labelledby={`pills-tab-${idx + 1}`}
                >
                  <div class="tab-content-wrapper pt-60">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <div class="text-center mb-5 mb-lg-0">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.tab_image}`}
                            alt={item?.tab_image_alt_tag}
                            class="img-fluid"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="tab-right-content">
                          <h2>
                            <br />
                            {item?.tab_title}
                          </h2>
                          <p>{item?.tab_description}</p>
                          <ul class="list-unstyled">
                            <li>
                              <i class="fas fa-check text-primary"></i>
                              <span>{item?.step1_text}</span>
                            </li>
                            <li>
                              <i class="fas fa-check text-primary"></i>
                              <span>{item?.step2_text}</span>
                            </li>
                            <li>
                              <i class="fas fa-check text-primary"></i>
                              <span>{item?.step3_text}</span>
                            </li>
                          </ul>
                          {item?.button_text && (
                            <Link
                              target="_blank"
                              to={item?.button_url}
                              class="text-white link-with-icon text-decoration-none"
                            >
                              {item?.button_text}
                              <i class="fas fa-arrow-right"></i>
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
      </section>
    </>
  );
};

export default Style3;
