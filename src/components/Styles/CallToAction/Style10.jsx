import React from "react";
import { Link } from "react-router-dom";

const Style10 = ({ data }) => {
  return (
    <>
      <section class="crypto-cta pt-120 pb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center">
                <h2 class="text-white mb-4">{data?.title}</h2>
                <p class="text-muted mb-30">{data?.description}</p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn btn-primary rounded-pill"
                  >
                    {data?.button_text} <i class="fas fa-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style10;
