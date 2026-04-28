import React from "react";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  return (
    <section class="integration-section ptb-80">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-3">
            <div class="integration-list-wrap">
              {data?.left_icon?.slice(0, 1).map((item, idx) => (
                <a
                  href="#"
                  class="integration-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.left_image_icon
                    }`}
                    alt={item?.left_icon_alt_tag}
                    class="img-fluid rounded-circle"
                  />
                </a>
              ))}
              {data?.left_icon?.slice(1, 2).map((item, idx) => (
                <a
                  href="#"
                  class="integration-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.left_image_icon
                    }`}
                    alt={item?.left_icon_alt_tag}
                    class="img-fluid rounded-circle"
                  />
                </a>
              ))}
              {data?.left_icon?.slice(2, 3).map((item, idx) => (
                <a
                  href="#"
                  class="integration-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.left_image_icon
                    }`}
                    alt={item?.left_icon_alt_tag}
                    class="img-fluid rounded-circle"
                  />
                </a>
              ))}

              {data?.left_icon?.slice(3, 4).map((item, idx) => (
                <a
                  href="#"
                  class="integration-4"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.left_image_icon
                    }`}
                    alt={item?.left_icon_alt_tag}
                    class="img-fluid rounded-circle"
                  />
                </a>
              ))}
              {data?.left_icon?.slice(4, 5).map((item, idx) => (
                <a
                  href="#"
                  class="integration-5"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.left_image_icon
                    }`}
                    alt={item?.left_icon_alt_tag}
                    class="img-fluid rounded-circle"
                  />
                </a>
              ))}
              {data?.left_icon?.slice(5, 6).map((item, idx) => (
                <a
                  href="#"
                  class="integration-6"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.left_image_icon
                    }`}
                    alt={item?.left_icon_alt_tag}
                    class="img-fluid rounded-circle"
                  />
                </a>
              ))}
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="section-heading text-center my-5 my-lg-0 my-xl-0">
              <h4 class="text-primary h5">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              {data?.button_url && (
                <Link to={data?.button_url} class="mt-4 btn btn-primary">
                  {data?.button_text}
                </Link>
              )}
            </div>
          </div>
          <div class="col-lg-3">
            <div class="col-lg-4">
              <div class="integration-list-wrap">
                {data?.right_icon?.slice(0, 1).map((item, idx) => (
                  <a
                    href="#"
                    class="integration-7"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.right_image_icon
                      }`}
                      alt={item?.right_icon_alt_tag}
                      class="img-fluid rounded-circle"
                    />
                  </a>
                ))}
                {data?.right_icon?.slice(1, 2).map((item, idx) => (
                  <a
                    href="#"
                    class="integration-8"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.right_image_icon
                      }`}
                      alt={item?.right_icon_alt_tag}
                      t="integration"
                      class="img-fluid rounded-circle"
                    />
                  </a>
                ))}
                {data?.right_icon?.slice(2, 3).map((item, idx) => (
                  <a
                    href="#"
                    class="integration-9"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.right_image_icon
                      }`}
                      alt={item?.right_icon_alt_tag}
                      class="img-fluid rounded-circle"
                    />
                  </a>
                ))}

                {data?.right_icon?.slice(3, 4).map((item, idx) => (
                  <a
                    href="#"
                    class="integration-10"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.right_image_icon
                      }`}
                      alt={item?.right_icon_alt_tag}
                      class="img-fluid rounded-circle"
                    />
                  </a>
                ))}
                {data?.right_icon?.slice(4, 5).map((item, idx) => (
                  <a
                    href="#"
                    class="integration-11"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.right_image_icon
                      }`}
                      alt={item?.right_icon_alt_tag}
                      class="img-fluid rounded-circle"
                    />
                  </a>
                ))}
                {data?.right_icon?.slice(5, 6).map((item, idx) => (
                  <a
                    href="#"
                    class="integration-12"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.right_image_icon
                      }`}
                      alt={item?.right_icon_alt_tag}
                      class="img-fluid rounded-circle"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-100">
          {data?.step_data?.map((item, idx) => (
            <div key={idx} class="col-lg-5 col-md-12">
              <Link
                to={item?.step_button_url}
                class="mb-4 mb-lg-0 mb-xl-0 position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
              >
                <div class="position-relative connected-app-content">
                  <div class="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      width="40"
                      class="img-fluid"
                    />
                  </div>
                  <h5>{item?.step_title}</h5>
                  <p class="mb-0 text-body">{item?.step_description}</p>
                </div>
                <span class="position-absolute integration-badge badge px-3 py-2 bg-primary-soft text-primary">
                  {item?.step_button_text}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Style1;
