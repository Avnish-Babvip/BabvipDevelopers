import React from 'react'

const Style3 = ({data}) => {
  return (
<section class="work-process ptb-60 bg-dark text-white">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6">
                            <div class="section-heading text-center aos-init aos-animate" data-aos="fade-up">
                                <h4 class="h5 text-primary">{data?.subtitle}</h4>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex align-items-center">
                    {data?.step_data?.map((item,idx)=>(             <div key={idx} class="col-md-6 col-lg-3">
                            <div class="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                            <div class="process-icon border border-light bg-custom-light rounded-custom">
                    <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item?.step_image}`} alt={item?.step_image_icon_alt_tag} class="img-fluid p-0" />
                    </div>
                                <h3 class="h5">{item?.step_title}</h3>
                                <p class="mb-0">{item?.step_description}</p>
                            </div>
                        </div>
                     ))}
                    </div>
                </div>
            </section>
  )
}

export default Style3