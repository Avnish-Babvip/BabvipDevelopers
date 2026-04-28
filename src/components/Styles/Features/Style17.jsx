import React from "react";

const Style17 = ({ data }) => {
  return (
    <section class="crm-brand pt-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center">
              <h4 class="mb-0 fw-semibold clr-text">{data?.title}</h4>
            </div>
          </div>
        </div>
        <div class="crm-brands-row mt-4">
          {data?.step_data.map((item, idx) => (
            <div class="crm-brand-item">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  item?.step_image
                }`}
                alt={item?.step_image_icon_alt_tag}
                class=" img-fluid "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Style17;
