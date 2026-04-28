import React from "react";

const Style2 = ({ data }) => {
  return (
    <section class="faq-section ptb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-12">
            <div class="section-heading mb-5 text-center">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-7 col-12">
            <div class="accordion faq-accordion" id="accordionExample">
              {data?.step_data?.map((item, idx) => (
                <div
                  class={`accordion-item border border-2 ${!idx && "active"}`}
                >
                  <h5 class="accordion-header" id={`faq-${idx + 1}`}>
                    <button
                      class={`accordion-button ${idx && "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${idx + 1}`}
                      aria-expanded={`${!idx && "true"}`}
                    >
                      {item?.faq_question}
                    </button>
                  </h5>
                  <div
                    id={`collapse-${idx + 1}`}
                    class={`accordion-collapse collapse ${!idx && "show"}`}
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
      </div>
    </section>
  );
};

export default Style2;
