import React from "react";

const Style5 = ({ data }) => {
  return (
    <section class="cyber-faq pt-120 pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-6">
            <div class="section-heading text-center mb-5">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="cyber-faq-wrapper">
              <div class="accordion faq-accordion" id="accordionExample">
                {data?.step_data.map((item, idx) => (
                  <div
                    class={`accordion-item border border-2 rounded ${
                      idx === 0 && "active"
                    }`}
                  >
                    <h5 class="accordion-header" id={`faq-${idx + 1}`}>
                      <button
                        class={`accordion-button ${idx !== 0 && "collapsed"} `}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${idx + 1}`}
                        aria-expanded={idx === 0 ? true : false}
                      >
                        {item?.faq_question}
                      </button>
                    </h5>
                    <div
                      id={`collapse-${idx + 1}`}
                      class={`accordion-collapse collapse ${
                        idx === 0 && "show"
                      }`}
                      aria-labelledby={`faq-${idx + 1}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{item?.faq_answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cyber-faq-img text-lg-center mt-5 mt-lg-0 0">
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

export default Style5;
