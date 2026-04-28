import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import { Modal } from "bootstrap"; // add this
import { useNavigate } from "react-router-dom";

const ServicePlans = () => {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null);
  const { state } = useLocation();

  const { isUserLoggedIn, customerData } = useSelector(
    (state) => state.authentication,
  );
  const plans = Array.isArray(state?.plans) ? state?.plans : [];
  return (
    <>
      <section class="pricing-section ptb-20">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-heading text-center">
                <h2>{state?.name}</h2>
                <p>{state?.description}</p>
              </div>
            </div>
          </div>
          <div class="row">
            {plans?.map((item, idx) => (
              <div key={idx} class="col-lg-4 col-md-6">
                <div
                  class={`position-relative single-pricing-wrap rounded-custom ${
                    idx === 1 ? "bg-dark text-white " : "bg-white custom-shadow"
                  }  p-5 mb-4 mb-lg-0`}
                >
                  <div class="pricing-header mb-32">
                    <h3
                      class={`package-name ${
                        idx === 1 ? "text-warning " : " text-primary"
                      }  d-block`}
                    >
                      {item?.name}
                    </h3>
                    <h4 class="display-6 fw-semi-bold">
                      ₹{item?.price}
                      <span>
                        {item?.plan_type == "yearly" ? "year" : "month"}
                      </span>
                    </h4>
                  </div>
                  <div class="pricing-info mb-4">
                    <ul class="pricing-feature-list list-unstyled">
                      {item?.features?.[0]?.feature
                        ?.split(",")
                        .map((point, idx) => (
                          <p>
                            <i
                              className={`${
                                idx === 1 ? "text-warning" : "text-primary"
                              } fas fa-circle fa-2xs me-2 mt-1`}
                            ></i>
                            {point.trim()}
                          </p>
                        ))}
                    </ul>
                  </div>
                  <Link
                    to="#"
                    style={{
                      background:
                        idx === 1
                          ? "linear-gradient(90deg, #ff6600, #ff8533)"
                          : "transparent",
                      border: "1px solid #ff6600",
                      color: idx === 1 ? "#fff" : "#ff6600",
                    }}
                    onClick={(e) => {
                      e.preventDefault();

                      if (isUserLoggedIn) {
                        setModalData({
                          customer_id: customerData?.data?.id,
                          plan_id: item?.id,
                          service_id: item?.service_id,
                          category_id: state?.category_id,
                        });

                        const modalEl = document.querySelector(
                          ".bs-example-modal-xl",
                        );
                        const modal = new window.bootstrap.Modal(modalEl);
                        modal.show();
                      } else {
                        navigate("/login--signup", {
                          state: { from: window.location.pathname }, // 🔥 FIX
                        });
                      }
                    }}
                    className="btn mt-2 w-100"
                  >
                    Buy Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactModal modalData={modalData} />
    </>
  );
};

export default ServicePlans;
