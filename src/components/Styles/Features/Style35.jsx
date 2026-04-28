import React from "react";
import { Link } from "react-router-dom";

const Style35 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="benifits-area bg-light-subtle pt-60 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="benifits-left position-relative mb-5">
                <div>
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image2
                    }`}
                    alt={data?.image2_alt_tag}
                    class="img-fluid text-center"
                  />
                </div>
                <ul class="list-unstyled bi-right-shape">
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image3
                      }`}
                      alt={data?.image3_alt_tag}
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image4
                      }`}
                      alt={data?.image4_alt_tag}
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image1
                      }`}
                      alt={data?.image1_alt_tag}
                    />
                  </li>
                  <li>
                    <img
                      src={`${assetRoute}/assets/img/bi-pink-dot.png`}
                      alt="shape"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="benifits-right mt-5 mt-lg-0">
                <div class="benifits-right-content">
                  <h2 class="mb-3">
                    {data?.title}{" "}
                    <span class="gr-text">{data?.highlighted_title}</span>
                  </h2>
                  <p class="m-0">{data?.description}</p>
                </div>
                <div class="row">
                  {data?.step_data.map((item, idx) => (
                    <div class="col-lg-6">
                      <div class="single-benifit bg-white">
                        <div class="pb-3 two">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_icon_alt_tag}
                          />
                        </div>
                        <h5>{item?.step_title}</h5>
                        <p class="m-0">{item?.step_description}</p>
                        {item?.link_text && (
                          <Link
                            to={item?.link_url}
                            target="_blank"
                            class="link-with-icon text-decoration-none"
                          >
                            {item?.link_text} <i class="fas fa-arrow-right"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style35;
