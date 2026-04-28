import React from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style4 = ({ data }) => {
  return (
    <section class="cta-subscribe bg-dark ptb-120 position-relative overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-8">
            <div class="subscribe-info-wrap text-center position-relative z-2">
              <div class="section-heading">
                <h4 class="h5 text-warning">{data?.sub_title}</h4>
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
              <SubscribeForm buttonText="Subscribe" />
              <ul class="nav justify-content-center subscribe-feature-list mt-3">
                {data?.steps?.map((item, idx) => (
                  <li key={idx} class="nav-item">
                    <span>
                      <i class="far fa-dot-circle text-primary me-2"></i>
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
    </section>
  );
};

export default Style4;
