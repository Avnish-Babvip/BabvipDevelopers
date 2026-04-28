import React from "react";
import { Link } from "react-router-dom";

const Style30 = ({ data }) => {
  return (
    <>
      <section class="crypto-promo bg-dark-black pt-120 pb-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center mb-5">
                <h2>{data?.title}</h2>
                <p class="px-5">{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row">
            {data?.step_data.map((item, idx) => (
              <div class="col-lg-4 col-md-6">
                <div class="bg-soft-black crypto-promo-box mb-30 mb-lg-0">
                  <div class="crypt-promo-icon">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      className="pb-2 img-fluid"
                    />
                  </div>
                  <h4 class="fw-medium">{item?.step_title}</h4>
                  <p>{item?.step_description}</p>
                  {item?.link_text && (
                    <Link
                      to={item?.link_url}
                      target="_blank"
                      class="link-with-icon text-decoration-none"
                    >
                      {item?.link_text} <i class="fas fa-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style30;
