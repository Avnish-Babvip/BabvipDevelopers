import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Style19 = ({ data }) => {
  const uniqueCategories = [
    ...new Set(data?.step_data?.map((item) => item.category)),
  ];

  const toSafeClass = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-") // replace spaces with -
      .replace(/[^\w-]/g, ""); // remove special characters except - and _

  useEffect(() => {
    const $ = window.jQuery;

    // Wait for images to load before initializing Isotope
    $(".grid").imagesLoaded(function () {
      const $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
      });

      // Filtering logic
      $(".masonary-menu").on("click", "button", function () {
        const filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      // Button active state
      $(".masonary-menu button").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
      });
    });
  }, []);

  return (
    <>
      <style>{`

    .latest-project__tab {
  gap: 10px 50px;
}
@media (max-width: 575px) {
  .latest-project__tab {
    gap: 10px 30px;
  }
}
.latest-project__tab button {
  font-family: var(--rr-ff-exo);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color:#F44E19;
}
.latest-project__tab button.active {
  font-weight: 600;
  color: #F44E19;
}
.latest-project__tab-project-page {
  gap: 10px 35px;
}
.latest-project__tab-project-page button {
  padding: 2px 13.5px;
  border-radius: 3px;
  border: none
  font-family: var(--rr-ff-robo);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  background-color: #FFF;
  color: #15181B;
}
.latest-project__tab-project-page button.active {
  font-weight: 500;
  color: #fff;
  background-color: #F44E19;
}
.latest-project__item {
  overflow: hidden;
  position: relative;
  background: rgba(21, 24, 27, 0.7);
  border-radius: 10px;
}
.latest-project__item-content {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  visibility: hidden;
}
.latest-project__item-content .icon {
  width: 80px;
  height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  position: relative;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 1;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border-radius: 500px;
  background: #fff;
}
.latest-project__item-content .icon svg path[fill=white] {
  fill: black;
}
.latest-project__item-content .icon:hover {
  background: #F44E19;
}
.latest-project__item-content .icon:hover svg path[fill=white] {
  fill: white;
}
.latest-project__item-content .icon__wrapper {
  width: 100%;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: calc(100% - 110px);
}
.latest-project__item-content .icon__wrapper:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 0;
  background: rgba(21, 24, 27, 0.7);
  border-radius: 10px;
}
.latest-project__item-content .text {
  left: 0;
  width: 100%;
  bottom: 0;
  padding: 21.5px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: absolute;
  background: var(--rr-heading-primary);
}
.latest-project__item-content .text .subtitle {
  font-family: var(--rr-ff-robo);
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}
.latest-project__item-thumb img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.latest-project__item:hover .latest-project__item-thumb img {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}
.latest-project__item:hover .latest-project__item-content {
  opacity: 1;
  visibility: visible;
}
.latest-project__item:hover .icon__wrapper::after {
  height: 100%;
}`}</style>
      <section class="latest-project section-space__top">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="latest-project__tab latest-project__tab-project-page justify-content-center masonary-menu d-flex flex-wrap mb-40 mb-xs-30">
                <button class="active" data-filter="*">
                  All
                </button>
                {uniqueCategories.map((category, idx) => (
                  <button data-filter={`.${toSafeClass(category)}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div class="row grid mb-minus-30">
            {data?.step_data?.map((item, index) => (
              <div
                class={`col-lg-4 col-md-6 grid-item ${toSafeClass(
                  item?.category
                )}`}
              >
                <Link to={`/portfolio/${item?.port_slug}`}>
                  <div class="latest-project__item mb-30">
                    <div class="latest-project__item-thumb">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item.step_image_icon
                        }`}
                        alt={item.step_image_icon_alt_tag || "portfolio photo"}
                      />
                    </div>
                    <div class="latest-project__item-content">
                      <div class="icon__wrapper">
                        <a class="icon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.4574 0H4.31707C3.46373 0 2.76981 0.693784 2.76981 1.54695C2.76981 2.40012 3.46373 3.0939 4.31707 3.0939H18.7159L0.453626 21.3573C-0.151209 21.962 -0.151209 22.9417 0.453626 23.5465C1.05846 24.1512 2.03839 24.1512 2.64322 23.5465L20.9055 5.28307V19.6791C20.9055 20.5323 21.5994 21.226 22.4527 21.226C23.3061 21.226 24 20.5323 24 19.6791V1.54695C24.0047 0.693784 23.3107 0 22.4574 0Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </div>

                      <div class="text">
                        <span class="subtitle color-white d-block">
                          {item?.category}
                        </span>
                        <h4 class="title ">
                          <a href="project-details.html">{item?.step_title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style19;
