import React from "react";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  return (
    <>
      <div class="aiart-cta-area pt-80 pb-80">
        <div class="container">
          <div class="aiart-cta-wrapper risk-bg-color-two ptb-80 rounded-3 position-relative z-1">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-10">
                <div class="text-center">
                  <h6 class="aiart-sub-title aiart-clr fs-18 fw-600 d-inline-flex align-items-center gap-3 mb-20">
                    <span>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 20.75L20.5 1.75"
                          stroke="#ED6D4B"
                          stroke-width="3"
                        ></path>
                        <path
                          d="M10.5 22.25L20.5 12.25"
                          stroke="#ED6D4B"
                          stroke-width="3"
                        ></path>
                      </svg>
                    </span>
                    {data?.sub_title}
                  </h6>
                  <h2 class="aiart-title text-white fs-48 ff-risk-pri mb-30">
                    {data?.title}{" "}
                    <span class="aiart-gd-text">{data?.highlighted_title}</span>
                  </h2>
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      target="_blank"
                      href=""
                      class="btn aiart-btn-gd text-white rounded-3 border-0"
                    >
                      {data?.button_text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style9;
