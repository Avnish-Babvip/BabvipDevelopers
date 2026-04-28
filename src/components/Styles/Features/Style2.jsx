import React from "react";

const Style2 = ({ data }) => {
  return (
    <section class="feature-section-two bg-light-subtle pt-40">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="section-heading">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
              <ul class="list-unstyled mt-5">
                {data?.step_data?.map((item, idx) => (
                  <li class="d-flex align-items-start mb-4">
                    <div class="icon-box rounded me-4">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        className=" object-fit-contain p-0"
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
            <div class="feature-img-wrap position-relative d-flex flex-column align-items-end">
              <ul class="img-overlay-list list-unstyled position-absolute">
                <li class="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <i class="fas fa-check bg-primary text-white rounded-circle"></i>
                  <h6 class="mb-0">{data?.banner_tag_line1}</h6>
                </li>
                <li class="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <i class="fas fa-check bg-primary text-white rounded-circle"></i>
                  <h6 class="mb-0">{data?.banner_tag_line2}</h6>
                </li>
                <li class="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <i class="fas fa-check bg-primary text-white rounded-circle"></i>
                  <h6 class="mb-0">{data?.banner_tag_line3}</h6>
                </li>
              </ul>
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  data?.image
                }`}
                alt={data?.image_alt_tag}
                class="img-fluid rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style2;
