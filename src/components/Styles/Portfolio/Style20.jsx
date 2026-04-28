import React from "react";
import { Link } from "react-router-dom";

const Style20 = ({ data }) => {
  const uniqueCategories = [
    ...new Set(data?.step_data?.map((item) => item.category)),
  ];

  const toSafeClass = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-") // replace spaces with -
      .replace(/[^\w-]/g, ""); // remove special characters except - and _
  return (
    <>
      <style>{`
      @media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
  @media only screen and (max-width: 767px) {
    .protfolio-one__filter {
        flex-direction: column;
    }
}
      .intro-loan-three {
  position: relative;
  display: block;
  z-index: 1;
  padding: 120px 0 90px;
}

.intro-loan-three__single {
  position: relative;
  display: block;
  background-color: #edf6f7;
  padding: 29px 29px 34px;
  border-radius: 3px;
  border: 1px solid transparent;
  -webkit-transition: all 500ms linear;
  transition: all 500ms linear;
  margin-bottom: 30px;
}

.intro-loan-three__single-2 {
  background-color: #f6f2f1;
}

.intro-loan-three__single-3 {
  background-color: #f4f4f4;
}

.intro-loan-three__shape-1 {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: .30;
}

.intro-loan-three__shape-1 img {
  width: auto;
}

.intro-loan-three__single:hover {
  border: 1px solid #000000;
}

.intro-loan-three__img {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 3px;
}

.intro-loan-three__img:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  background-color: rgba(var(--insuz-black-rgb), .30);
  border-radius: 3px;
  width: 0%;
  transform: translateX(50%);
  transition: all 500ms linear;
  z-index: 1;
}

.intro-loan-three__single:hover .intro-loan-three__img:before {
  transform: translateY(0);
  width: 100%;
}

.intro-loan-three__img img {
  width: 100%;
  border-radius: 3px;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
}

.intro-loan-three__single:hover .intro-loan-three__img img {
  transform: scale(1.05);
}

.intro-loan-three__content {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 27px;
}

.intro-loan-three__content .icon {
  position: relative;
  display: inline-block;
  padding: 14px 17px 14px;
  background-color: var(--insuz-white);
  border-radius: 3px;
}

.intro-loan-three__content .icon span {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  color: var(--insuz-black);
  -webkit-transition: all 500ms linear;
  transition: all 500ms linear;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transform: scale(1) rotateY(0deg);
  transform: scale(1) rotateY(0deg);
}

.intro-loan-three__single:hover .intro-loan-three__content .icon span {
  -webkit-transform: scale(0.9) rotateY(360deg);
  transform: scale(0.9) rotateY(360deg);
}


.intro-loan-three__title {
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  margin-left: 20px;
}

.intro-loan-three__title a {
  color: var(--insuz-black);
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
}

.intro-loan-three__title a:hover {
  color: var(--insuz-base);
}

.protfolio-one {
  padding: 110px 0 76px;
}

.protfolio-one__filter-box {
  position: relative;
  display: block;
  margin-bottom: 58px;
}

.protfolio-one__filter {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.protfolio-one__filter.style1 li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.protfolio-one__filter.style1 li+li {
  margin-left: 23px;
}

.protfolio-one__filter.style1 li .filter-text {
  position: relative;
  display: inline-block;
  color: #000000;
  font-size: 19px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  padding: 2px 10px 2px;
  transition: all 0.4s ease;
  z-index: 1;
}

.protfolio-one__filter.style1 li .filter-text:before {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  content: "";
  opacity: 0;
  background-color: #29eefa;
  z-index: -1;
  transition: all 0.4s ease;
}

.protfolio-one__filter.style1 li:hover .filter-text:before {
  opacity: 1;
}

.protfolio-one__filter.style1 li:hover .filter-text,
.protfolio-one__filter.style1 li.active .filter-text {
  color: #000000;
}

.protfolio-one__filter.style1 li.active .filter-text:before {
  opacity: 1;
}

.intro-loan-three__img:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: #3f3d3d4a;
    border-radius: 3px;
    width: 0%;
    transform: translateX(50%);
    transition: all 500ms linear;
    z-index: 1;
}


`}</style>
      <section class="intro-loan-three protfolio-one">
        <div class="container">
          <div class="protfolio-one__filter-box">
            <ul class="protfolio-one__filter style1 post-filter list-unstyled clearfix">
              <li data-filter=".filter-item" class="active">
                <span class="filter-text">All</span>
              </li>
              {uniqueCategories.map((category, idx) => (
                <li data-filter={`.${toSafeClass(category)}`}>
                  <span class="filter-text">{category}</span>
                </li>
              ))}
            </ul>
          </div>
          <div class="row filter-layout masonary-layout">
            {data?.step_data?.map((item, index) => (
              <div
                class={`col-xl-4 col-lg-6 col-md-6 filter-item ${toSafeClass(
                  item?.category
                )}`}
              >
                <Link to={`/portfolio/${item?.port_slug}`}>
                  <div class="intro-loan-three__single">
                    <div class="intro-loan-three__img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item.step_image_icon
                        }`}
                        alt={item.step_image_icon_alt_tag || "portfolio photo"}
                      />
                    </div>
                    <div class="intro-loan-three__content">
                      <div class="icon">
                        <span class="icon-profits"></span>
                      </div>
                      <h3 class="intro-loan-three__title">
                        <a>{item?.step_title}</a>
                      </h3>
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

export default Style20;
