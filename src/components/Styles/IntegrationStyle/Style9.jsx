import React from "react";

const Style9 = ({ data }) => {
  return (
    <>
      <section class="feature-section-two ptb-120">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div class="feature-content-wrap">
                <div class="section-heading">
                  <h2>{data?.title}</h2>
                  <p>{data?.description}</p>
                </div>
                <ul class="list-unstyled mb-0">
                  {data?.step_data.map((item, index) => (
                    <li class="d-flex align-items-start mb-4">
                      <div class="icon-box bg-primary rounded me-4">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                        />
                      </div>
                      <div class="icon-content">
                        <h3 class="h5">{item?.step_title}</h3>
                        <p>{item?.step_description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-7">
              <div class="feature-img-wrap">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style9;
