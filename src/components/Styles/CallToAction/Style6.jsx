import React from 'react'
import { Link } from 'react-router-dom'

const Style6 = ({data}) => {
  return (
    <section class="video-promo-with-icon">
    <div class="container">
        <div class="video-bg-with-icon" style={{"background": `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${data?.banner_bg_image})no-repeat center center / cover`}}>
            <Link to={data?.video_url} class="popup-youtube"><i class="fas fa-play"></i></Link>
        </div>
    </div>
    <div class="video-promo-icon-wrapper bg-light-subtle pt-120 pb-60">
        <div class="container">
            <div class="row">
            {data?.step_data?.map((item,idx)=>(    <div key={idx} class="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
                    <div class="single-icon-box p-0 p-lg-4">
                        <p>{item?.step_title}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
</section>
  )
}

export default Style6