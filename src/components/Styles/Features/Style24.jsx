import { Link } from "react-router-dom";

const Style24 = ({ data }) => {
  return (
    <>
      <section class="counter-with-video pt-80 pb-120" id="cyber-about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="cyber-about-img text-center mb-30 mb-lg-0">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                    data?.image1
                  }`}
                  alt={data?.image1_alt_tag}
                  class="img-fluid"
                />
                <div class="row g-0">
                  <div class="col-lg-5">
                    <div class="sheild-img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          data?.image2
                        }`}
                        alt={data?.image2_alt_tag}
                        class="img-fluid d-none d-lg-block"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="pe-2">
                      <div class="cyber-about-count-box d-md-flex bg-white p-4 mt-3">
                        <div class="pe-3">
                          <h2>{data?.bottom_title}</h2>
                        </div>
                        <div>
                          <h5 class="h6">{data?.bottom_sub_title}</h5>
                          <p class="mb-0">{data?.bottom_description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="pt-5">
                <div class="section-heading mb-5">
                  <h5 class="h6 text-primary">{data?.sub_title}</h5>
                  <h2>{data?.title}</h2>
                  <p>{data?.description}</p>
                </div>
                <div class="row">
                  {data?.step_data.map((item, idx) => (
                    <div class="col-lg-6">
                      <div class="bg-white cyber-about-box mb-4 p-4 mb-lg-0">
                        <div class="cyber-about-icon">
                          <i class="fas fa-thumbs-up"></i>
                        </div>
                        <h5 class="h-6">{item?.step_description}</h5>
                        <p>{item?.step_title}</p>
                        {item?.step_button_text && (
                          <Link
                            to={item?.step_button_url}
                            target="_blank"
                            class="link-with-icon text-decoration-none"
                          >
                            {item?.step_button_text}{" "}
                            <i class="fas fa-arrow-right"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style24;
