import React from "react";

const Style11 = ({ data }) => {
  return (
    <>
      <div class="aih-info-card-lg-area ah-bg ptb-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="text-center">
                <h2 class="aih-title aih-color-two fs-48 fw-600 mb-20">
                  {data?.title}
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            {data?.step_data.map((item, idx) => (
              <div class="col-xl-4 col-md-6" key={idx}>
                <div class="aih-info-card-item bgc-white aih-shadow-hover p-4 ptb-30 rounded-10 mt-20">
                  <div class="d-flex align-items-center gap-2">
                    <img
                      src={`${
                        import.meta.env.VITE_REACT_APP_IMAGE_PATH
                      }/${item?.step_image}`}
                      alt={item?.step_image_icon_alt_tag}
                    />
                    <h5 class="aih-color-two fs-24 fw-600">
                      {item?.step_title}
                    </h5>
                  </div>
                  <p class="ca-two-body-clr mt-20 mb-0">
                    {item?.step_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style11;
