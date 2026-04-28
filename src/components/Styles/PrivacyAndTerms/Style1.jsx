import React from "react";
import parse from "html-react-parser";

const Style1 = ({ data }) => {
  return (
    <section class="support-content ptb-120">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-12 col-md-4 d-none d-md-block d-lg-block">
            <h2 class="customh-5">{data?.title}</h2>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-lg-12 col-md-4 d-none d-md-block d-lg-block">
            {parse(data?.content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
