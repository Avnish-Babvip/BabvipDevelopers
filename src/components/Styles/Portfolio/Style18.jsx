import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Style18 = ({ data }) => {
  // Extract unique categories
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

    // Initialize Isotope on Masonry layout
    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry",
      });
    }

    // Click filter logic
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          const Self = $(this);
          const selector = Self.parent().attr("data-filter");

          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");

          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });

          return false;
        });
    }

    // Dynamic filter count logic
    if ($(".post-filter.has-dynamic-filters-counter").length) {
      const activeFilterItem = $(
        ".post-filter.has-dynamic-filters-counter"
      ).find("li");

      activeFilterItem.each(function () {
        const filterElement = $(this).data("filter");
        const count = $(".filter-layout").find(filterElement).length;

        $(this)
          .children(".filter-text")
          .append(`<span class="count">(${count})</span>`);
      });
    }
  }, []);
  return (
    <>
      <style>{`
      
    .portfolio {
  position: relative;
  display: block;
  padding: 114px 0 90px;
}

.portfolio-filter {
  position: relative;
  display: block;
  text-align: center;
  margin-bottom: 26px;
}

.portfolio-filter.style1 li {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
}

.portfolio-filter.style1 li .filter-text {
  position: relative;
  display: inline-block;
  color: var(--insur-gray);
  font-size: 18px;
  font-weight: 500;
  display: block;
  cursor: pointer;
  transition: all 0.4s ease;
}

.portfolio-filter.style1 li .filter-text:before {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 2px;
  content: "";
  background: #015FC9;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
  border-radius: 0;
  transform: scale(0);
}

.portfolio-filter.style1 li .filter-text:hover:before,
.portfolio-filter.style1 li.active .filter-text:before {
  transform: scale(1.0);
}

.portfolio-filter.style1 li:hover .filter-text,
.portfolio-filter.style1 li.active .filter-text {
  color: #015FC9;
}

.portfolio-filter.style1 li .count {
  color: #015FC9;
  font-size: 12px;
  line-height: 26px;
  font-weight: 500;
  display: inline-block;
  padding: 0 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  position: relative;
  top: -4px;
}

.portfolio-filter.style1 li:hover .count,
.portfolio-filter.style1 li.active .count {
  color: #015FC9;
  opacity: 1;
}

.portfolio-filter.style1 li+li {
  margin-right: 30px;
}

.portfolio__single {
  position: relative;
  display: block;
  margin-bottom: 30px;
}

.portfolio__img {
  position: relative;
  display: block;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
}

.portfolio__img:before {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  content: "";
  border-radius: 20px;
  background-image: -moz-linear-gradient(-90deg, rgb(17, 29, 50) 0%, rgba(17, 29, 50, 0) 100%);
  background-image: -webkit-linear-gradient(-90deg, rgb(17, 29, 50) 0%, rgba(17, 29, 50, 0) 100%);
  background-image: -ms-linear-gradient(-90deg, rgb(17, 29, 50) 0%, rgba(17, 29, 50, 0) 100%);
  transform: scale(1, 0);
  transition: transform 500ms ease;
  transform-origin: top center;
  z-index: 1;
}

.portfolio__single:hover .portfolio__img:before {
  transform: scale(1, 1);
  transform-origin: bottom center;
}

.portfolio__img img {
  width: 100%;
  border-radius: 20px;
}

.portfolio__plus {
  position: absolute;
  top: 30px;
  left: 30px;
  height: 50px;
  width: 50px;
  background-color: var(--insur-primary);
  border-radius: var(--insur-bdr-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
  z-index: 2;
}

.portfolio__single:hover .portfolio__plus {
  transform: scale(1);
  transition-delay: 500ms;
}

.portfolio__plus a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--insur-white);
}

.portfolio__content {
    position: absolute;
    bottom: 38px;
    left: 35px;
    -webkit-transform: translateY(-100px);
    transform: translateY(90px);
    opacity: 0;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    z-index: 2;
}

.portfolio__single:hover .portfolio__content {
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  opacity: 1;
}

.portfolio__sub-title {
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 24px;
  opacity: .6;
}

.portfolio__title {
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: var(--insur-letter-spacing);
}

.portfolio__title a {
  color: #fff;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
}

.portfolio__title a:hover {
  color: #fff;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  position: relative;
  display: block;
  padding: 120px 0 120px;
}

.portfolio-details__img {
  position: relative;
  display: block;
  border-radius: 20px;
}

.portfolio-details__img img {
  width: 100%;
  border-radius: 20px;
}

.portfolio-details__content {
  position: relative;
  display: block;
  padding-top: 50px;
}

.portfolio-details__content-left {
  position: relative;
  display: block;
  margin-top: -4px;
}

.portfolio-details__title {
  font-size: 34px;
  font-weight: 700;
  letter-spacing: var(--insur-letter-spacing);
  line-height: 34px;
  margin-bottom: 24px;
}

.portfolio-details__text-1 {
  font-size: 18px;
  line-height: 34px;
  letter-spacing: var(--insur-letter-spacing);
  padding-bottom: 34px;
}

.portfolio-details__text-2 {
  font-size: 18px;
  line-height: 34px;
  letter-spacing: var(--insur-letter-spacing);
}

.portfolio-details__content-right {
  position: relative;
  display: block;
}

.portfolio-details__details-box {
  position: relative;
  border-radius: var(--insur-bdr-radius);
  background-color: var(--insur-extra);
  padding: 42px 50px 50px;
}

.portfolio-details__details-list {
  position: relative;
  display: block;
}

.portfolio-details__details-list li {
  position: relative;
  display: block;
}

.portfolio-details__details-list li+li {
  margin-top: 32px;
}

.portfolio-details__client {
  font-size: 18px;
  color: var(--insur-black);
  font-weight: 700;
  line-height: 30px;
  letter-spacing: var(--insur-letter-spacing);
}

.portfolio-details__name {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: var(--insur-letter-spacing);
}

.portfolio-details__social {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 9px;
}

.portfolio-details__social a {
  position: relative;
  height: 43px;
  width: 43px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  color: var(--insur-base);
  font-size: 15px;
  border-radius: 17px;
  border: 2px solid var(--insur-base);
  overflow: hidden;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
  z-index: 1;
}

.portfolio-details__social a:hover {
  background-color: var(--insur-base);
  color: var(--insur-white);
}

.portfolio-details__social a+a {
  margin-right: 10px;
}`}</style>
      <section class="portfolio">
        <div class="container">
          <div class="col-12">
            <div class="text-center pb-4">
              <h2>{data?.title}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <ul class="portfolio-filter style1 post-filter has-dynamic-filters-counter ">
                <li data-filter=".filter-item" class="active pr-40">
                  <span class="filter-text ">All</span>
                </li>
                {uniqueCategories.map((category, idx) => (
                  <li data-filter={`.${toSafeClass(category)}`}>
                    <span class="filter-text">{category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="row filter-layout masonary-layout">
            {data?.step_data?.map((item, index) => (
              <div
                class={`col-xl-4 col-lg-6 col-md-6 filter-item ${toSafeClass(
                  item?.category
                )}`}
              >
                <Link to={`/portfolio/${item?.port_slug}`}>
                  <div class="portfolio__single">
                    <div class="portfolio__img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item.step_image_icon
                        }`}
                        alt={item.step_image_icon_alt_tag || "portfolio photo"}
                      />

                      <div class="portfolio__content">
                        <p class="portfolio__sub-title">{item?.category}</p>
                        <h4 class="portfolio__title">
                          <a>{item?.step_title}</a>
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

export default Style18;
