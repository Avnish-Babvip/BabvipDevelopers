import React from 'react'
import { Link } from 'react-router-dom'

const Style14 = ({data}) => {
  return (
    <section class="payment-news-letter pt-60 pb-120">
    <div class="container">
        <div class="row ptb-120 align-items-center">
            <div class="col-lg-5">
                <div class="mb-5 me-3 mb-lg-0">
                    <h2 class="mb-4">{data?.title1}</h2>
                    <p>
                    {data?.description1}
                    </p>
                    <div class="payment-store-btn mt-4">
                        <ul class="list-unstyled m-0">
                        {data?.step_data?.map((item,idx)=>(               <li class="d-inline-block me-2 mb-3 mb-md-0">
                                <Link class="d-flex align-items-center text-decoration-none rounded shadow-lg" to={item?.step_image_url}>    <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item?.step_image}`} alt={item?.step_image_alt_tag}   className="img-fluid object-fit-contain p-0" />
                  </Link>
                            </li>
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="p-cta-right position-relative mt-5 mt-lg-0">
                    <div class="p-cta-img text-center position-relative">
                        <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.banner_image}`} alt={data?.banner_image_alt_tag}/>
                    </div>
                    <ul class="payment-cta-shape list-unstyled">
                        <li>
                            <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image1}`} alt={data?.image1_alt_tag}/>
                        </li>
                        <li><img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image2}`} alt={data?.image2_alt_tag}/></li>
                        <li>
                            <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image3}`} alt={data?.image3_alt_tag} class="shadow-lg rounded-circle" />
                        </li>
                        <li>
                            <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image4}`} alt={data?.image4_alt_tag} class="rouned-circle shadow-md" />
                        </li>
                        <li><img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.image5}`} alt={data?.image5_alt_tag}/></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center">
                    <h3>{data?.title2}</h3>
                    <p class="">
                    {data?.description2}
                    </p>
                    <form action="">
                        <div class="payment-email-form d-flex position-relative">
                            <input type="text" class="mail-input form-control shadow-none" placeholder="Enter your email"/>
                            <button class="payment-btn position-absolute end-0">
                                Subscribe Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Style14