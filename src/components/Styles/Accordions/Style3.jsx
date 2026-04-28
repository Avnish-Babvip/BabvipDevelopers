import React from "react";

const Style3 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="app-two-feature-three bg-light-subtle ptb-60">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-5 col-xl-5 col-sm-12">
            <div class="app-two-feature-three-left">
              <div class="app-content-feature-wrap">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
              <div class="accordion faq-accordion mt-5" id="accordionExample">
                {data?.step_data?.map((item, idx) => (
                  <div class={`accordion-item  border-0 ${!idx && "active"}`}>
                    <h5 class="accordion-header" id={`faq-${idx + 1}`}>
                      <button
                        class={`accordion-button ${idx && "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${idx + 1}`}
                        aria-expanded={`${!idx && "true"}`}
                      >
                        <i class="far fa-bell pe-3"></i>
                        {item?.faq_question}
                      </button>
                    </h5>
                    <div
                      id={`collapse-${idx + 1}`}
                      class={`accordioncollapse collapse ${!idx && "show"}`}
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
          <div class="col-lg-6 col-xl-6 col-sm-12">
            <div class="app-two-feature-three-img position-relative text-center mt-5 mt-lg-0">
              <div class="feature-three-shape">
                <img
                  src={`${assetRoute}/assets/img/app-two-feature-blob-shape.png`}
                  alt="app screen"
                  class="feature-three-blob img-fluid"
                />
              </div>
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="position-relative z-5"
              />
              <div class="img-peice d-none d-lg-block">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt}
                  class="img-one position-absolute custom-shadow"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt}
                  class="img-two position-absolute custom-shadow"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image3
                  }`}
                  alt={data?.image3_alt}
                  class="img-three position-absolute custom-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
