import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"; // Import Navigation styles

const Style11 = () => {

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".ins-feedback-slider", {
      modules: [Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 800,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
      },
      breakpoints: {
        0: {
          spaceBetween: 40
        },
        1200: {
          spaceBetween: 90
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
    <section class="ins-feedback-section pb-120" style={{"background-image": `url('assets/img/insurance/map-bg.png')`}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-8">
                        <div class="ins-title text-center">
                            <div class="d-flex align-items-center justify-content-center mb-1">
                                <span class="subtitle fw-bold">Testimonial</span>
                                <span class="ms-1">
                                  <svg width="103" height="13" viewBox="0 0 103 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.696533 6.60583L93.3054 6.60584" stroke="#0EE7C5" stroke-width="1.49369"></path>
                                      <path d="M102.266 6.60263L93.3036 11.7769L93.3036 1.42833L102.266 6.60263Z" fill="#0EE7C5"></path>
                                  </svg>
                              </span>
                            </div>
                            <h2 class="ins-heading">What Our <mark>Customers are</mark> Talking About!</h2>
                        </div>
                    </div>
                </div>
                <div class="ins-feedback-slider-wrapper overflow-hidden mt-4">
                    <div class="ins-feedback-slider swiper overflow-visible swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div class="swiper-wrapper" ><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="2 / 2"  data-swiper-slide-index="1">
                                <div class="row g-4 justify-content-between align-items-center">
                                    <div class="col-xl-6 col-lg-6 order-2 order-lg-1">
                                        <div class="ins-feedback-content text-center text-lg-start">
                                            <h4 class="ins-heading mb-3">Awesome Service</h4>
                                            <p class="mb-30"><span class="me-4"></span> “I have gotten at least 50 times the value from Quiety. After using Surely my business conceptualize cutting edgeultivate strategic e-business for sustainable outsourcing."</p>
                                            <div class="ins-feedback-author d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <img src="assets/img/testimonial/4.jpg" alt="client" class="rounded-circle flex-shrink-0"/>
                                                <div class="ins-author-info ms-3 text-start">
                                                    <h6 class="ins-heading mb-0">Kareem Pelletier</h6>
                                                    <span class="fs-sm">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-5 order-1 order-lg-2">
                                        <div class="client-thumb text-center">
                                            <img src="assets/img/insurance/client-1.png" alt="client" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" role="group" aria-label="1 / 2"  data-swiper-slide-index="0">
                                <div class="row g-4 justify-content-between align-items-center">
                                    <div class="col-xl-6 col-lg-6 order-2 order-lg-1">
                                        <div class="ins-feedback-content text-center text-lg-start">
                                            <h4 class="ins-heading mb-3">Awesome Service</h4>
                                            <p class="mb-30"><span class="me-4"></span> “I have gotten at least 50 times the value from Quiety. After using Surely my business conceptualize cutting edgeultivate strategic e-business for sustainable outsourcing."</p>
                                            <div class="ins-feedback-author d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <img src="assets/img/testimonial/4.jpg" alt="client" class="rounded-circle flex-shrink-0"/>
                                                <div class="ins-author-info ms-3 text-start">
                                                    <h6 class="ins-heading mb-0">Kareem Pelletier</h6>
                                                    <span class="fs-sm">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-5 order-1 order-lg-1">
                                        <div class="client-thumb text-center">
                                            <img src="assets/img/insurance/client-1.png" alt="client" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-active" role="group" aria-label="2 / 2"  data-swiper-slide-index="1">
                                <div class="row g-4 justify-content-between align-items-center">
                                    <div class="col-xl-6 col-lg-6 order-2 order-lg-1">
                                        <div class="ins-feedback-content text-center text-lg-start">
                                            <h4 class="ins-heading mb-3">Awesome Service</h4>
                                            <p class="mb-30"><span class="me-4"></span> “I have gotten at least 50 times the value from Quiety. After using Surely my business conceptualize cutting edgeultivate strategic e-business for sustainable outsourcing."</p>
                                            <div class="ins-feedback-author d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <img src="assets/img/testimonial/4.jpg" alt="client" class="rounded-circle flex-shrink-0"/>
                                                <div class="ins-author-info ms-3 text-start">
                                                    <h6 class="ins-heading mb-0">Kareem Pelletier</h6>
                                                    <span class="fs-sm">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-5 order-1 order-lg-2">
                                        <div class="client-thumb text-center">
                                            <img src="assets/img/insurance/client-1.png" alt="client" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" role="group" aria-label="1 / 2"  data-swiper-slide-index="0">
                                <div class="row g-4 justify-content-between align-items-center">
                                    <div class="col-xl-6 col-lg-6 order-2 order-lg-1">
                                        <div class="ins-feedback-content text-center text-lg-start">
                                            <h4 class="ins-heading mb-3">Awesome Service</h4>
                                            <p class="mb-30"><span class="me-4"></span> “I have gotten at least 50 times the value from Quiety. After using Surely my business conceptualize cutting edgeultivate strategic e-business for sustainable outsourcing."</p>
                                            <div class="ins-feedback-author d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <img src="assets/img/testimonial/4.jpg" alt="client" class="rounded-circle flex-shrink-0"/>
                                                <div class="ins-author-info ms-3 text-start">
                                                    <h6 class="ins-heading mb-0">Kareem Pelletier</h6>
                                                    <span class="fs-sm">Founder &amp; CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-5 order-1 order-lg-1">
                                        <div class="client-thumb text-center">
                                            <img src="assets/img/insurance/client-1.png" alt="client" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        <div class="swiper-btn-prev swiper-control-btn" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b89e8c10fa58cf937"><i class="fa-solid fa-arrow-left"></i></div>
                        <div class="swiper-btn-next swiper-control-btn" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-b89e8c10fa58cf937"><i class="fa-solid fa-arrow-right"></i></div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Style11