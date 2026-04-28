import React from "react";

const Style8 = ({ data }) => {
  return (
    <>
      <div class="aih-process-area ah-bg ptb-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="text-center">
                <h2 class="aih-title aih-color-two fs-48 fw-600 mb-40">
                  {data?.title}{" "}
                </h2>
              </div>
            </div>
          </div>
          <div class="aih-process-box bg-white border rounded-16 overflow-hidden">
            <div class="row align-items-center">
              {Array.isArray(data?.step_data) &&
                data?.step_data.map((item, idx) => (
                  <div class="col-xl-3 col-lg-6">
                    <div class="aih-process-item p-4  position-relative">
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="aih-color-two fs-24 fw-600 mb-0">
                          {item?.step_title}
                        </h5>
                        <p class="aih-step ca-two-body-clr fs-14 ff-dmsans fw-500 p-1 border rounded-16 mb-0">
                          Step 0{idx + 1}
                        </p>
                      </div>
                      <p class="ca-two-body-clr mt-20 mb-0">
                        {item?.step_description}
                      </p>
                    </div>
                  </div>
                ))}
              <div class="col-xl-3 col-lg-6">
                <div class="aih-process-item text-center p-3">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image1
                    }`}
                    alt={data?.image1_alt_tag}
                    class="aih-process-img img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style8;
