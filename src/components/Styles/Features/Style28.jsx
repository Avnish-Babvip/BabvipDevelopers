import { Link } from "react-router-dom";

const Style28 = ({ data }) => {
  return (
    <>
      <section class="app-two-feature ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="section-heading text-center">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-xl-10">
              <div class="row">
                {data?.step_data.map((item, idx) => (
                  <div class="col-xl-6 col-lg-6 col-md-12">
                    <div class="app-two-single-feature bg-white d-md-flex align-items-start mb-30">
                      <div class="app-two-single-feature-icon box-one me-3 mb-4 mb-md-0">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                        />
                      </div>
                      <div class="app-two-single-feature-content">
                        <h3 class="h5">{item?.step_title}</h3>
                        <p>{item?.step_description}</p>
                        {item?.link_text && (
                          <Link
                            to={item?.link_url}
                            target="_blank"
                            class="link-with-icon text-decoration-none"
                          >
                            {item?.link_text} <i class="fas fa-arrow-right"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style28;
