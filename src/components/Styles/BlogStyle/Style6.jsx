import React, { useEffect } from "react";
import { getLatestThreeBlogs } from "../../../features/actions/blog";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  const dispatch = useDispatch();
  const { latestBlogData } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getLatestThreeBlogs());
  }, []);
  return (
    <section class="dg-blog-section bg-light-subtle ptb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5">
            <div class="section-title text-center mb-5">
              <span class="text-dg-primary fw-bold">{data?.sub_title}</span>
              <h2 class="heading-dg-color mb-0 mt-2 clr-text">{data?.title}</h2>
            </div>
          </div>
        </div>
        <div class="row g-4 justify-content-center">
          {Array.isArray(latestBlogData) &&
            latestBlogData?.map((item, idx) => (
              <Link to={`/blog/${item?.blog_slug}`} class="col-xl-4">
                <article class="dg-blog-card bg-white rounded-3">
                  <div class="thumbnail overflow-hidden rounded-3 mb-30">
                    <a>
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.blog_image1
                        }`}
                        alt={item?.image1_alt}
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <a class="d-inline-block text-primary badge bg-primary-soft">
                    {item?.category?.category_name}
                  </a>
                  <a>
                    <h5 class="mb-3 mt-3">{item?.blog_title}</h5>
                  </a>
                  <p class="mb-4"> {item?.blog_short_details1}</p>
                  <a class="read-more-link text-decoration-none">
                    Explore More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Style6;
