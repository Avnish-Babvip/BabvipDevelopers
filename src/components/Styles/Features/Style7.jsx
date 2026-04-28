import React from "react";

const Style7 = ({ data }) => {
  return (
    <section class="feature-section ptb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="section-heading text-center">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="feature-grid mt-5">
              {data?.step_data?.map((item, idx) => (
                <>
                  {!idx ? (
                    <div class="feature-card border border-light border-2 bg-white highlight-card rounded-custom p-5">
                      <div class="feature-icon rounded  mb-32">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          class=" p-0"
                        />
                      </div>
                      <div class="feature-content">
                        <h3 class="h5">{item?.step_title}</h3>
                        <p>{item?.step_description}</p>
                      </div>
                    </div>
                  ) : (
                    <div class="feature-card border border-light border-2 bg-white rounded-custom p-5">
                      <div class="feature-icon rounded  mb-32">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          class=" p-0"
                        />
                      </div>
                      <div class="feature-content">
                        <h3 class="h5">{item?.step_title}</h3>
                        <p class="mb-0">{item?.step_description}</p>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style7;
