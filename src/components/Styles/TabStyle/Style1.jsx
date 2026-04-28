import React from 'react'
import { Link } from 'react-router-dom'

const Style1 = ({data}) => {
  return (
<section class="why-us ptb-120">
                <div class="container">
                    <div class="row justify-content-center align-content-center">
                        <div class="col-md-10 col-lg-8">
                            <div class="section-heading text-center mb-4">
                                <h5 class="h6 text-primary">{data?.sub_title}</h5>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav justify-content-center feature-tab-list mt-4" id="nav-tab" role="tablist">
                            {data?.tab_data?.map((item,idx)=>(    <li class="nav-item" role="presentation">
                                    <Link class={`nav-link ${!idx && "active"}`} to={`#tab-${idx}`} data-bs-toggle="tab" data-bs-target={`#tab-${idx+1}`} role="tab" aria-selected="true">{item?.tab_title}</Link>
                                </li>
                               ))}
                            </ul>
                            <div class="tab-content bg-dark text-white rounded-custom" id="nav-tabContent">
                            {data?.tab_data?.map((item,idx)=>(    <div class={`tab-pane fade ${!idx && "active show"} `} id={`tab-${idx+1}`} role="tabpanel">
                                    <div class="row justify-content-center text-center p-50 pb-0">
                                        <div class="col-lg-8">
                                            <div class="feature-tab-info">
                                                <p class="lead">{item?.tab_description}</p>
                                                <Link to={item?.button_url} class="btn btn-outline-primary text-decoration-none">{item?.button_text}</Link>
                                            </div>

                                            <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item?.tab_image}`} alt={item?.tab_image_alt_tag}  class="img-fluid mt-5"/>
                                        </div>
                                    </div>
                                </div>
                               ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Style1