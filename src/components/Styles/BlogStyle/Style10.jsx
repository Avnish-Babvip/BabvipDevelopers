import React, { useEffect } from "react";
import { getLatestThreeBlogs } from "../../../features/actions/blog";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Style10 = ({ data }) => {
  const dispatch = useDispatch();
  const { latestBlogData } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getLatestThreeBlogs());
  }, []);
  return (
    <>
      <div class="section-space bgc-background">
        <div class="section-space--sm-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <h4 class="text-center clr-text heading-4">{data?.title}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="container-xl">
          <div class="row g-4 gy-md-0">
            {Array.isArray(latestBlogData) &&
              latestBlogData?.map((item, idx) => (
                <Link to={`/blog/${item?.blog_slug}`} class="col-md-4">
                  <div class="bgc-white rounded-4 padding-6">
                    <a class="link d-block rounded-4 overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.blog_image1
                        }`}
                        alt={item?.image1_alt}
                        class="img-fluid w-100"
                      />
                    </a>
                    <div class="padding-top-6">
                      <span class="ca-subheading d-inline-block position-relative font-weight-bold fs-14 clr-text margin-bottom-2">
                        {item?.category?.category_name}
                      </span>
                      <h6 class="heading-6">
                        <a class="link d-inline-block font-weight-bold clr-text :clr-primary">
                          {item?.blog_title}
                        </a>
                      </h6>
                      <p class="mb-0 clr-paragraph">
                        {item?.blog_short_details1}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style10;
