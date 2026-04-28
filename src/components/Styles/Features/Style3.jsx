import React from 'react'

const Style3 = ({data}) => {
  return (
    <section class="feature-section">
    <div class="container-fluid">
        <div class="feature-container mx-lg-5 position-relative bg-dark p-100 rounded-custom">
            <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.banner_bg_image}`} alt={data?.banner_bg_alt_tag} class="feature-bg-mockup position-absolute w-100 h-100 left-0 right-0 top-0 bottom-0 rounded-custom"/>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="feature-bg-img-content position-relative z-5">
                            <div class="section-heading">
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>

                            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-5 mb-0">
                            {data?.step_data?.map((item,idx)=>(     <li key={idx} class="py-3">
                                    <h3 class="feature-number text-primary mb-2">{item?.step_title}</h3>
                                    <p>{item?.step_description}</p>
                                </li>
                       ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Style3