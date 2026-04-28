import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestThreeBlogs } from "../../../features/actions/blog";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  const dispatch = useDispatch();
  const { latestBlogData } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getLatestThreeBlogs());
  }, []);

  return (
    <section class="home-blog-section ptb-120 bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-heading text-center">
              <h4 class="h5 text-primary">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="blog-grid">
            {Array.isArray(latestBlogData) &&
              latestBlogData?.slice(0, 1).map((item, idx) => (
                <Link
                  to={`/blog/${item?.blog_slug}`}
                  class="featured-post-wrapper"
                >
                  <div class="blog-item">
                    <div class="blog-content bg-white">
                      <div class="blog-media">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.blog_image1
                          }`}
                          alt={item?.image1_alt}
                          class="img-fluid"
                        />
                      </div>
                      <div class="blog-text p-4 p-lg-5">
                        <span class="featured-badge">
                          <i
                            class="fas fa-bookmark text-warning"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Featured"
                          ></i>
                        </span>

                        <h3 class="h5">{item?.blog_title}</h3>

                        <p>{item?.blog_short_details1}</p>
                        <div class="read-more-link">
                          <Link
                            to={`/blog/${item?.blog_slug}`}
                            class="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"
                          >
                            <span>Read More</span>
                            <i class="fas fa-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            <div class="posts-wrapper">
              {Array.isArray(latestBlogData) &&
                latestBlogData?.slice(1, 3).map((item, idx) => (
                  <Link to={`/blog/${item?.blog_slug}`} class="blog-item">
                    <div class="blog-content bg-white">
                      <div class="blog-media">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.blog_image1
                          }`}
                          alt={item?.image1_alt}
                          class="img-fluid"
                        />
                      </div>
                      <div class="blog-text p-4 p-lg-5">
                        <h3 class="h5">{item?.blog_title}</h3>

                        <p>{item?.blog_short_details1}</p>
                        <div class="read-more-link ">
                          <Link
                            to={`/blog/${item?.blog_slug}`}
                            class="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill  font-weight-bold"
                          >
                            <span>Read More</span>
                            <i class="fas fa-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
