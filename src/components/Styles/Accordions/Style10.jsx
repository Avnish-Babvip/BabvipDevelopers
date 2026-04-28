import React from "react";

const Style10 = ({ data }) => {
  return (
    <>
      <div class="section-space bgc-dark-1">
        <div class="section-space--sm-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <h3 class="heading-3 clr-white text-center">
                  {data?.title}{" "}
                  <span class="clr-red">{data?.highlighted_title}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row g-4 gy-5">
            <div class="col-lg-6 col-xl-7">
              <span class="d-inline-block font-weight-semibold padding-y-1 padding-x-8 rounded-2 margin-bottom-8 bgc-dark-2 clr-white fs-14 text-center">
                {data?.question_title}
              </span>
              <div class="faq-list-group list-group gap-5" role="tablist">
                {data?.step_data.map((item, idx) => (
                  <a
                    class={`faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white ${
                      !idx && "active"
                    }`}
                    data-bs-toggle="list"
                    href={`#faq-${idx + 1}`}
                    aria-selected="true"
                    role="tab"
                  >
                    {item?.step_title}
                  </a>
                ))}
              </div>
            </div>
            <div class="col-lg-6 col-xl-5">
              <span class="d-inline-block font-weight-semibold padding-y-1 padding-x-8 rounded-2 margin-bottom-8 bgc-danger clr-white fs-14 text-center">
                {data?.answer_title}
              </span>
              <div class="tab-content">
                {data?.step_data.map((item, idx) => (
                  <div
                    class={`tab-pane fade ${!idx && "active show"} `}
                    id={`faq-${idx + 1}`}
                    role="tabpanel"
                  >
                    <div class="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                      {item?.step_description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style10;
