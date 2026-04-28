import React from "react";
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  return (
    <section class="cta-subscribe ptb-120">
      <div class="container">
        <div class="bg-dark ptb-120 position-relative overflow-hidden rounded-custom">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="subscribe-info-wrap text-center position-relative z-2">
                <div class="section-heading">
                  <h4 class="h5 text-warning">{data?.sub_title}</h4>
                  <h2>{data?.title}</h2>
                  <p>{data?.description}</p>
                </div>
                <div class="form-block-banner mw-60 m-auto mt-5">
                  {data?.button_url && (
                    <Link to={data?.button_url} class="btn btn-primary">
                      {data?.button_text}
                    </Link>
                  )}
                  {data?.video_button_url && (
                    <Link
                      to={data?.video_button_url}
                      class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"
                    >
                      <i class="fas fa-play"></i> {data?.video_button_text}
                    </Link>
                  )}
                </div>
                <ul class="nav justify-content-center subscribe-feature-list mt-4">
                  {data?.steps?.map((item, idx) => (
                    <li key={idx} class="nav-item">
                      <span>
                        <i class="far fa-check-circle text-primary me-2"></i>
                        {item?.step_title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Style5;
