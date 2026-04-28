import React from "react";

const Style31 = ({ data }) => {
  return (
    <>
      <section class="crypto-customer-counter bg-dark-black ptb-60">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="crypto-customer-counter">
                <div class="counter-content section-title mb-30">
                  <h2 class="mb-4">{data?.title}</h2>
                  <p>{data?.description}</p>
                </div>
                <div class="counter-box mb-5 mb-lg-0">
                  <div class="row">
                    {data?.step_data.map((item, idx) => (
                      <div class="col-lg-4 col-md-4">
                        <div class="single-counter-box bg-soft-black mb-3 mb-md-0">
                          <h5 class="h4">{item?.step_title}</h5>
                          <span>{item?.step_subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="maps-img text-lg-center">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image
                  }`}
                  alt={data?.image_alt_tag}
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style31;
