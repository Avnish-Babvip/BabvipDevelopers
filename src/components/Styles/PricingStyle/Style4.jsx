import React from "react";
import { Link } from "react-router-dom";

const Style4 = ({ data }) => {
  return (
    <>
      <section class="game-price ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-5">
                <h2 class="text-white mb-4">{data?.title}</h2>
                <p class="m-0 text-off-white">{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            {data?.step_data.map((item, index) => (
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="single-game-price mb-4 mb-lg-0">
                  <div class="d-flex align-items-center">
                    <div class=" me-3">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                      />
                    </div>
                    <div>
                      <h5 class="text-white mb-1">{item?.plan_title}</h5>
                      <span class="text-off-white">{item?.plan_sub_title}</span>
                    </div>
                  </div>
                  <p class="py-3 m-0">{item?.plan_description}</p>
                  <ul class="list-unstyled">
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer1}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer2}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer3}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer4}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer5}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer6}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer7}</span>
                    </li>
                    <li class="pb-2">
                      <i class="far fa-check-circle me-2"></i>
                      <span>{item?.plan_offer8}</span>
                    </li>
                  </ul>
                  <div class="game-price-btn">
                    {item?.plan_button_text && (
                      <Link
                        to={item?.plan_button_url}
                        target="_blank"
                        class="mt-4"
                      >
                        {" "}
                        {item?.plan_button_text}{" "}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style4;
