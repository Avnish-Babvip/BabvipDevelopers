import { useEffect } from "react";
import { Link } from "react-router-dom";

const Style17 = ({ data }) => {
  useEffect(() => {
    const $ = window.jQuery;

    if ($ && typeof $.fn.isotope === "function") {
      const $container = $(".masonry-outer");

      // Initialize Isotope
      $container.isotope({
        itemSelector: ".masonry-item",
        transitionDuration: "1s",
        originLeft: true,
        stamp: ".stamp",
      });

      // Layout again after images load
      $container.imagesLoaded().progress(() => {
        $container.isotope("layout");
      });

      // Filter buttons
      $(".masonry-filter li").on("click", function () {
        const selector = $(this).find("a").attr("data-filter");
        $(".masonry-filter li").removeClass("active");
        $(this).addClass("active");
        $container.isotope({ filter: selector });
        return false;
      });
    }
  }, []);
  return (
    <>
      <style>
        {`
.large-title-block {
	margin-bottom: 50px;
	margin-top: 0px;
}
.large-title-block  .row{
	display: flex;
	align-items: center;
}
.large-title-block .large-title-info p{margin-bottom: 0px;}
.large-title-block  .section-head{
	margin-right: 90px;
}

.large-title-block  .section-head.left {
	margin-bottom: 0px;
  }

.large-title-block.full-content  {
	padding: 30px  !important;
	margin-bottom: 50px  !important;
}

.large-title-block.full-content2 {
	padding-top: 56px;
	padding-bottom: 50px;
}
.large-title-block.sx-all-white{color: var(--white);}
.large-title-block.sx-all-white .sx-title{color: var(--white);}
.large-title-block.sx-all-white .sx-head-s-title,
.large-title-block.sx-all-white .large-title-info p{color: #e5e5e5;}

@media only screen and (max-width:991px) {
	.large-title-block{
		margin-bottom: 30px;
	}
	.large-title-block  .section-head.left{
		margin-right: 0px;
		margin-bottom: 15px;
	}
}
@media only screen and (max-width:768px) {
	.large-title-block.full-content {
		padding-top: 30px;
		margin-bottom: 0px;
		margin-top: 30px;
	}
	.large-title-block.full-content2 {
		padding-top: 0px;
		padding-bottom: 0px;
	}
}

@media only screen and (max-width:767px) {
	.large-title-block {
		margin-bottom: 20px;
	}
}

.section-head.center{text-align: center;	max-width: 750px;margin-left: auto;	margin-right: auto; margin-bottom: 60px;}
@media only screen and (max-width: 767px) {
	.section-head.center{margin-bottom: 30px;}
}
.section-head.center.max-900{ max-width: 900px;}
.section-head2{margin-bottom:30px;}
.section-head.right{text-align: right;}

.section-head.left{margin-bottom:30px;}

.section-head .sx-head-s-title,
.section-head2 .sx-head-s-title{
	font-family:var(--common-family);
	
	font-weight: 400;
	font-size: 14px;
	padding-bottom: 10px;
	text-transform: uppercase;
	color: #0F6AD1;
}
.section-head .sx-head-l-title .sx-title{
	font-family:var(--title-family);
	margin-bottom: 0px;
	
	font-weight: 800;
	font-size: 32px;
	text-transform: capitalize;
	color: var(--secondary);
}
.section-head .sx-head-l-title .sx-title2,
.section-head2 .sx-head-l-title .sx-title2{
	font-family:var(--title-family);
	margin-bottom: 0px;
	font-weight: 800;
	font-size: 60px;
	text-transform: capitalize;
	color: var(--secondary);

}
@media only screen and (max-width: 1024px){
	.section-head .sx-head-l-title .sx-title2,
	.section-head2 .sx-head-l-title .sx-title2{
		font-size: 48px;
	}
}

@media only screen and (max-width: 991px){
	.section-head .sx-head-l-title .sx-title2,
	.section-head2 .sx-head-l-title .sx-title2{
		font-size: 30px;
	}
}
@media only screen and (max-width: 640px){
	.section-head .sx-head-l-title .sx-title2,
	.section-head2 .sx-head-l-title .sx-title2{
		font-size: 22px;
	}
}

.section-head-two {
	position: relative;
}

.section-head-two:before {
	position: absolute;
	content: '';
	background-color: var(--primary);
	top: -6px;
	left: 0px;
	height: 4px;
	width: 50px;
	z-index: 0;
	margin-top: 0px;
	transform: translateY(-50%);
}

.large-title .section-head-two.left {
	max-width: 100%;
}

.section-head-two.center {
	max-width: 620px;
	margin-left:auto;
	margin-right: auto;
	margin-top: 6px;
	text-align: center;
}

.section-head-two.center:before {
	left: 50%;
	transform: translateX(-50%);
	top: -6px;
}

.section-head-two.center .sx-title-two {
	margin-bottom: 60px;
}


.section-head-two.when-bg-dark .sx-title-two {
	color: var(--white);
}

.section-head-two.left {
	text-align: left;
	max-width: 620px;
	margin-top: 9px;
}

.section-head-two.left .sx-title-two {
	margin-bottom: 35px;
}

.large-title .section-head-two.left {
	max-width: 100%;
}


@media only screen and (max-width: 768px) {

	.section-head-two.center .sx-title-two {
		margin-bottom: 30px;
	}
	.section-head-two.left .sx-title-two {
		margin-bottom: 30px;
	}
}


/*-------------------------------------
	Section Head Part 
-------------------------------------*/

.section-head {
	margin-bottom: 0px;
}
.section-head p{
	margin-bottom: 30px;
}
.section-head.no-margin {
	margin-bottom: 0;
}



.text-center.section-head p {
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
}

@media only screen and (max-width:420px) {
	.masonry-item .sx-post-info {
		padding-bottom: 0px;
	}
	.masonry-item .sx-post-title h2.post-title {
		line-height: 14px;
	}
	.masonry-item .sx-post-title h2.post-title a {
		font-size: 14px;
		line-height: none;
	}
	.news-grid .sx-post-text {
		display: none;
	}
}



}

    .sx-img-overlay:before, .sx-img-overlay:after {
    content: "";
    background-color: #000;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    opacity: 0.5;
    z-index: 1;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
}

 .sx-case-study-bx{
	position: relative;
}
.sx-case-study-bx .sx-case-media{position: relative;}
.sx-case-study-bx .sx-case-media .sx-case-link{
	position: absolute;
	top: 60%;
	left: 50%;
	background-color: #fff;
	width: 70px;
	height: 70px;
	text-align: center;
	border-radius: 50%;
	transform: translate(-50% , -50%);
	font-size: 36px;
	z-index: 2;
	color: #000000;
	transition:all 0.4s linear;
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sx-case-study-bx:hover .sx-case-media .sx-case-link{
	opacity: 1;
	top: 50%;
}
.sx-case-study-bx .sx-case-info{
	background-color: #fdfdfd;
	padding: 25px 50px 30px;
	margin: -50px 50px 50px 0px;
	position: relative;
	z-index: 1;
}
.sx-case-study-bx.three-blocks .sx-case-info{
	background-color: #fbfbfb;
	padding: 25px 30px 30px;
	margin: -50px 30px 30px 0px;
	position: relative;
	z-index: 1;
}
.sx-case-study-bx .sx-s-title {
	font-family: var(--common-family);
	
	font-weight: 400;
	font-size: 14px;
	line-height: 30px;
	text-transform: uppercase;
	color:  #0F6AD1;
}
.sx-case-study-bx .sx-l-title .sx-title {
	font-family: var(--title-family);
	margin-bottom: 20px;
	
	font-weight: 800;
	font-size: 25px;
	line-height:35px;
	text-transform: capitalize;
	color: var(--secondary);
}
@media only screen and (max-width:991px){
	.sx-case-study-bx .sx-case-info{
		padding: 20px;
		margin-bottom: 0px;
	}
	.sx-case-study-bx .sx-l-title .sx-title {
		font-size: 18px;
		line-height: 26px;
	}
}
@media only screen and (max-width:575px){
	.sx-case-study-bx .sx-case-info{
		padding: 20px;
		margin: 0px;
	}
}


.sx-img-overlay{position: relative; overflow: hidden;}
.sx-img-overlay:before,
.sx-img-overlay:after{
	content:"";
	background-color: #0F6AD1;
	position:absolute; 
	left:0; 
	top:0; 
	width:0; 
	height:0;
	opacity:0.5; 
	z-index:1;
	-webkit-transition:all 0.3s linear;
	-moz-transition:all 0.3s linear;
	-ms-transition:all 0.3s linear;
	-o-transition:all 0.3s linear;
	transition:all 0.3s linear;
}

.sx-img-overlay:before,
.sx-img-overlay:after {
	height:100%;
}
.sx-img-overlay:after {
	left:auto;
	right:0;
}
.sx-img-overlay:hover:before,
.sx-img-overlay:hover:after,

.sx-overlay-effect:hover .sx-img-overlay:before,
.sx-overlay-effect:hover .sx-img-overlay:after { 
	width:100%;
	opacity:0.5;
}

    .site-button {
    background-color: var(--bg-light);
    color: var(--secondary-light);
}
    .site-button, .site-button-secondry {
    font-family: var(--common-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    color: var(--secondary-light);
    border-radius: 100px;
    padding: 12px 20px;
    display: inline-flex
;
    align-items: center;
}
 .site-button:hover, .btn-link:hover {
    color: #fff;
    text-decoration: none;
    background: #175cff;
}
    .masonary-img{
        border-style: none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    }

`}
      </style>

      <div class="section-full pt-30 sx-bg-light mobile-page-padding">
        <div class="container">
          <div class="section-content">
            <div class="large-title-block">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="section-head left">
                    <div class="sx-head-s-title">{data?.sub_title}</div>
                    <div class="sx-head-l-title">
                      <h2 class="sx-title" style={{ color: "#000000" }}>
                        {data?.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div
                    class=" large-title-info "
                    style={{ "font-size": "14px" }}
                  >
                    <p>{data?.main_description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="masonry-outer mfp-gallery news-grid clearfix row">
              {data?.step_data?.map((item, index) => (
                <div class="masonry-item  col-lg-6 col-md-6 col-sm-12 m-b30">
                  <Link to={`/portfolio/${item?.port_slug}`}>
                    <div class="sx-case-study-bx sx-overlay-effect">
                      <div class="sx-case-media sx-img-overlay">
                        <a>
                          <img
                            className="masonary-img"
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item.step_image_icon}`}
                            alt={
                              item.step_image_icon_alt_tag || "portfolio photo"
                            }
                          />
                        </a>
                        <a class="sx-case-link">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z"
                              fill="black"
                            ></path>
                          </svg>
                        </a>
                      </div>

                      <div class="sx-case-info">
                        <div class="sx-s-title">
                          {" "}
                          {item?.category || <br />}
                        </div>
                        <a class="sx-l-title" href="portfolio-detail.html">
                          <h2 class="sx-title" style={{ color: "#000000" }}>
                            {item?.step_title}
                          </h2>
                        </a>
                        <div class="sx-case-readmore">
                          <a
                            title="READ MORE"
                            rel="bookmark"
                            class="site-button icon"
                          >
                            <i class="fa  fa-long-arrow-right"></i>{" "}
                            <span
                              className="ms-2 "
                              style={{ cursor: "pointer", fontSize: "14px" }}
                            >
                              Read More
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style17;
