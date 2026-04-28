import React from "react";
import { Link } from "react-router-dom";

const Style2 = ({ data }) => {
  return (
    <section class="feature-tab-section ptb-60 bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center align-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="section-heading text-center mb-4">
              <h5 class="h6 text-primary">{data?.sub_title}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul
              class="nav justify-content-center feature-tab-list-2 mt-4"
              id="nav-tab-2"
              role="tablist"
            >
              {data?.tab_data?.map((item, idx) => (
                <li class="nav-item" role="presentation">
                  <Link
                    class={`nav-link ${!idx && "active"}`}
                    to={`#tab-2-${idx + 1}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#tab-2-${idx + 1}`}
                    role="tab"
                    aria-selected="true"
                  >
                    {item?.tab_title}
                  </Link>
                </li>
              ))}
            </ul>
            <div class="tab-content" id="nav-tabContent-2">
              {data?.tab_data?.map((item, idx) => (
                <div
                  class={`tab-pane fade pt-60  ${!idx && "active show"} `}
                  id={`tab-2-${idx + 1}`}
                  role="tabpanel"
                >
                  <div class="row justify-content-center align-items-center justify-content-around">
                    <div class="col-lg-5">
                      <div class="feature-tab-info">
                        <h3>{item?.tab_title}</h3>
                        <p>{item?.tab_description} </p>

                        <Link
                          target="_blank"
                          to={item?.button_url}
                          class="read-more-link text-decoration-none mt-4 d-block"
                        >
                          {item?.button_text}
                          <i class="fas fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.tab_image
                        }`}
                        alt={item?.tab_image_alt_tag}
                        class="img-fluid mt-4 mt-lg-0 mt-xl-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style2;
