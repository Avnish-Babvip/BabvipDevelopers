import React from "react";
import { Link } from "react-router-dom";

const Style8 = ({ data }) => {
  return (
    <>
      <div class="ai-wt-cta-area pt-80">
        <div class="container">
          <div class="wt-cta-wrapper ptb-60 text-center rounded-3">
            <div class="row justify-content-center">
              <div class="col-xl-6">
                <div class="p-2">
                  <h2 class="aiwt-title text-white ff-risk-pri fs-36 mb-20">
                    {data?.title}
                  </h2>
                  <p class="text-white mb-20">{data?.description}</p>
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      target="_blank"
                      class="btn bg-white rounded-5 text-black fs-16 d-inline-flex align-items-center gap-3 border-0"
                    >
                      <div class="wt-cta-icon ai-wt-gd-bg-2 d-flex align-items-center justify-content-center rounded-circle p-1">
                        <svg
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.445754 9.59827C0.445754 9.59827 6.95417 5.14367 12.8241 1.1261M12.8241 1.1261C8.58368 4.02837 4.97692 0.437985 4.97692 0.437985M12.8241 1.1261C8.58368 4.02837 10.625 8.69019 10.625 8.69019"
                            stroke="white"
                            stroke-width="1.2"
                          ></path>
                        </svg>
                      </div>
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

export default Style8;
