import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Pagination ,Autoplay} from "swiper/modules";
import "swiper/css/pagination"; // Import Navigation styles

const Style22 = () => {

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".sc-feedback-slider", {
      modules: [ Pagination ,Autoplay],
      autoplay: true,
      loop: true,
      speed: 700,
      spaceBetween: 24,
      centeredSlides: false,
      pagination: {
        el: '.itc-testimonial-slide-dots',
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
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
    <div class="it-company-testimonial-area it-company-bg-two ptb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h2 class="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">Our Client Testimonials
                            </h2>
                        </div>
                        <div class="sc-feedback-slider swiper mt-40 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                            <div class="swiper-wrapper" ><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_2.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala_2.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_3.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala_3.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-active" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-next" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_2.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala_2.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_3.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala_3.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-next" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                    <div class="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_2.png" alt="" class="mb-4"/>
                                        <p class="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically integrate dynamic
                                            solutions
                                            vis maximizing ROI. Appropriately target leadership. Interactively orchestrate
                                        </p>
                                        <div class="d-flex align-items-center">
                                            <img src="assets/img/it_company/testimoniala_2.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                            <div class="ms-4">
                                                <h5 class="mb-1 it-company-color fs-16 fw-600">Logan jon deo</h5>
                                                <span class="text-dg-color fs-sm">Director at Webflow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            <div class="itc-testimonial-slide-dots d-flex align-items-center justify-content-center mt-40 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </div>
        </div></>
  )
}

export default Style22