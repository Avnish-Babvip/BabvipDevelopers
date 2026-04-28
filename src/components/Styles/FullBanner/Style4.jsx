import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"; // Import Navigation styles

const Style4 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-testimonial-wrapper", {
      modules: [Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".digi-nav-control .swiper-button-next",
        prevEl: ".digi-nav-control .swiper-button-prev",
      },
    });

    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    swiperRef.current.update();
    swiperRef.current.slideToLoop(0, 0); // Ensures the first slide is properly centeredza
  }, []);

  return (
    <section
      class="digi-integration bg-dark position-relative"
      style={{
        background: `url('assets/img/page-header-bg.svg')no-repeat center bottom`,
      }}
    >
      <div class="digi-testimonial">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <div>
                  <span class="span-arrow text-pink">Customer Feedback</span>
                  <img
                    src={`${assetRoute}/assets/img/arro-right.svg`}
                    class="img-fluid"
                    alt="arrow"
                  />
                </div>
                <h2 class="digi-testimonial-title">
                  Hear what our <span class="text-pink">amazing</span>
                  customers say
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="position-relative">
                <div class="swiper digi-testimonial-wrapper ">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                        <div class="text-center text-md-start">
                          <img
                            src="assets/img/digi-t-1.png"
                            class="me-md-4 mb-4 mb-md-0"
                            alt="Person"
                          />
                        </div>
                        <div>
                          <h5 class="mb-3">
                            "Agency X helped us to reach our business goals"
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vitae, aliquet duis pellentesque pretium
                            mattis orci. Vestibulum nunc diam tellus ac tempor.
                            Nulla a commod.
                          </p>
                          <h6 class="m-0">Kyle Johnston</h6>
                          <span class="text-orange fs-sm text-muted">
                            Founder &amp; CEO
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                        <div class="text-center text-md-start">
                          <img
                            src="assets/img/digi-t-1.png"
                            class="me-md-4 mb-4 mb-md-0"
                            alt="Person"
                          />
                        </div>
                        <div>
                          <h5 class="mb-3">
                            "Agency X helped us to reach our business goals"
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vitae, aliquet duis pellentesque pretium
                            mattis orci. Vestibulum nunc diam tellus ac tempor.
                            Nulla a commod.
                          </p>
                          <h6 class="m-0">Kyle Johnston</h6>
                          <span class="text-orange fs-sm text-muted">
                            Founder &amp; CEO
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                        <div class="text-center text-md-start">
                          <img
                            src="assets/img/digi-t-1.png"
                            class="me-md-4 mb-4 mb-md-0"
                            alt="Person"
                          />
                        </div>
                        <div>
                          <h5 class="mb-3">
                            "Agency X helped us to reach our business goals"
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vitae, aliquet duis pellentesque pretium
                            mattis orci. Vestibulum nunc diam tellus ac tempor.
                            Nulla a commod.
                          </p>
                          <h6 class="m-0">Kyle Johnston</h6>
                          <span class="text-orange fs-sm text-muted">
                            Founder &amp; CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="digi-nav-control">
                  <span class="swiper-button-prev shadow-sm">
                    <i class="fas fa-arrow-left"></i>
                  </span>
                  <span class="swiper-button-next shadow-sm">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="int-icon-one position-relative">
              <ul class="list-unstyled mb-0 d-none d-lg-block">
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/fa.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/fi.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/slack.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/inst.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/er.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/google.svg"
                    alt="icon"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-center">
              <div>
                <span class="span-arrow text-pink">Intergration Software </span>
                <img
                  src={`${assetRoute}/assets/img/arro-right.svg`}
                  alt="arrow"
                />
              </div>
              <h2 class="mb-4">Intergrated with 20+ Widely Used Software</h2>
              <div>
                <a
                  href="contact-us.html"
                  class="btn rounded-pill bg-orange me-3 mb-3"
                >
                  Get in touch
                </a>
                <a
                  href="integrations.html"
                  class="btn rounded-pill btn-outline-light mb-3"
                >
                  Browse all integration
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="int-icon-two position-relative">
              <ul class="list-unstyled mb-0 d-none d-lg-block">
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/slash.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/tree.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/drive.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/in.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/star.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="assets/img/digital-marketing/int-icon/twi.svg"
                    alt="icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style4;
