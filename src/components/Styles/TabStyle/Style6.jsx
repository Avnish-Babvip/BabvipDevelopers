import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  return (
    <>
      <section>
        <div class="container">
          <div class="ev-schedule bg-light-subtle mt--50 ptb-100 rounded-top">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="text-center ev-schedule-btn mb-5">
                  <span class="text-pink fw-bold">{data?.sub_title}</span>
                  <h2 class="mb-4">{data?.main_title}</h2>
                  <ul
                    class="nav list-unstyled d-flex justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    {data?.tab_data.map((item, index) => (
                      <li class="nav-item mb-3 mb-lg-0" role="presentation">
                        <button
                          class={`nav-link ${!index && "active"}`}
                          id={`pills-${index + 1}-tab`}
                          data-bs-toggle="pill"
                          data-bs-target={`#pills-${index + 1}`}
                          type="button"
                          role="tab"
                        >
                          {item?.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="tab-content" id="pills-tabContent">
                  {data?.tab_data.map((item, index) => (
                    <div
                      class={`tab-pane fade ${!index && "show active"}`}
                      id={`pills-${index + 1}`}
                      role="tabpanel"
                    >
                      <div class="single-eve-session bg-white py-5 rounded px-4 px-lg-0 mb-4">
                        <div class="row align-items-center">
                          <div class="">
                            <div class="single-ev px-lg-4">
                              <h5 class="mb-3 h6">{item?.tab_title}</h5>
                              <p class="mb-3">{item?.tab_description}</p>
                              {item?.button_text && (
                                <Link
                                  to={item?.button_url}
                                  target="_blank"
                                  class="link-with-icon"
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

            <ul class="circel-shape list-unstyled d-none d-lg-block mb-0">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
