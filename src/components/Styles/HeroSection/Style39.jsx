import { Link } from "react-router-dom";

const Style39 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <>
      <section class="payment-feature-img pt-200">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="payment-feature-img-left mb-5 mb-lg-0">
                <h2 class="mb-4">{data?.title}</h2>
                <p class="mb-4">{data?.description}</p>
                {data?.button_text && (
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn-gradient-sqr"
                  >
                    {data?.button_text}
                  </Link>
                )}
              </div>
            </div>
            <div class="col-lg-7">
              <div class="payment-feature-img-right text-center position-relative mt-5 mt-lg-0">
                <div class="payment-feature-mockup position-relative">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.banner_image
                    }`}
                    alt={data?.banner_image_alt_tag}
                    class="img-fluid"
                  />
                </div>
                <div class="payment-feture-shape">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image1
                    }`}
                    alt={data?.image1_alt_tag}
                    class="shape-one shadow-lg"
                  />
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image2
                    }`}
                    alt={data?.image2_alt_tag}
                    class="shape-two shadow-lg"
                  />
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image3
                    }`}
                    alt={data?.image3_alt_tag}
                    class="shape-three"
                  />
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image4
                    }`}
                    alt={data?.image5_alt_tag}
                    class="shape-four"
                  />
                  <img
                    src={`${assetRoute}/assets/img/pink-circle.png`}
                    class="shape-five"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style39;
