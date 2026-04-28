import React from "react";
import { Link } from "react-router-dom";

const Style4 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="hd-faq-section pb-80">
      <div class="container">
        <div class="row g-5 justify-content-center">
          <div class="col-xl-5 col-lg-8">
            <div class="hd-chat-box">
              <h3 class="text-white mb-3">{data?.title1}</h3>
              <p class="text-white mb-4">{data?.description}</p>
              <Link to={data?.link_url} class="read-more-link text-warning">
                {data?.link_text} <i class="fas fa-angle-right ms-1"></i>
              </Link>
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.banner_image
                }`}
                alt={data?.banner_image_alt_tag}
                class="img-fluid mt-4"
              />
            </div>
          </div>
          <div class="col-xl-7 col-lg-8 align-self-end">
            <div class="hd-faq-wrapper">
              <div class="hd-title">
                <h2 class="clr-text">
                  {data?.title}{" "}
                  <mark class="bg-transparent p-0 position-relative">
                    {data?.highlited_title}{" "}
                    <img
                      src={`${assetRoute}/assets/img/shape/line-shape.png`}
                      alt="line shape"
                      class="position-absolute line-shape"
                    />
                  </mark>
                </h2>
              </div>
              <div
                class="accordion hd-accordion hd-accordion2 mt-60"
                id="hd_accordion2"
              >
                {data?.step_data?.map((item, idx) => (
                  <div class={`accordion-item ${idx === 1 && "active"}`}>
                    <div class="accordion-header">
                      <Link
                        to={`#hd${idx + 1}_acc${idx + 1}`}
                        class=""
                        data-bs-toggle="collapse"
                      >
                        {item?.faq_question}
                      </Link>
                    </div>
                    <div
                      class={`accordion-collapse collapse ${
                        idx === 1 && "show"
                      }`}
                      id={`hd${idx + 1}_acc${idx + 1}`}
                      data-bs-parent={`#hd_accordion${idx + 1}`}
                    >
                      <div class="accordion-body pt-0">
                        <p class="mb-0">{item?.faq_answer}</p>
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
  );
};

export default Style4;
