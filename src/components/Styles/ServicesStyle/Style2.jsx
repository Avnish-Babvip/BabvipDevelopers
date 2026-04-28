import React from "react";

const Style2 = ({ data }) => {
  return (
    <section class="services-section pt-40 ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="position-relative w-100">
              <div class="feature-grid position-relative">
                {data?.service_data?.map((item, idx) => (
                  <div class="feature-card border-line-style px-5 my-4">
                    <div class="feature-icon rounded mb-3">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.service_image_icon
                        }`}
                        alt={item?.service_image_icon_alt_tag}
                        class="img-fluid p-0"
                      />
                    </div>
                    <div class="feature-content">
                      <h3 class="h5">{item?.service_title} </h3>
                      <p>{item?.service_description}</p>
                      <h6 class="mt-4">{item?.step_title}</h6>
                      <ul class="list-unstyled mb-0">
                        <li class="py-1">
                          <i class="fas fa-check-circle me-2 text-primary"></i>
                          {item?.step_text1}
                        </li>
                        <li class="py-1">
                          <i class="fas fa-check-circle me-2 text-primary"></i>
                          {item?.step_text2}
                        </li>
                        <li class="py-1">
                          <i class="fas fa-check-circle me-2 text-primary"></i>
                          {item?.step_text3}
                        </li>
                      </ul>
                    </div>
                    <span class="border-line"></span>
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

export default Style2;
