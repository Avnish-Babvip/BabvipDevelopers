import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Pagination  ,Autoplay} from "swiper/modules";
import "swiper/css/pagination"; // Import Navigation styles

const Style16 = () => {

    const swiperRef = useRef(null);
    useEffect(() => {
      const swiperInstance = new Swiper(".ca-client-feedback", {
        modules: [ Pagination ,Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 1000,
        autoplay: true,
        pagination: {
          el: '.ca-client-feedback__pagination'
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
    <div class="section-space">
            <div class="section-space--sm-bottom">
                <div class="container">
                    <div class="row g-4 align-items-center justify-content-between">
                        <div class="col-lg-6 col-xl-5">
                            <h3 class="heading-3 font-weight-semibold clr-text mb-lg-0">
                                What They Say <span class="clr-red">Our Clients</span> About Us
                            </h3>
                        </div>
                        <div class="col-lg-6">
                            <p class="mb-0 heading-font fs-20 clr-paragraph">
                                Level up your recovery with email campaigns proven highly effective for leading eCommerce
                                brands backed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-11 ms-xl-auto">
                        <div class="row g-4 gy-5 align-items-center">
                            <div class="col-lg-6">
                                <img src="assets/img/creative-agency/testimonial-img.png" alt="image" class="img-fluid"/>
                            </div>
                            <div class="col-lg-6">
                                <div class="swiper ca-client-feedback swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div class="swiper-wrapper" ><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                            <img src="assets/img/creative-agency/quote-img.png" alt="image" class="img-fluid margin-bottom-6"/>
                                            <h6 class="heading-6 clr-text margin-bottom-10">
                                                “Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia
                                                consequat duis enim mollit exercitation. Intrinsicly leverage existing
                                                global opportunities whereas cross-platform
                                                core competencies.”
                                            </h6>
                                            <div class="d-flex gap-3">
                                                <div class="flex-shrink-0 width-10 height-1 bgc-primary-gradient margin-top-2">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="heading-6 clr-text font-weight-semibold">
                                                        Peter Parker
                                                    </h6>
                                                    <p class="mb-0 clr-paragraph">
                                                        Visual Designer | Quiety
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                            <img src="assets/img/creative-agency/quote-img.png" alt="image" class="img-fluid margin-bottom-6"/>
                                            <h6 class="heading-6 clr-text margin-bottom-10">
                                                “Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia
                                                consequat duis enim mollit exercitation. Intrinsicly leverage existing
                                                global opportunities whereas cross-platform
                                                core competencies.”
                                            </h6>
                                            <div class="d-flex gap-3">
                                                <div class="flex-shrink-0 width-10 height-1 bgc-primary-gradient margin-top-2">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="heading-6 clr-text font-weight-semibold">
                                                        Peter Parker
                                                    </h6>
                                                    <p class="mb-0 clr-paragraph">
                                                        Visual Designer | Quiety
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 3" >
                                            <img src="assets/img/creative-agency/quote-img.png" alt="image" class="img-fluid margin-bottom-6"/>
                                            <h6 class="heading-6 clr-text margin-bottom-10">
                                                “Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia
                                                consequat duis enim mollit exercitation. Intrinsicly leverage existing
                                                global opportunities whereas cross-platform
                                                core competencies.”
                                            </h6>
                                            <div class="d-flex gap-3">
                                                <div class="flex-shrink-0 width-10 height-1 bgc-primary-gradient margin-top-2">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="heading-6 clr-text font-weight-semibold">
                                                        Peter Parker
                                                    </h6>
                                                    <p class="mb-0 clr-paragraph">
                                                        Visual Designer | Quiety
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                            <img src="assets/img/creative-agency/quote-img.png" alt="image" class="img-fluid margin-bottom-6"/>
                                            <h6 class="heading-6 clr-text margin-bottom-10">
                                                “Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia
                                                consequat duis enim mollit exercitation. Intrinsicly leverage existing
                                                global opportunities whereas cross-platform
                                                core competencies.”
                                            </h6>
                                            <div class="d-flex gap-3">
                                                <div class="flex-shrink-0 width-10 height-1 bgc-primary-gradient margin-top-2">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="heading-6 clr-text font-weight-semibold">
                                                        Peter Parker
                                                    </h6>
                                                    <p class="mb-0 clr-paragraph">
                                                        Visual Designer | Quiety
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                            <img src="assets/img/creative-agency/quote-img.png" alt="image" class="img-fluid margin-bottom-6"/>
                                            <h6 class="heading-6 clr-text margin-bottom-10">
                                                “Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia
                                                consequat duis enim mollit exercitation. Intrinsicly leverage existing
                                                global opportunities whereas cross-platform
                                                core competencies.”
                                            </h6>
                                            <div class="d-flex gap-3">
                                                <div class="flex-shrink-0 width-10 height-1 bgc-primary-gradient margin-top-2">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="heading-6 clr-text font-weight-semibold">
                                                        Peter Parker
                                                    </h6>
                                                    <p class="mb-0 clr-paragraph">
                                                        Visual Designer | Quiety
                                                    </p>
                                                </div>
                                            </div>
                                        </div></div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                <div class="swiper-pagination ca-client-feedback__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Style16