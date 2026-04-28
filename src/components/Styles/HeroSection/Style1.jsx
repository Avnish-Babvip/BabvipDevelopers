import React from "react";

const Style1 = ({ data }) => {
  return (
    <section
      class="page-header position-relative overflow-hidden ptb-custom-120 bg-dark"
      style={{
        background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          data?.banner_bg_image
        }) no-repeat bottom left`,
        backgroundSize: "100% 100%",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <h1 class="display-5 fw-bold">{data?.banner_title}</h1>
            <p class="lead">{data?.banner_description}</p>
          </div>
        </div>
        {/* <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div> */}
      </div>
    </section>
  );
};

export default Style1;
