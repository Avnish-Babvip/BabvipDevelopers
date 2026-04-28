import React from "react";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  return (
    <section class="pricing-section ptb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-heading text-center">
              <h2>{data?.title}</h2>
              <p>{data?.description} </p>
            </div>
          </div>
        </div>
        <div class="row">
          {data?.step_data?.map((item, idx) => (
            <div key={idx} class="col-lg-4 col-md-6">
              <div
                class={`position-relative single-pricing-wrap rounded-custom ${
                  idx === 1 ? "bg-dark text-white " : " bg-white custom-shadow"
                }  p-5 mb-4 mb-lg-0`}
              >
                <div class="pricing-header mb-32">
                  <h3
                    class={`package-name ${
                      idx === 1 ? "text-warning " : " text-primary"
                    }  d-block`}
                  >
                    {item?.plan_title}
                  </h3>
                  <h4 class="display-6 fw-semi-bold">
                    ₹{item?.plan_price}
                    <span>
                      /{item?.plan_type == "yearly" ? "year" : "month"}
                    </span>
                  </h4>
                </div>
                <div class="pricing-info mb-4">
                  <ul class="pricing-feature-list list-unstyled">
                    <li>
                      <i
                        class={`${
                          item?.plan_offer1
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer1}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer2
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer2}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer3
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer3}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer4
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer4}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer5
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer5}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer6
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer6}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer7
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer7}
                    </li>
                    <li>
                      <i
                        class={`${
                          item?.plan_offer8
                            ? idx === 1
                              ? "text-warning"
                              : "text-primary"
                            : "text-transparent"
                        } fas fa-circle fa-2xs  me-2`}
                      ></i>
                      {item?.plan_offer8}
                    </li>
                  </ul>
                </div>
                <Link
                  to={item?.plan_button_url}
                  class={`btn ${
                    idx === 1 ? "btn-primary " : " btn-outline-primary"
                  } mt-2`}
                >
                  {item?.plan_button_text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Style1;
