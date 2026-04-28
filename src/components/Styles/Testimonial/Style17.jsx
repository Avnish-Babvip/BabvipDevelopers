import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style17 = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".sc-feedback-slider", {
      modules: [ Autoplay],
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
    <section class="sc-feedback-section dg-feedback-bg padding-top-large-2 pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9">
                        <div class="section-title text-center">
                            <h2 class="mb-2 clr-text">Trust Members Are Saying.</h2>
                            <p class="text-dg-color">Globally envisioneer an expanded array of methods of empowerment and
                                out-of-the-box ideas. Completely deliver open-source strategic theme.</p>
                        </div>
                    </div>
                </div>
                <div class="sc-feedback-slider swiper mt-40 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper"><div class="sc-feedback-card swiper-slide bg-white rounded swiper-slide-duplicate swiper-slide-duplicate-next" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                            <span class="quote-icon d-block">
                                <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00907893 27.3024C0.00907893 32.9165 4.55993 37.4674 10.1739 37.4674C15.788 37.4674 20.3389 32.9165 20.3389 27.3024C20.3389 21.6883 15.788 17.1375 10.1739 17.1375C9.02018 17.1375 7.91575 17.3387 6.88184 17.6931C9.16937 4.57353 19.4001 -3.88712 9.91624 3.07616C-0.599954 10.7977 -0.00218389 26.9918 0.00958324 27.2885C0.00958324 27.2932 0.00907893 27.2973 0.00907893 27.3024Z" fill="#ECECEC"></path>
                                    <path d="M22.3714 27.3024C22.3714 32.9165 26.9223 37.4674 32.5364 37.4674C38.1505 37.4674 42.7013 32.9165 42.7013 27.3024C42.7013 21.6883 38.1504 17.1375 32.5363 17.1375C31.3824 17.1375 30.2781 17.3387 29.2442 17.6931C31.5317 4.57353 41.7625 -3.88712 32.2786 3.07616C21.7624 10.7977 22.3601 26.9918 22.3719 27.2885C22.3719 27.2932 22.3714 27.2973 22.3714 27.3024Z" fill="#ECECEC"></path>
                                </svg>
                            </span>
                            <h5 class="sc-heading-color mb-3 mt-4">Amaizing Support!</h5>
                            <p class="text-dg-color mb-20">Interactively redefine progressive networks wire less interfaces.
                                Globally conceptualize robust supply chains after client-focused niches. Enthusiastically
                                provide.</p>
                            <ul class="sc-star-list list-unstyled d-flex align-items-center mb-4 mt-1">
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <img src="assets/img/software-company/client-md-3.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                <div class="ms-4">
                                    <h5 class="mb-1 sc-heading-color">Logan jon deo</h5>
                                    <span class="text-dg-color fs-sm">Director at Webflow</span>
                                </div>
                            </div>
                        </div>
                        <div class="sc-feedback-card swiper-slide bg-white rounded swiper-slide-prev" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                            <span class="quote-icon d-block">
                                <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00907893 27.3024C0.00907893 32.9165 4.55993 37.4674 10.1739 37.4674C15.788 37.4674 20.3389 32.9165 20.3389 27.3024C20.3389 21.6883 15.788 17.1375 10.1739 17.1375C9.02018 17.1375 7.91575 17.3387 6.88184 17.6931C9.16937 4.57353 19.4001 -3.88712 9.91624 3.07616C-0.599954 10.7977 -0.00218389 26.9918 0.00958324 27.2885C0.00958324 27.2932 0.00907893 27.2973 0.00907893 27.3024Z" fill="#ECECEC"></path>
                                    <path d="M22.3714 27.3024C22.3714 32.9165 26.9223 37.4674 32.5364 37.4674C38.1505 37.4674 42.7013 32.9165 42.7013 27.3024C42.7013 21.6883 38.1504 17.1375 32.5363 17.1375C31.3824 17.1375 30.2781 17.3387 29.2442 17.6931C31.5317 4.57353 41.7625 -3.88712 32.2786 3.07616C21.7624 10.7977 22.3601 26.9918 22.3719 27.2885C22.3719 27.2932 22.3714 27.2973 22.3714 27.3024Z" fill="#ECECEC"></path>
                                </svg>
                            </span>
                            <h5 class="sc-heading-color mb-3 mt-4">Absolutely Superb!</h5>
                            <p class="text-dg-color mb-20">Interactively redefine progressive networks wire less interfaces.
                                Globally conceptualize robust supply chains after client-focused niches. Enthusiastically
                                provide.</p>
                            <ul class="sc-star-list list-unstyled d-flex align-items-center mb-4 mt-1">
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <img src="assets/img/software-company/client-md-1.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                <div class="ms-4">
                                    <h5 class="mb-1 sc-heading-color">Logan jon deo</h5>
                                    <span class="text-dg-color fs-sm">Director at Webflow</span>
                                </div>
                            </div>
                        </div>
                        <div class="sc-feedback-card swiper-slide bg-white rounded swiper-slide-active" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                            <span class="quote-icon d-block">
                                <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00907893 27.3024C0.00907893 32.9165 4.55993 37.4674 10.1739 37.4674C15.788 37.4674 20.3389 32.9165 20.3389 27.3024C20.3389 21.6883 15.788 17.1375 10.1739 17.1375C9.02018 17.1375 7.91575 17.3387 6.88184 17.6931C9.16937 4.57353 19.4001 -3.88712 9.91624 3.07616C-0.599954 10.7977 -0.00218389 26.9918 0.00958324 27.2885C0.00958324 27.2932 0.00907893 27.2973 0.00907893 27.3024Z" fill="#ECECEC"></path>
                                    <path d="M22.3714 27.3024C22.3714 32.9165 26.9223 37.4674 32.5364 37.4674C38.1505 37.4674 42.7013 32.9165 42.7013 27.3024C42.7013 21.6883 38.1504 17.1375 32.5363 17.1375C31.3824 17.1375 30.2781 17.3387 29.2442 17.6931C31.5317 4.57353 41.7625 -3.88712 32.2786 3.07616C21.7624 10.7977 22.3601 26.9918 22.3719 27.2885C22.3719 27.2932 22.3714 27.2973 22.3714 27.3024Z" fill="#ECECEC"></path>
                                </svg>
                            </span>
                            <h5 class="sc-heading-color mb-3 mt-4">Amazing Service!</h5>
                            <p class="text-dg-color mb-20">Interactively redefine progressive networks wire less interfaces.
                                Globally conceptualize robust supply chains after client-focused niches. Enthusiastically
                                provide.</p>
                            <ul class="sc-star-list list-unstyled d-flex align-items-center mb-4 mt-1">
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <img src="assets/img/software-company/client-md-2.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                <div class="ms-4">
                                    <h5 class="mb-1 sc-heading-color">Logan jon deo</h5>
                                    <span class="text-dg-color fs-sm">Director at Webflow</span>
                                </div>
                            </div>
                        </div>
                        <div class="sc-feedback-card swiper-slide bg-white rounded swiper-slide-next" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                            <span class="quote-icon d-block">
                                <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00907893 27.3024C0.00907893 32.9165 4.55993 37.4674 10.1739 37.4674C15.788 37.4674 20.3389 32.9165 20.3389 27.3024C20.3389 21.6883 15.788 17.1375 10.1739 17.1375C9.02018 17.1375 7.91575 17.3387 6.88184 17.6931C9.16937 4.57353 19.4001 -3.88712 9.91624 3.07616C-0.599954 10.7977 -0.00218389 26.9918 0.00958324 27.2885C0.00958324 27.2932 0.00907893 27.2973 0.00907893 27.3024Z" fill="#ECECEC"></path>
                                    <path d="M22.3714 27.3024C22.3714 32.9165 26.9223 37.4674 32.5364 37.4674C38.1505 37.4674 42.7013 32.9165 42.7013 27.3024C42.7013 21.6883 38.1504 17.1375 32.5363 17.1375C31.3824 17.1375 30.2781 17.3387 29.2442 17.6931C31.5317 4.57353 41.7625 -3.88712 32.2786 3.07616C21.7624 10.7977 22.3601 26.9918 22.3719 27.2885C22.3719 27.2932 22.3714 27.2973 22.3714 27.3024Z" fill="#ECECEC"></path>
                                </svg>
                            </span>
                            <h5 class="sc-heading-color mb-3 mt-4">Amaizing Support!</h5>
                            <p class="text-dg-color mb-20">Interactively redefine progressive networks wire less interfaces.
                                Globally conceptualize robust supply chains after client-focused niches. Enthusiastically
                                provide.</p>
                            <ul class="sc-star-list list-unstyled d-flex align-items-center mb-4 mt-1">
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <img src="assets/img/software-company/client-md-3.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                <div class="ms-4">
                                    <h5 class="mb-1 sc-heading-color">Logan jon deo</h5>
                                    <span class="text-dg-color fs-sm">Director at Webflow</span>
                                </div>
                            </div>
                        </div>
                    <div class="sc-feedback-card swiper-slide bg-white rounded swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                            <span class="quote-icon d-block">
                                <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00907893 27.3024C0.00907893 32.9165 4.55993 37.4674 10.1739 37.4674C15.788 37.4674 20.3389 32.9165 20.3389 27.3024C20.3389 21.6883 15.788 17.1375 10.1739 17.1375C9.02018 17.1375 7.91575 17.3387 6.88184 17.6931C9.16937 4.57353 19.4001 -3.88712 9.91624 3.07616C-0.599954 10.7977 -0.00218389 26.9918 0.00958324 27.2885C0.00958324 27.2932 0.00907893 27.2973 0.00907893 27.3024Z" fill="#ECECEC"></path>
                                    <path d="M22.3714 27.3024C22.3714 32.9165 26.9223 37.4674 32.5364 37.4674C38.1505 37.4674 42.7013 32.9165 42.7013 27.3024C42.7013 21.6883 38.1504 17.1375 32.5363 17.1375C31.3824 17.1375 30.2781 17.3387 29.2442 17.6931C31.5317 4.57353 41.7625 -3.88712 32.2786 3.07616C21.7624 10.7977 22.3601 26.9918 22.3719 27.2885C22.3719 27.2932 22.3714 27.2973 22.3714 27.3024Z" fill="#ECECEC"></path>
                                </svg>
                            </span>
                            <h5 class="sc-heading-color mb-3 mt-4">Absolutely Superb!</h5>
                            <p class="text-dg-color mb-20">Interactively redefine progressive networks wire less interfaces.
                                Globally conceptualize robust supply chains after client-focused niches. Enthusiastically
                                provide.</p>
                            <ul class="sc-star-list list-unstyled d-flex align-items-center mb-4 mt-1">
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                <li><i class="fa-sharp fa-solid fa-star"></i></li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <img src="assets/img/software-company/client-md-1.png" alt="not found" class="rounded-circle flex-shrink-0"/>
                                <div class="ms-4">
                                    <h5 class="mb-1 sc-heading-color">Logan jon deo</h5>
                                    <span class="text-dg-color fs-sm">Director at Webflow</span>
                                </div>
                            </div>
                        </div></div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </section>
        </>
  )
}

export default Style17