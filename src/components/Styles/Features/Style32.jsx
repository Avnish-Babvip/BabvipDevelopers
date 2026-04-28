import React from "react";

const Style32 = ({ data }) => {
  return (
    <>
      <section class="ptb-60 bg-dark-black">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-5">
                <h2 class="mb-4">{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row">
            {data?.step_data.map((item, idx) => (
              <div class="col-lg-3 col-md-6">
                <div class="crypto-timeline bg-soft-black mb-4 mb-lg-0">
                  <div class="crypto-timeline-icon">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                    />
                  </div>
                  <p>{item?.step_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style32;
