import React from "react";

const Style7 = ({ data }) => {
  return (
    <>
      <section class="game-faq ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h2 class="mb-3 text-white">{data?.title}</h2>
                <p class="m-0 text-off-white">{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="game-faq-img mb-5 mb-lg-0 text-center text-lg-start">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image
                  }`}
                  alt={data?.image_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="game-accordion">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {data?.step_data.map((item, idx) => (
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id={`flush-heading${idx + 1}`}
                      >
                        <button
                          class="accordion-button shadow-none collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${idx + 1}`}
                          aria-controls={`flush-collapse${idx + 1}`}
                        >
                          {item?.step_title}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${idx + 1}`}
                        class="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${idx + 1}`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <p class="text-off-white m-0">
                            {item?.step_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style7;
