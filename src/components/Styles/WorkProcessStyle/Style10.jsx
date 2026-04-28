import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";

const Style10 = ({ data }) => {
  const parallaxRef = useRef(null); // Reference for the parallax container

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init(); // Initialize AOS
    }

    if (parallaxRef.current) {
      new Parallax(parallaxRef.current, {
        relativeInput: true,
        clipRelativeInput: true,
      });
    }
  }, []);
  return (
    <>
      <section class="work-process ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6">
              <div class="section-heading text-center " data-aos="fade-up">
                <h4 class="h5 text-primary">{data?.sub_title}</h4>
                <h2>{data?.title}</h2>
                <p>{data?.description} </p>
              </div>
            </div>
          </div>
          <div class="row d-flex align-items-center">
            {Array.isArray(data?.step_data) &&
              data?.step_data.map((item, idx) => (
                <>
                  {" "}
                  <div class="col-md-6 col-lg-3">
                    <div
                      class="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-3 mb-lg-0 "
                      data-aos="fade-up"
                      data-aos-delay="50"
                    >
                      <div class="process-icon border border-light bg-custom-light rounded-custom p-3">
                        <span class="h2 mb-0 text-primary fw-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <h3 class="h5">{item?.step_title}</h3>
                      <p class="mb-0">{item?.step_description}</p>
                    </div>
                  </div>
                  {idx < data?.step_data.length - 1 && (
                    <div class="dots-line first"></div>
                  )}
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style10;
