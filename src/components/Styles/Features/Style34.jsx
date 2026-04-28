const Style34 = ({ data }) => {
  return (
    <>
      <section class="ptb-120 bg-black overflow-hidden position-relative">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title mb-5 text-center">
                <h2 class="text-white">{data?.title}</h2>
                <p class="text-off-white">{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12 col-sm-12">
              <div class="game-features mb-5 mb-lg-0">
                {data?.step_data.map((item, idx) => (
                  <div class="game-feature d-flex align-items-center mb-4">
                    <div class="game-feature-icon flex-shrink-0">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_icon_alt_tag}
                        class="img-fluid"
                      />
                    </div>
                    <div class="ms-3">
                      <h5 class="text-white">{item?.step_title}</h5>
                      <p class="m-0 text-off-white">{item?.step_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
              <div class="game-feature-img position-relative">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image2
                  }`}
                  alt={data?.image2_alt_tag}
                  class="img-fluid position-relative z-5"
                />
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="feature-ellipse"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image3}`}
          alt={data?.image3_alt_tag}
          class="big-circle img-fluid"
        />
      </section>
    </>
  );
};

export default Style34;
