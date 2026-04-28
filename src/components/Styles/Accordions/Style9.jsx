import React from "react";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  return (
    <>
      <div class="section-space bgc-background">
        <div class="container">
          <div class="row g-4 gy-5 gx-lg-5 gy-lg-0">
            <div class="col-lg-6">
              <div class="tech-img h-100">
                <div class="d-flex gap-8 h-100">
                  <div class="tech-img__item align-self-start">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image1
                      }`}
                      alt={data?.image1_alt_tag}
                      class="img-fluid w-100 object-fit-cover"
                    />
                  </div>
                  <div class="tech-img__item align-self-end">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image2
                      }`}
                      alt={data?.image2_alt_tag}
                      class="img-fluid w-100 object-fit-cover"
                    />
                  </div>
                </div>

                <span class="width-30 height-30 rounded-circle bgc-warning position-absolute top-0 end-25p d-none d-lg-inline-block"></span>
                <span class="width-30 height-30 rounded-circle bgc-secondary position-absolute bottom-0 start-25p d-none d-lg-inline-block"></span>
              </div>
            </div>
            <div class="col-lg-6">
              <h4 class="heading-4 margin-bottom-8 clr-text">{data?.title}</h4>
              <p class="clr-paragraph margin-bottom-10">{data?.description}</p>
              {data?.button_url && (
                <Link
                  to={data?.button_url}
                  class="link d-inline-flex padding-y-3 padding-x-10 margin-bottom-10 text-center rounded-pill bgc-primary font-weight-bold clr-white :clr-white"
                >
                  {data?.button_text}
                </Link>
              )}
              <div class="accordion ca-accordion" id="technologicalQuery">
                {data?.step_data.map((item, idx) => (
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class={`accordion-button ${idx && "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target={`#collapse${idx + 1}`}
                        aria-controls={`collapse${idx + 1}`}
                      >
                        {item?.step_title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx + 1}`}
                      class={`accordion-collapse collapse ${!idx && "show"}`}
                      data-bs-parent="#technologicalQuery"
                    >
                      <div class="accordion-body">{item?.step_description}</div>
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

export default Style9;
