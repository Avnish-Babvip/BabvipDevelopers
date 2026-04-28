import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="sh-feedback pt-120 game-bg-dark">
        <div class="container position-relative">
          <div class="row justify-content-between">
            <div class="col-lg-4 col-md-7">
              <div class="section-title mb-4 mb-lg-0">
                <h3 class="text-white">{data?.title}</h3>
              </div>
            </div>
            <div class="col-lg-8 col-md-4">
              <div class="text-md-end">
                {data?.button_text && (
                  <Link
                    target="_blank"
                    to={data?.button_url}
                    class="game-btn-mdm text-white"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div class="row mt-5 g-4 justify-content-center">
            {data?.review.map((item, idx) => (
              <div class="col-lg-4 col-md-6">
                <div class="sh-feedback-wrapper mb-5 mb-lg-0">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.image
                    }`}
                    alt={item?.alt_tag}
                    class="clients-thumb img-fluid rounded-circle"
                  />
                  <span class="quote-icon float-end mt-3">
                    <svg
                      width="36"
                      height="27"
                      viewBox="0 0 36 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.25 4.5L13.5 0H9C4.0275 0 0 6.2775 0 11.25V27H15.75V11.25H6.75C6.75 4.5 11.25 4.5 11.25 4.5ZM27 11.25C27 4.5 31.5 4.5 31.5 4.5L33.75 0H29.25C24.2775 0 20.25 6.2775 20.25 11.25V27H36V11.25H27Z"
                        fill="#DBDBDB"
                      ></path>
                    </svg>
                  </span>
                  <p class="mt-3 text-off-white">{item?.review_description}</p>
                  <hr class="spacer" />
                  <div class="sh-feedback-bottom d-flex align-items-center justify-content-between">
                    <div class="sh-feedback-client">
                      <h6 class="mb-0 text-white">{item?.client_name}</h6>
                      <small class="text-off-white">{item?.designation}</small>
                    </div>
                    <div class="sh-feedback-rating">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.step_image
                        }`}
                        alt={item?.step_image_alt_tag}
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="position-relative pt-80"></div>
          <img
            src={`${assetRoute}/assets/img/review.png`}
            class="sh-feedback-shape z-5"
            alt="shape"
          />
        </div>
      </section>
    </>
  );
};

export default Style9;
