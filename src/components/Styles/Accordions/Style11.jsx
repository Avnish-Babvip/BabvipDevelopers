import React from "react";

const Style11 = ({ data }) => {
  return (
    <>
      <div class="aih-faq-area ah-bg ptb-60 overflow-hidden">
        <div class="container">
          <div class="row align-items-end">
            <div class="col-xl-6">
              <h2 class="aih-title aih-color-two fs-48 fw-600 mb-40">
                {data?.title}
              </h2>
              <div class="accordion custom-accordion" id="accordionExample">
                {data?.step_data.map((item, idx) => (
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${idx}`}
                        aria-expanded="true"
                        aria-controls={`collapse${idx}`}
                      >
                        {item?.faq_question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx}`}
                      class={`accordion-collapse collapse ${!idx && "show"}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">{item?.faq_answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-xl-6">
              <img
                src={`${
                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                }/${data?.image1}`}
                alt={data?.image1_alt_tag}
                class="aih-faq-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style11;
