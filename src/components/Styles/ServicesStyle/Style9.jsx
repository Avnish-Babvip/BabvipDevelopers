import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
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
      <section class="feature-section ptb-120  bg-light-subtle">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-heading text-center " data-aos="fade-up">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="feature-grid">
                {data?.step_data.map((item, idx) => (
                  <>
                    {" "}
                    {idx === 0 && (
                      <div
                        class="feature-card bg-white shadow-sm highlight-card rounded-custom p-5 "
                        data-aos="fade-up"
                        data-aos-delay="50"
                      >
                        <div class="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_icon_alt_tag}
                          />
                        </div>
                        <div class="feature-content">
                          <h3 class="h5">{item?.step_title}</h3>
                          {item?.step_description}
                        </div>
                        {item?.link_text && (
                          <Link
                            to={item?.link_url}
                            target="_blank"
                            class="link-with-icon text-decoration-none mt-3"
                          >
                            {item?.link_text} <i class="fas fa-arrow-right"></i>
                          </Link>
                        )}
                      </div>
                    )}
                    {idx !== 0 && (
                      <div
                        class="feature-card bg-white shadow-sm rounded-custom p-5 "
                        data-aos="fade-up"
                        data-aos-delay="50"
                      >
                        <div class="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.step_image}`}
                            alt={item?.step_image_icon_alt_tag}
                          />
                        </div>
                        <div class="feature-content">
                          <h3 class="h5">{item?.step_title}</h3>
                          <p class="mb-0">{item?.step_description}</p>
                        </div>
                        {item?.link_text && (
                          <Link
                            to={item?.link_url}
                            target="_blank"
                            class="link-with-icon text-decoration-none mt-3"
                          >
                            {item?.link_text} <i class="fas fa-arrow-right"></i>
                          </Link>
                        )}
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style9;
