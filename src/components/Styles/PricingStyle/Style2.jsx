import React from "react";
import { Link } from "react-router-dom";

const Style2 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section
      class="pricing-section position-relative overflow-hidden bg-dark text-white pt-60"
      style={{
        background: `url('${assetRoute}/assets/img/page-header-bg.svg')no-repeat center center`,
      }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="section-heading text-center z-5 position-relative">
              <h4 class="h5 text-warning">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description} </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="pricing-content-wrap mb--100 bg-white rounded-custom shadow-lg border d-fle z-10 position-relative">
              <div class="price-feature-col pricing-feature-info left-radius bg-primary-soft p-5">
                <ul class="list-unstyled pricing-feature-list pricing-included-list mb-0">
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer1 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer1}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer2 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer2}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer3 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer3}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer4 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer4}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer5 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer5}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer6 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer6}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer7 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer7}
                  </li>
                  <li class="py-1">
                    <i
                      class={`${
                        data?.plan_offer8 ? "text-primary" : "text-transparent"
                      } fas fa-check-circle  me-2`}
                    ></i>{" "}
                    {data?.plan_offer8}
                  </li>
                </ul>
              </div>
              <div class="price-feature-col pricing-action-info p-5">
                <ul
                  class="nav nav-pills mb-4 pricing-tab-list"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Monthly
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      class=""
                      tabindex="-1"
                    >
                      Yearly
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  {data?.step_data?.map((item, idx) => (
                    <>
                      {item?.plan_type === "monthly" ? (
                        <div
                          class="tab-pane fade active show"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <h3 class="h5">{item?.plan_title}</h3>
                          <p>{item?.plan_description}</p>
                          <div class="pricing-price mt-5">
                            <h4 class="h1 fw-bold">
                              ₹{item?.plan_price}
                              <span>/Month</span>
                            </h4>
                          </div>
                          <Link
                            to={item?.plan_button_url}
                            class="btn btn-primary mt-3"
                          >
                            {item?.plan_button_text}
                          </Link>
                        </div>
                      ) : (
                        <div
                          class="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <h3 class="h5">{item?.plan_title}</h3>
                          <p>{item?.plan_description}</p>
                          <div class="pricing-price mt-5">
                            <h4 class="h1 fw-bold">
                              ₹{item?.plan_price} <span>/Year</span>
                            </h4>
                          </div>
                          <Link
                            to={item?.plan_button_url}
                            class="btn btn-primary mt-3"
                          >
                            {item?.plan_button_text}
                          </Link>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5"></div>
      <div class="white-space-100 bg-white w-100"></div>
    </section>
  );
};

export default Style2;
