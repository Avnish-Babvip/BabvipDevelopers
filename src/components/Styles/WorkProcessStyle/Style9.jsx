import React from "react";

const Style9 = ({ data }) => {
  return (
    <>
      <section class="process-section bg-light-subtle ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div
                class="section-heading text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h4 class="h5 text-primary">{data?.sub_title}</h4>
                <h2>{data?.title}</h2>
                <p>{data?.description} </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="setup-process-wrap">
                <ul class="setup-process-list list-unstyled text-center mb-0">
                  {Array.isArray(data?.step_data) &&
                    data?.step_data.map((item, idx) => (
                      <li
                        class="setup-process-item py-4 px-2 aos-init aos-animate"
                        data-aos="fade-up"
                      >
                        <div class=" mb-4">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_alt_tag}
                          />
                        </div>
                        <span class="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                          {item?.step_sub_title}
                        </span>
                        <h6 class="mt-3 mb-0">{item?.step_title}</h6>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style9;
