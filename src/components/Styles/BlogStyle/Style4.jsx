import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLatestThreeBlogs } from "../../../features/actions/blog";

const Style4 = ({ data }) => {
  const dispatch = useDispatch();
  const { latestBlogData } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getLatestThreeBlogs());
  }, []);
  return (
    <div class="rm-blog-area pt-60 pb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center">
              <h6 class="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                {data?.sub_title}{" "}
              </h6>
              <h2 class="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20">
                {data?.title}
                <span class="risk-highlight-color">
                  {" "}
                  {data?.highlighted_title}{" "}
                </span>
              </h2>
              <p class="risk-color-two ff-dmsans fs-16 flh-28 mb-30">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          {Array.isArray(latestBlogData) &&
            latestBlogData?.map((item, idx) => (
              <Link to={`/blog/${item?.blog_slug}`} class="col-lg-4 col-md-6">
                <div class="risk-blog bgc-white padding-6 pb-30 rounded-8 risk-shadow mt-20">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      item?.blog_image1
                    }`}
                    alt={item?.image1_alt}
                    class="w-100 img-fluid rounded-8 mb-20"
                  />
                  <h6 class="risk-sub-text fs-16 ff-risk-pri fw-600 ch-mb-10">
                    {item?.category?.category_name}
                  </h6>
                  <a>
                    <h5 class="risk-color fs-20 ff-risk-pri fw-800 flh-28 mb-20">
                      {item?.blog_title}
                    </h5>
                  </a>
                  <p class="risk-color-two ff-dmsans fs-16 flh-24 mb-0 limit-2-line-text">
                    {item?.blog_short_details1}
                  </p>
                </div>
              </Link>
            ))}
          <div class="text-center">
            {data?.button_text && (
              <Link
                to={data?.button_url}
                target="_blank"
                class="btn risk-gd-bg risk-hover-text-white clr-white ff-risk-pri fs-14 fw-600 border-0 mt-40"
              >
                {data?.button_text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style4;
