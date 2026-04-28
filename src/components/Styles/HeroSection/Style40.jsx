import React from "react";
import { Link } from "react-router-dom";

const Style40 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section
      class="event-about"
      style={{
        background: `url('assets/img/event/about-bg.jpg')no-repeat center center/cover`,
      }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="ev-ab-img position-relative ms-0 ms-lg-5">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.image1
                }`}
                alt={data?.image1_alt_tag}
                class="img-fluid z-5 position-relative"
              />
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.image2
                }`}
                alt={data?.image2_alt_tag}
                class="img-fluid ev-about-img-one z-5"
              />
              <ul class="list-unstyled">
                <li>
                  <h4>
                    {data?.title1}{" "}
                    <span class="text-pink">{data?.highlighted_title}</span>
                  </h4>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="p-3">
              <span class="text-pink fw-bold mb-3 d-inline-block">
                {data?.sub_title}
              </span>
              <h2 class="mb-4">{data?.title}</h2>
              <p>{data?.description}</p>

              <div>
                {data?.button1_text && (
                  <Link
                    to={data?.button1_url}
                    target="_blank"
                    class="btn btn-primary bg-pink me-3 mb-2 mb-lg-0 mb-md-0"
                  >
                    {data?.button1_text}
                  </Link>
                )}
                {data?.button2_text && (
                  <Link
                    to={data?.button2_url}
                    target="_blank"
                    class="btn border-pink"
                  >
                    {data?.button2_text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <ul class="elements list-unstyled d-none d-xl-block">
          <li>
            <img src={`${assetRoute}/assets/img/event/star.png`} alt="star" />
          </li>
          <li>
            <img
              src={`${assetRoute}/assets/img/event/human-shape.png`}
              class="img-fluid"
              alt="human"
            />
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Style40;
