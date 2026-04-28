import React from "react";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="hd-htw-section ptb-120 position-relative overflow-hidden z-1">
        <div class="container">
          <div class="row align-items-center g-5 justify-content-center">
            <div class="col-lg-6">
              <div class="hd-description text-center text-lg-end hd-border-right position-relative">
                <p>{data?.description}</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-8">
              <div class="hd-title text-center text-lg-start">
                <h2 class="clr-text">
                  {data?.title}{" "}
                  <mark class="bg-transparent p-0 position-relative ms-1">
                    {data?.step_data.map((e, id) => id + 1).join(", ")}{" "}
                    <img
                      src={`${assetRoute}/assets/img/shape/arrow-rounded.png`}
                      alt=""
                      class="arrow-rounded position-absolute"
                    />
                  </mark>{" "}
                </h2>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center g-4">
              {Array.isArray(data?.step_data) &&
                data?.step_data.map((item, idx) => (
                  <div class="col-xl-4 col-lg-6">
                    <div
                      class={`htw-single-box bg-white position-relative py-5 px-4 rounded z-1 ${
                        idx === 1 && "mts-50"
                      }  ${idx === 2 && "mts-100"}`}
                    >
                      <span class="number-serial position-absolute">
                        {idx + 1}
                      </span>
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                        className="img-fluid"
                      />

                      <h4 class="mt-3 mb-3">{item?.step_title}</h4>
                      <p class="mb-4">{item?.step_description}</p>
                      {item?.step_link_text && (
                        <Link
                          to={item?.step_link_url}
                          target="_blank"
                          class="read-more-link"
                        >
                          {item?.step_link_text}{" "}
                          <i class="fa-solid fa-arrow-right-long ms-1"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <img
          src={`${assetRoute}/assets/img/shape/arrow-multiple.png`}
          alt="arrow"
          class="arrow-multiple position-absolute z--1"
        />
      </section>
    </>
  );
};

export default Style7;
