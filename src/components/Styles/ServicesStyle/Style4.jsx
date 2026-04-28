import React from 'react'
import { Link } from 'react-router-dom'

const Style4 = ({data}) => {
  return (
<section class="why-choose-us ptb-120">
            <div class="container">
                <div class="row justify-content-lg-between align-items-center">
                    <div class="col-lg-5 col-12">
                        <div class="why-choose-content">
                            <div class="icon-box rounded-custom shadow-sm d-inline-block">
                            <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.icon_image
}`} alt="icon" class="img-fluid" />

                            </div>
                            <h2>{data?.title}</h2>
                            <p>{data?.description}</p>
                            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                            {data?.step_service_data?.map((item,idx)=>(        <li key={idx} class="py-1"><i class="fas fa-check-circle me-2 text-primary"></i>{item?.step_title}</li>
                                      ))}                                     
                                                                                            </ul>
                                                        <Link to={data?.link_url} class="read-more-link text-decoration-none">{data?.link_text} <i class="fas fa-arrow-right ms-2"></i></Link>
                                                    </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                            <img  src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.banner_image}`}class="img-fluid" alt="feature-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Style4