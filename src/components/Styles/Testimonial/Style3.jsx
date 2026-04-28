import React from "react";
import { Link } from "react-router-dom";

const Style3 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="testimonial-section pt-60 pb-120">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-12 col-lg-5">
            <div class="section-heading">
              <h5 class="h6 text-primary">{data?.sub_title}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
              {data?.button_url && (
                <Link to={data?.button_url} class="btn btn-primary mt-4">
                  {data?.button_text}
                </Link>
              )}
            </div>
          </div>
          <div class="col-md-12 col-lg-6 mt-5 mt-lg-0">
            <div class="tab-content" id="nav-tabContent">
              {data?.review?.map((item, idx) => (
                <div
                  class={`tab-pane fade ${!idx && "active show"}`}
                  id={`testimonial-tab-style-3-${idx + 1}`}
                  role="tabpanel"
                >
                  <div class="testimonial-content-wrap position-relative">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.image
                      }`}
                      alt={item?.alt_tag}
                      width="130"
                      class="img-fluid"
                    />
                    <ul class="review-rate  list-unstyled list-inline mt-3 ">
                      {Array(Number(item?.client_rating))
                        .fill()
                        .map((_, idx) => {
                          return (
                            <li
                              key={idx}
                              class="list-inline-item  padding-end-1 "
                            >
                              <i class="fas fa-star text-warning"></i>
                            </li>
                          );
                        })}
                    </ul>
                    <blockquote class="lead">
                      {item?.review_description}
                    </blockquote>
                    <div class="author-info mt-4">
                      <h6 class="mb-0">{item?.client_name}</h6>
                      <small>{item?.designation}</small>
                    </div>
                    <img
                      src={`${assetRoute}/assets/img/testimonial/quotes.svg`}
                      alt="quotes"
                      class="position-absolute right-0 bottom-0 z--1"
                    />
                  </div>
                </div>
              ))}
            </div>
            <ul
              class="nav testimonial-tab-list mt-4"
              id="nav-tab"
              role="tablist"
            >
              {data?.review?.map((item, idx) => (
                <li key={idx} class="nav-item" role="presentation">
                  <a
                    className={`${!idx && "active"}`}
                    href={`#testimonial-tab-style-3-${idx + 1}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#testimonial-tab-style-3-${idx + 1}`}
                    role="tab"
                    aria-selected="true"
                  >
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.image
                      }`}
                      alt={item?.alt_tag}
                      class="img-fluid rounded-circle"
                      width="60"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
