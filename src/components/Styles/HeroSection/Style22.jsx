import React, { useState } from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";
import { Link } from "react-router-dom";

const Style22 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section
        class="crm-hero ptb-custom-120 position-relative overflow-hidden"
        style={{
          "background-image": `url('${assetRoute}/assets/img/shape/crm-hero-bg.png')`,
        }}
      >
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image1}`}
          alt={data?.image1_alt_tag}
          class="position-absolute slack-thumb"
        />
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-6">
              <div class="crm-hero-content position-relative z-1">
                <img
                  src={`${assetRoute}/assets/img/shape/arrow-lg-red.png`}
                  alt="arrow"
                  class="position-absolute arrow-lg-red z--1"
                />
                <h4 class="crm-subtitle fw-semibold">
                  {data?.sub_title}
                  <img
                    src={`${assetRoute}/assets/img/shape/arrow-red.png`}
                    alt="arrow"
                    class="ms-2"
                  />
                </h4>
                <h1 class="display-2 mb-0">
                  {data?.banner_title1}{" "}
                  <span class="d-inline-block d-lg-block">
                    {data?.banner_title2}
                  </span>
                  {data?.banner_title3}
                </h1>

                <div class="crm-hero-bottom mt-60">
                  <p class="text-white lead">{data?.subscription_title}</p>
                  <SubscribeForm buttonText="Subscribe" colorCode="#EF3D3D" />
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5">
              <div class="crm-hero-img mt-60 mt-lg-0">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.banner_image
                  }`}
                  alt={data?.banner_1_image_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="crm-header-social d-none d-xl-flex align-items-center position-absolute z-5">
          {(data?.fb_url ||
            data?.twitter_url ||
            data?.linkdin_url ||
            data?.youtube_url) && (
            <span class="title">{data?.social_title}</span>
          )}
          <ul class="social-list ms-3 list-unstyled p-0 m-0">
            {data?.twitter_url && (
              <li>
                <Link to={data?.fb_url} target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </Link>
              </li>
            )}
            {data?.twitter_url && (
              <li>
                <Link to={data?.twitter_url} target="_blank">
                  <i class="fab fa-twitter"></i>
                </Link>
              </li>
            )}
            {data?.linkdin_url && (
              <li>
                <Link to={data?.linkdin_url} target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </li>
            )}
            {data?.youtube_url && (
              <li>
                <Link to={data?.youtube_url} target="_blank">
                  <i class="fab fa-youtube"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Style22;
