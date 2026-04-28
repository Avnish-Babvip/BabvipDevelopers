import React from "react";

const Style8 = ({ data }) => {
  return (
    <>
      <style>{`
      .dex-tabs.bg-tabs .nav-tabs > li > a {
	background-color: #fcfcfc;
}
      /*-------------------------------------
	4. TABS 
-------------------------------------*/
.wt-tabs:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}
@media only screen and (max-width: 767px) {
.wt-tabs .nav-tabs > li{
	float:none;
}
}
.wt-tabs p:last-child {
	margin-bottom:0;
}
/*4.1 tabs style 1 [ default ] */
.wt-tabs  .tab-pane { 
	padding:20px 0;
}
.wt-tabs  .nav-tabs > li > a { 
	color:#1a1a1a;
	font-weight:600;
	font-size:13px;
	border-radius:0px;
	padding:15px;
}
.wt-tabs .nav-tabs > li> a.active , 
.wt-tabs .nav-tabs > li > a.active:focus, 
.wt-tabs .nav-tabs > li > a.active:hover{
	background-color:#fff;
	border-color:#ddd;
	border-bottom:1px solid #FFF;
	color:#1a1a1a;
}
.wt-tabs .nav > li > a:focus, 
.wt-tabs .nav > li > a:hover{
	background-color:transparent;
} 
.wt-tabs .nav li  a:hover{
	border:1px solid transparent;
}
.wt-tabs  .nav-tabs > li > a i{ 
	margin-right:5px;
}
.wt-tabs.tabs-default.has-bg .nav-tabs > li > a { 
	color:#fff;
}


.wt-tabs.tabs-default.has-bg .nav-tabs > li > a.active, 
.wt-tabs.tabs-default.has-bg .nav-tabs > li > a.active:focus, 
.wt-tabs.tabs-default.has-bg .nav-tabs > li > a.active:hover { 
	color:#1a1a1a;
	border-color: #ddd #ddd #fff;
}
.wt-tabs.tabs-default.has-bg .tab-pane { 
	color:#fff;
}
/* tabs nav center */
.wt-tabs.nav-center > .nav-tabs{ 
	display:table;
	margin-left:auto;
	margin-right:auto;
}
/*4.2 tabs bg  [ tabs background ] */
.wt-tabs.bg-tabs .nav-tabs > li > a {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    margin-right:-1px;
	display: block;
}
.wt-tabs.bg-tabs .nav-tabs > li > a.active {
	border-bottom:1px solid transparent;
	background-color:#fff;
}
.wt-tabs.bg-tabs.has-bg .tab-pane {
	color:#fff;
}
/*4.3 tabs bg  [ tabs background ] */
.wt-tabs.vertical.bg-tabs .nav-tabs > li > a {
	border:1px solid #ddd;
}
.wt-tabs.vertical.bg-tabs .nav-tabs > li > a.active {
	border-right:1px solid transparent;
}
.wt-tabs.vertical.right.bg-tabs .nav-tabs > li > a {
	border:1px solid #ddd;
}
.wt-tabs.vertical.right.bg-tabs .nav-tabs > li > a.active {
	border-left:1px solid transparent;
}
.wt-tabs.border-top{border-top: 0px !important;}
/*4.4 tabs bg & top border  [ tabs background & top border in active ] */
.wt-tabs.border-top .nav-tabs > li > a.active {
    color: #1a1a1a;
	position: relative;
}
.wt-tabs.border-top.border.bg-tabs .nav-tabs{
	border: 0px;
}

.wt-tabs.border-top .nav-tabs > li > a.active:after {
    content:"";
	position:absolute;
	top:-1px;
	left:0;
	width:100%;
	height:3px;
	background-color:#d21e2b;
}
.wt-tabs.border-top.vertical .nav-tabs > li > a.active:after {
	top:0px;
	left:-1px;
	width:3px;
	height:100%;
}
/*4.4 tabs style 2 [ content with border outer ] */
.wt-tabs.border{border: none !important;}
.wt-tabs.border .tab-pane { 
	padding:10px ;
	border:1px solid #ddd;
	margin-top:-1px;
}
/*4.5 tabs style 3  [ left-nav ] */
.wt-tabs.vertical.tabs-default.border .nav-tabs{
	border-right: 0px;
}
.wt-tabs.vertical .nav-tabs {
	float:left;
	width:170px;
	border-bottom:none;
	border-right:1px solid #DDD;
}
.wt-tabs.border-top.vertical.bg-tabs .nav-tabs{border-right: 0px;}
@media only screen and ( max-width:720px){
.wt-tabs.vertical .nav-tabs{
	width:100%;
	float:none;
	border-right:0px;	
}
.wt-tabs.vertical .tab-content{
	width:100%;
	margin-left:0px !important;
}	
}
.wt-tabs.vertical  .tab-pane { 
	padding:10px 0 10px 20px;
}
.wt-tabs.vertical .nav-tabs li {
	float:none;
	margin-right:0px;
	width: 100%;
}
.wt-tabs.vertical .nav-tabs li a {
	margin-right:-1px;
	border-right:none;
	border-radius: 0px;
	color:#1a1a1a;
}
.wt-tabs.border-top.vertical.border.bg-tabs .nav-tabs li a{margin-right: 0px;}

.wt-tabs.vertical .nav-tabs li a.active {
	border-bottom:1px solid #ddd;
	background-color:#fff;
}
.wt-tabs.vertical .tab-content{
	border-left:1px solid #DDD;
	margin-left:169px;
}
/*4.6 tabs style 4  [ left-nav & content with border ] */
.wt-tabs.vertical.border  .tab-pane { 
	padding:20px;
	margin-left:-1px;
}
/*4.7 tabs style 5  [ right-nav ] */
.wt-tabs.vertical.right .nav-tabs {
	/* border-left: 1px solid #ddd; */
	border-right:none;
	float:right;
}
.wt-tabs.vertical.right .nav-tabs li {
	margin-right:0;
	margin-left:-1px;
}
.wt-tabs.vertical.right .nav-tabs li a {
	border-right:1px solid transparent;
	border-left:none;
}
.wt-tabs.vertical.right .nav-tabs li a.active {
	border-right:1px solid #ddd;
	border-left:none;
}
.wt-tabs.vertical.right .tab-content {
	border-left:none;
	border-right:1px solid #ddd;
	margin-right:169px;
	margin-left:0;
}
.wt-tabs.vertical.right  .tab-pane { 
	padding:10px 20px 10px 0;
}
/*4.8 tabs style 6  [ right-nav & content with border ]*/
.wt-tabs.vertical.right.border  .tab-pane { 
	padding:20px;
	margin-right:-1px;
}


@media only screen and (max-width:720px){
	.wt-tabs.tabs-default .nav.nav-tabs{
		display: block;
	}
	.wt-tabs.tabs-default .nav.nav-tabs li a.active{
		border: 1px solid #ddd;
		margin-right: 0px;
	}
	.pricing-tab-content-block .wt-tabs.vertical .tab-content{
		border: 0px solid #ddd;
	}
	.wt-tabs.vertical .tab-content {
		border: 1px solid #DDD;
	}
	.wt-tabs.vertical.right .nav-tabs{float: none; border-left: 0px;}
	.wt-tabs.vertical.right .tab-content{border: 1px solid #DDD;}
	.wt-tabs.vertical.right .tab-pane{padding: 10px;}

	.wt-tabs.vertical.tabs-default.border .tab-content{border: 0px;}

	.wt-tabs.bg-tabs ul{display: block;}
	.wt-tabs.vertical.bg-tabs .nav-tabs > li > a{margin-right: 0px;}
	.wt-tabs.vertical.bg-tabs .nav-tabs > li > a.active{border-right: 1px solid #ddd;}

	/* .wt-tabs.border .tab-pane{border: 0px;} */
	.wt-tabs.vertical.right.tabs-default.has-bg .nav-link.active{margin-right: -1px;}
	.wt-tabs.vertical.right.bg-tabs.has-bg .nav-link{margin-right: -1px;}
}
      .section-content{position: relative; height: 100%;}

}`}</style>
      <div class="section-content pt-60 container">
        <div class=" wt-tabs border-top border bg-tabs">
          <ul class="nav nav-tabs">
            {Array.isArray(data?.tab_data) &&
              data?.tab_data.map((item, idx) => (
                <li class="nav-item">
                  <a
                    class={`nav-link ${!idx && "active "} `}
                    data-bs-toggle="tab"
                    href={`#${idx + 1}`}
                  >
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item.tab_image
                      }`}
                      alt={item.tab_image_alt_tag || "tab"}
                    />
                    <span className="ms-3">{item?.tab_title}</span>
                  </a>
                </li>
              ))}
          </ul>
          <div class="tab-content">
            {Array.isArray(data?.tab_data) &&
              data?.tab_data.map((item, idx) => (
                <div id={`${idx + 1}`} class={`tab-pane ${!idx && "active"}`}>
                  <p class="m-3">{item?.tab_description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style8;
