import React from "react";
import { Link } from "react-router-dom";

const Style2 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="customer-review-tab ptb-120 bg-light-subtle position-relative z-2">
      <div class="container">
        <div class="row justify-content-center align-content-center">
          <div class="col-md-10 col-lg-6">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.sub_title}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tab-content" id="testimonial-tabContent">
              {data?.review?.map((item, idx) => (
                <div
                  class={`tab-pane fade ${!idx && "active show"}`}
                  id={`testimonial-tab-style-2-${idx + 1}`}
                  role="tabpanel"
                >
                  <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6 col-md-6">
                      <div class="testimonial-tab-content mb-5 mb-lg-0 mb-md-0">
                        <img
                          src={`${assetRoute}/assets/img/testimonial/quotes-left.svg`}
                          alt="testimonial quote"
                          width="65"
                          class="img-fluid mb-32"
                        />
                        <div class="blockquote-title-review mb-4">
                          <h3 class="mb-0 h4 fw-semi-bold">
                            {item?.review_title}
                          </h3>
                          <ul class="review-rate mb-0 list-unstyled list-inline">
                            {Array(Number(item?.client_rating))
                              .fill()
                              .map((_) => {
                                return (
                                  <li class="list-inline-item">
                                    <i class="fas fa-star text-warning"></i>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>

                        <blockquote class="blockquote">
                          <p>{item?.review_description}</p>
                        </blockquote>
                        <div class="author-info mt-4">
                          <h6 class="mb-0">{item?.client_name}</h6>
                          <span>{item?.designation}</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                      <div class="author-img-wrap pt-5 ps-5">
                        <div class="testimonial-video-wrapper position-relative">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.image}`}
                            alt={item?.alt_tag}
                            class="img-fluid w-100 rounded-custom shadow-lg"
                          />
                          <div class="customer-info text-white d-flex align-items-center">
                            <Link
                              to={item?.video_link}
                              class="video-icon popup-youtube text-decoration-none"
                            >
                              <i class="fas fa-play"></i>{" "}
                              <span class="text-white ms-2 small">
                                {" "}
                                Watch Video
                              </span>
                            </Link>
                          </div>
                          <div class="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul
              class="nav nav-pills testimonial-tab-menu mt-60"
              id="testimonial"
              role="tablist"
            >
              {data?.review?.map((item, idx) => (
                <li key={idx} class="nav-item" role="presentation">
                  <div
                    class={`nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link ${
                      !idx && "active"
                    }`}
                    data-bs-toggle="pill"
                    data-bs-target={`#testimonial-tab-style-2-${idx + 1}`}
                    role="tab"
                    aria-selected="true"
                  >
                    <div class="testimonial-thumb me-3">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.image
                        }`}
                        alt={item?.alt_tag}
                        width="50"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="author-info">
                      <h6 class="mb-0">{item?.client_name}</h6>
                      <span>{item?.designation}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style2;
