import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestThreeBlogs } from "../../../features/actions/blog";
import { Link } from "react-router-dom";

const Style3 = ({ data }) => {
  const dispatch = useDispatch();
  const { latestBlogData } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getLatestThreeBlogs());
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <section class="related-blog-list ptb-120 bg-light-subtle">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="">
            <div class="section-heading">
              <h4 class="h5 text-primary">{data?.title}</h4>
              <h2>{data?.description}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {Array.isArray(latestBlogData) &&
            latestBlogData?.map((item, idx) => (
              <div key={idx} class="col-lg-4 col-md-6">
                <div class="single-article rounded-custom my-3">
                  <Link to={`/blog/${item?.blog_slug}`}>
                    <div class="article-img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.blog_image1
                        }`}
                        alt={item?.image1_alt}
                        class="img-fluid"
                      />
                    </div>{" "}
                  </Link>
                  <Link className="text-reset" to={`/blog/${item?.blog_slug}`}>
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

                      <div class="d-flex align-items-center pt-4">
                        <div class="avatar">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/${item?.user?.profile_image}`}
                            alt="avatar"
                            width="40"
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
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Style3;
