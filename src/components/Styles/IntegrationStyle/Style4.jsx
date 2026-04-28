import React from "react";

const Style4 = ({ data }) => {
  return (
    <section class="image-feature pt-60 pb-120">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 col-12 order-lg-1">
            <div class="feature-img-content">
              <div
                class="section-heading aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
              <ul
                class="list-unstyled d-flex flex-wrap list-two-col mb-0 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {data?.step_data?.map((item, idx) => (
                  <li>
                    <div class="icon-box">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        className="img-fluid object-fit-contain p-0"
                      />
                    </div>
                    <h3 class="h5">{item?.step_title}</h3>
                    <p>{item?.step_description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12 order-lg-0">
            <div class="feature-img-holder p-lg-5 pt-3">
              <div class="bg-primary-soft p-lg-5 p-3 rounded-custom position-relative d-block feature-img-wrap">
                <div class="position-relative">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_image1_alt_tag}
                    class="img-fluid rounded-custom position-relative aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  />
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image1
                    }`}
                    alt={data?.banner_image2_alt_tag}
                    class="img-fluid rounded-custom shadow position-absolute top--100 left--100 hide-medium aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                </div>
                <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style4;
