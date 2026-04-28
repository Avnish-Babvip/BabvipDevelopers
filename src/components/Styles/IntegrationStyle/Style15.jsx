import React from "react";
import { Link } from "react-router-dom";

const Style15 = ({ data }) => {
  return (
    <>
      <div class="aih-cummiunte-area ah-bg pt-60 pb-120">
        <div class="container">
          <div class="row align-items-end justify-content-center">
            <div class="col-xxl-3 col-lg-4">
              <h2 class="aih-title aih-color-two fs-48 fw-600 mb-40">
                {data?.title}
              </h2>
              <Link
                to={data?.button_url}
                class="btn aih-btn aih-bg-color aih-color-two ff-poppins fs-20 fw-600 d-inline-flex align-items-center gap-2"
              >
                <span>{data?.button_text}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.625 9.375C5.27982 9.375 5 9.65482 5 10C5 10.3452 5.27982 10.625 5.625 10.625H12.8661L10.1831 13.3081C9.93898 13.5521 9.93898 13.9479 10.1831 14.1919C10.4271 14.436 10.8229 14.436 11.0669 14.1919L14.8169 10.4419C15.061 10.1979 15.061 9.80213 14.8169 9.55806L11.0669 5.80806C10.8229 5.56398 10.4271 5.56398 10.1831 5.80806C9.93898 6.05214 9.93898 6.44787 10.1831 6.69194L12.8661 9.375H5.625Z"
                    fill="#141414"
                  ></path>
                </svg>
              </Link>
            </div>
            <div class="col-xxl-4 col-xl-5 col-lg-6">
              <div class="position-relative pl-40 pr-15 aih-border-style-two">
                <p class="aih-color-five fs-16 flh-24">{data?.description}</p>
                <div class="d-flex align-items-center gap-3 mt-30">
                  <img
                    src={`${
                      import.meta.env.VITE_REACT_APP_IMAGE_PATH
                    }/${data?.image2}`}
                    alt={data?.image2_alt_tag}
                  />
                  <h6 class="aih-color-two fs-20 fw-600 flh-28">
                    {data?.title_bottom}
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-xxl-5">
              <img
                src={`${
                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                }/${data?.image1}`}
                alt={data?.image1_alt_tag}
                class="aih-comminute-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style15;
