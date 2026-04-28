import React, { useEffect } from "react";
import { getLatestThreeBlogs } from "../../../features/actions/blog";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  const dispatch = useDispatch();
  const { latestBlogData } = useSelector((state) => state.blog);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  useEffect(() => {
    dispatch(getLatestThreeBlogs());
  }, []);
  return (
    <>
      <section class="home-blog-section ptb-120 bg-light-subtle ">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12">
              <div class="section-heading text-center">
                <h4 class="text-primary h5">{data?.sub_title}</h4>
                <h2>{data?.title}</h2>
                <p>{data?.description} </p>
              </div>
            </div>
          </div>
          <div class="row">
            {Array.isArray(latestBlogData) &&
              latestBlogData?.map((item, idx) => (
                <Link to={`/blog/${item?.blog_slug}`} class="col-lg-4 col-md-6">
                  <div class="single-article rounded-custom mb-4 mb-lg-0">
                    <a class="article-img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.blog_image1
                        }`}
                        alt={item?.image1_alt}
                        class="img-fluid"
                      />
                    </a>
                    <div class="article-content p-4">
                      <div class="article-category mb-4 d-block">
                        <a class="d-inline-block text-warning badge bg-warning-soft">
                          {item?.category?.category_name}
                        </a>
                      </div>
                      <a>
                        <h2 class="h5 article-title limit-2-line-text">
                          {item?.blog_title}
                        </h2>
                      </a>
                      <p class="limit-2-line-text">
                        {item?.blog_short_details1}
                      </p>

                      <a>
                        <div class="d-flex align-items-center pt-4">
                          <div class="avatar">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.user?.profile_image}`}
                              alt="avatar"
                              width="40"
                              loading="lazy"
                              class="img-fluid rounded-circle me-3"
                            />
                          </div>
                          <div class="avatar-info">
                            <h6 class="mb-0 avatar-name">{item?.user?.name}</h6>
                            <span class="small fw-medium text-muted">
                              {formatDate(item?.created_at)}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {data?.button_text && (
            <div class="row justify-content-center">
              <div class="text-center mt-5">
                <Link
                  target="_blank"
                  to={data?.button_url}
                  class="btn btn-primary"
                >
                  {data?.button_text}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Style7;
