import React from "react";

const Style1 = ({ data }) => {
  return (
    <section class="faq-section ptb-120 bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-6">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 col-12">
            <div class="faq-wrapper">
              {data?.step_data?.map((item, idx) => (
                <div class="faq-item mb-5">
                  <h5>
                    <span class="h3 text-primary me-2">{idx + 1}.</span>
                    {item?.faq_question}
                  </h5>
                  <p>{item?.faq_answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-center mt-4 mt-lg-0 mt-md-0">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
