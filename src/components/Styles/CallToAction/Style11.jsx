import React from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style11 = ({ data }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.banner_bg_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="cta-subscribe bg-dark ptb-120 position-relative overflow-hidden"
    >
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
                {data?.step_title?.map((item, idx) => (
                  <li key={idx} class="nav-item">
                    <span>
                      <i class="far fa-dot-circle text-primary me-2"></i>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style11;
