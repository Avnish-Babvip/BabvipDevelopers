import React from 'react'
import { Link } from 'react-router-dom'

const Style11 = ({data}) => {
  return (
    <section class="app-two-feature-two pt-60 pb-120">
    <div class="container">
        <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 col-xl-6 col-md-12">
                <div class="app-two-feature-two-img">
                    <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.banner_image}`} alt={data?.banner_image_alt_tag} class="img-fluid"/>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5">
                <div class="app-two-feature-two-right">
                    <div class="feature-content-wrap">
                        <h4 class="h6">{data?.sub_title}</h4>
                        <h2>{data?.title}</h2>
                        <p>
                        {data?.description}
                        </p>
                    </div>
                    <div class="app-two-feature-two-content">
                        <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4">
                        {data?.step_data?.map((item,idx)=>(     <li class="py-1">
                                <i class="fas fa-check-circle me-2"></i>{item?.step_title}
                            </li>
                                                ))}
                        </ul>
                        <div class="action-btns mt-5">
                            <Link to={data?.button_link} class="btn app-two-btn">{data?.button_text}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Style11