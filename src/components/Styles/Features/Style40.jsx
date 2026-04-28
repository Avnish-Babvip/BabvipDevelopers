import { Link } from "react-router-dom";

const Style40 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="crm-support-area pt-100 pb-60 bg-white">
        <div class="container">
          <div class="crm-support-box position-relative z-1">
            <div class="row align-items-center g-5 g-xl-3">
              <div class="col-xl-6">
                <div class="crm-title">
                  <span class="crm-subtitle">
                    {data?.sub_title}{" "}
                    <img
                      src={`${assetRoute}/assets/img/shape/arrow-red.png`}
                      alt="arrow"
                      class="ms-1"
                    />
                  </span>
                  <h2 class="text-white mb-0">{data?.title}</h2>
                  {data?.button_text && (
                    <Link
                      to={data?.button_url}
                      target="_blank"
                      class="mt-40 btn crm-primary-btn"
                    >
                      {data?.button_text}
                    </Link>
                  )}
                </div>
              </div>
              <div class="col-xl-6">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="row g-4">
                      {data?.step_data.map(
                        (item, index) =>
                          index < 2 && (
                            <div class="col-lg-12">
                              <div
                                class={`crm-counter-box bg-white rounded ${
                                  !index && "mt--90"
                                }`}
                              >
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/${item?.step_image}`}
                                  alt={item?.step_image_icon_alt_tag}
                                  className="img-fluid"
                                />
                                <h3 class="mt-3 mb-1">
                                  <span class="counter crl-text">
                                    {item?.step_title}
                                  </span>
                                </h3>
                                <p class="mb-0">{item?.step_sub_title}</p>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row g-4">
                      {data?.step_data.map(
                        (item, index) =>
                          index > 1 && (
                            <div class="col-lg-12">
                              <div
                                class={`crm-counter-box bg-white rounded ${
                                  index > 2 && "mb--40 ms-xl-2"
                                }`}
                              >
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/${item?.step_image}`}
                                  alt={item?.step_image_icon_alt_tag}
                                  className="img-fluid"
                                />
                                <h3 class="mt-3 mb-1">
                                  <span class="counter clr-text">
                                    {" "}
                                    {item?.step_title}
                                  </span>
                                </h3>
                                <p class="mb-0">{item?.step_sub_title}</p>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style40;
