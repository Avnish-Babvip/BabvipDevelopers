import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Autoplay} from "swiper/modules";

const Style23 = () => {

    const swiperRef = useRef(null);
    useEffect(() => {
      const swiperInstance = new Swiper(".aih-testimonial", {
        modules: [ Autoplay],
        autoplay: true,
        loop: true,
        speed: 700,
        spaceBetween: 24,
        pagination: {
          el: '.risk-slider__pagination',
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
    <div class="aih-testimonial-area ah-bg pt-120 pb-60">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-6 col-lg-8">
                        <div class="text-center">
                            <h2 class="aih-title aih-color-two fs-48 fw-600 mb-40">What amazing Feedback
                                Client Use Quiety </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="aih-testimonial swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                            <div class="swiper-wrapper" ><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_2.png" alt=""/>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_3.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-next" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_1.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-active" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_3.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_1.png" alt=""/>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                    <div class="aih-testimonial-item bgc-white p-4 rounded-16 position-relative">
                                        <div class="d-flex justify-content-between">
                                            <ul class="list-unstyled d-flex align-items-center gap-2">
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                                <li class="aih-color-four"><i class="fa-sharp fa-solid fa-star"></i></li>
                                            </ul>
                                            <svg width="47" height="32" viewBox="0 0 47 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M38.7016 32C37.2328 32 36.1068 31.3823 35.3234 30.1469C34.5401 28.9096 34.4911 27.6364 35.1766 26.3273L38.1875 20.3636H32.3125C30.6969 20.3636 29.3143 19.7935 28.1648 18.6531C27.0133 17.5147 26.4375 16.1455 26.4375 14.5455V5.81818C26.4375 4.21818 27.0133 2.84897 28.1648 1.71054C29.3143 0.570181 30.6969 0 32.3125 0H41.125C42.7406 0 44.1242 0.570181 45.2757 1.71054C46.4252 2.84897 47 4.21818 47 5.81818V18.9818C47 19.4182 46.9628 19.8672 46.8884 20.3287C46.8159 20.7884 46.6573 21.2121 46.4125 21.6L42.2266 29.8182C41.8839 30.497 41.3943 31.0303 40.7578 31.4182C40.1214 31.8061 39.4359 32 38.7016 32ZM12.2641 32C10.7953 32 9.66927 31.3823 8.88594 30.1469C8.1026 28.9096 8.05365 27.6364 8.73906 26.3273L11.75 20.3636H5.875C4.25938 20.3636 2.87679 19.7935 1.72725 18.6531C0.57575 17.5147 0 16.1455 0 14.5455V5.81818C0 4.21818 0.57575 2.84897 1.72725 1.71054C2.87679 0.570181 4.25938 0 5.875 0H14.6875C16.3031 0 17.6867 0.570181 18.8382 1.71054C19.9877 2.84897 20.5625 4.21818 20.5625 5.81818V18.9818C20.5625 19.4182 20.5263 19.8672 20.4538 20.3287C20.3794 20.7884 20.2198 21.2121 19.975 21.6L15.7891 29.8182C15.4464 30.497 14.9568 31.0303 14.3203 31.4182C13.6839 31.8061 12.9984 32 12.2641 32Z" fill="#D7D7D7"></path>
                                            </svg>
                                        </div>
                                        <p class="ca-two-body-clr mb-0">Interactively redefine progressive networks whereas
                                            wireless interfaces. Globally conceptualize robust supply chains after
                                            client-focused niches. Enthusiastically provide.</p>
                                        <h6 class="aih-color-two fs-20 fw-600 mt-20 mb-0">Logan jon deo</h6>
                                        <p class="ca-two-body-clr fs-14 ff-dmsans">Director at Webflow </p>
                                        <div class="aih-testimonial-img position-absolute">
                                            <img src="assets/img/ai_home/testimonial_2.png" alt=""/>
                                        </div>
                                    </div>
                                </div></div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Style23