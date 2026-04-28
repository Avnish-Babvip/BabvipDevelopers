import React, { useEffect } from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style7 = ({ data }) => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init(); // Initialize AOS
    }
  }, []);

  return (
    <>
      <section
        class="hero-section ptb-custom-120 bg-dark text-white"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat bottom left`,
        }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-xl-5 col-lg-5">
              <div
                class="hero-content-wrap text-center text-xl-start text-lg-start mt-5 mt-lg-0 mt-xl-0"
                data-aos="fade-up"
              >
                <h1 class="fw-bold display-5">{data?.banner_title}</h1>
                <p class="lead">{data?.banner_description}</p>
                <div class="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                  <SubscribeForm buttonText="Subscribe" />
                  <ul class="nav subscribe-feature-list mt-3 justify-content-lg-start justify-content-md-center">
                    <li class="nav-item">
                      <span class="ms-0">
                        <i class="far fa-check-circle text-primary me-2"></i>
                        {data?.banner_tag_line1}
                      </span>
                    </li>
                    <li class="nav-item">
                      <span>
                        <i class="far fa-check-circle text-primary me-2"></i>
                        {data?.banner_tag_line2}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 mt-lg-5 mt-4">
              <div class="hero-img-wrap position-relative" data-aos="fade-up">
                <div class="hero-screen-wrap">
                  <div class="phone-screen">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.banner_image1
                      }`}
                      alt={data?.banner_image1_alt_tag}
                      class="position-relative img-fluid"
                    />
                  </div>
                  <div class="mac-screen">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.banner_image2
                      }`}
                      alt={data?.banner_image2_alt_tag}
                      class="position-relative img-fluid rounded-custom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="customer-section pb-120 bg-dark">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-12">
              <ul class="customer-logos-grid text-center list-unstyled mb-0">
                {data?.top_client_image?.map((item, idx) => (
                  <li key={idx}>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.top_client_image
                      }`}
                      alt={item?.icon_alt_tag}
                      width="150"
                      class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    />
                  </li>
                ))}
              </ul>
              <p
                class="text-center mt-lg-5 mt-4 mb-0 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {data?.trusted_title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style7;
