import React from "react";

const Style8 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="hd-support-section ptb-120 overflow-hidden">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="hd-suppport-content">
                <div class="hd-title text-center text-lg-start">
                  <h2 class="clr-text">
                    {data?.title}{" "}
                    <mark class="bg-transparent p-0 position-relative">
                      {data?.highlighted_title}{" "}
                      <img
                        src={`${assetRoute}/assets/img/shape/line-shape.png`}
                        alt="line shape"
                        class="line-shape position-absolute"
                      />
                    </mark>
                  </h2>
                </div>
                <div class="accordion hd-accordion mt-60" id="hd_accordion">
                  {data?.step_data.map((item, idx) => (
                    <div class={`accordion-item `}>
                      <div class="accordion-header">
                        <a
                          href={`#hd_acc${idx + 1}`}
                          class={`${idx && "collapsed"}`}
                          data-bs-toggle="collapse"
                        >
                          {item?.step_title}
                        </a>
                      </div>
                      <div
                        class={`accordion-collapse collapse ${!idx && "show"} `}
                        id={`hd_acc${idx + 1}`}
                        data-bs-parent="#hd_accordion"
                      >
                        <div class="accordion-body pt-0">
                          <p class="mb-0">{item?.step_description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hd-support-right position-relative z-1">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image
                  }`}
                  alt={data?.image_alt_tag}
                  class="img-fluid"
                />
                <div class="hd_exbox d-inline-block position-absolute z-1">
                  <div class="hd_exbox_content bg-white">
                    <h2 class="mb-0">{data?.image_title}</h2>
                    <p class="mb-0">{data?.image_sub_title}</p>
                  </div>
                </div>
                <img
                  src={`${assetRoute}/assets/img/shape/arrow-blue.png`}
                  alt="arrow blue"
                  class="position-absolute arrow-blue z--1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style8;
