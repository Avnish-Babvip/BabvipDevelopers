import React from "react";

const Style37 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="digi-why pt-120">
        <div class="container">
          <div class="row align-content-center justify-content-between">
            <div class="col-lg-6 col-md-12">
              <div class="digi-why-left">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt_tag}
                  class="img-fluid"
                />
                <ul class="list-unstyled d-none d-md-block">
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image1
                      }`}
                      alt={data?.image1_alt_tag}
                      class="shadow img-fluid"
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        data?.image3
                      }`}
                      alt={data?.image3_alt_tag}
                      class="shadow img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="digi-why-right pt-4">
                <div>
                  <span class="span-arrow">{data?.sub_title}</span>
                  <img
                    src={`${assetRoute}/assets/img/arro-right.svg`}
                    class="img-fluid"
                    alt="arrow"
                  />
                </div>
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
                <div>
                  <ul class="list-unstyled mb-0 mt-5">
                    {data?.step_data.map((item, idx) => (
                      <li class="d-flex p-3 align-items-center bg-white">
                        <div class="me-3">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_icon_alt_tag}
                          />
                        </div>
                        <div>
                          <h4 class="mb-0">{item?.step_title}</h4>
                          <span>{item?.step_sub_title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style37;
