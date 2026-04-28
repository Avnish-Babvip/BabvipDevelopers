import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"; // Import Navigation styles


const Style21 = () => {

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-testimonial-wrapper", {
      modules: [Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.digi-nav-control .swiper-button-next',
        prevEl: '.digi-nav-control .swiper-button-prev'
      }
    });
    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);
  return (
    <>
    <div class="digi-testimonial">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="text-center mb-5">
                                <div>
                                    <span class="span-arrow text-pink">Customer Feedback</span>
                                    <img src="assets/img/arro-right.svg" class="img-fluid" alt="arrow"/>
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
                                <div class="swiper digi-testimonial-wrapper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div class="swiper-wrapper" ><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                            <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                                                <div class="text-center text-md-start">
                                                    <img src="assets/img/digi-t-1.png" class="me-md-4 mb-4 mb-md-0" alt="Person"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-3">
                                                        "Agency X helped us to reach our business goals"
                                                    </h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Vitae, aliquet duis pellentesque pretium mattis
                                                        orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                                                        commod.
                                                    </p>
                                                    <h6 class="m-0">Kyle Johnston</h6>
                                                    <span class="text-orange fs-sm text-muted">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                            <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                                                <div class="text-center text-md-start">
                                                    <img src="assets/img/digi-t-1.png" class="me-md-4 mb-4 mb-md-0" alt="Person"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-3">
                                                        "Agency X helped us to reach our business goals"
                                                    </h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Vitae, aliquet duis pellentesque pretium mattis
                                                        orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                                                        commod.
                                                    </p>
                                                    <h6 class="m-0">Kyle Johnston</h6>
                                                    <span class="text-orange fs-sm text-muted">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 3" >
                                            <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                                                <div class="text-center text-md-start">
                                                    <img src="assets/img/digi-t-1.png" class="me-md-4 mb-4 mb-md-0" alt="Person"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-3">
                                                        "Agency X helped us to reach our business goals"
                                                    </h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Vitae, aliquet duis pellentesque pretium mattis
                                                        orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                                                        commod.
                                                    </p>
                                                    <h6 class="m-0">Kyle Johnston</h6>
                                                    <span class="text-orange fs-sm text-muted">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                            <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                                                <div class="text-center text-md-start">
                                                    <img src="assets/img/digi-t-1.png" class="me-md-4 mb-4 mb-md-0" alt="Person"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-3">
                                                        "Agency X helped us to reach our business goals"
                                                    </h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Vitae, aliquet duis pellentesque pretium mattis
                                                        orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                                                        commod.
                                                    </p>
                                                    <h6 class="m-0">Kyle Johnston</h6>
                                                    <span class="text-orange fs-sm text-muted">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                            <div class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                                                <div class="text-center text-md-start">
                                                    <img src="assets/img/digi-t-1.png" class="me-md-4 mb-4 mb-md-0" alt="Person"/>
                                                </div>
                                                <div>
                                                    <h5 class="mb-3">
                                                        "Agency X helped us to reach our business goals"
                                                    </h5>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Vitae, aliquet duis pellentesque pretium mattis
                                                        orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                                                        commod.
                                                    </p>
                                                    <h6 class="m-0">Kyle Johnston</h6>
                                                    <span class="text-orange fs-sm text-muted">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div></div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                <div class="digi-nav-control">
                                    <span class="swiper-button-prev shadow-sm" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-11d416539d87f35d"><i class="fas fa-arrow-left"></i></span>
                                    <span class="swiper-button-next shadow-sm" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-11d416539d87f35d"><i class="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Style21