import React, { useEffect } from "react";
import {
  getLatestThreeBlogs,
  getLatestTwoBlogs,
} from "../../../features/actions/blog";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Style9 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const dispatch = useDispatch();
  const { latestBlogData, twoBlogData } = useSelector((state) => state.blog);

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
    dispatch(getLatestTwoBlogs());
  }, []);

  return (
    <>
      <section class="dg-news pt-120 pb-60">
        <div class="container">
          <div class="row justify-content-between align-items-end mb-5">
            <div class="col-lg-6 col-md-6">
              <div>
                <div>
                  <span class="span-arrow">{data?.sub_title}</span>
                  <img
                    src={`${assetRoute}/assets/img/arro-right.svg`}
                    alt="arrow"
                  />
                </div>
                <h2>{data?.title}</h2>
              </div>
            </div>
            {data?.button_text && (
              <div class="col-lg-3 col-md-6">
                <div class="text-md-end mt-3 mt-md-0">
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn rounded-pill btn-outline-dark"
                  >
                    {data?.button_text}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div class="row justify-content-center">
            {Array.isArray(twoBlogData) &&
              twoBlogData?.map((item, idx) => (
                <Link to={`/blog/${item?.blog_slug}`} class="col-lg-4 col-md-6">
                  <div class="digi-blog-single border p-3 rounded mb-4 mb-lg-4">
                    <div class="digi-blog-thumb">
                      <a>
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.blog_image1
                          }`}
                          alt={item?.image1_alt}
                          class="img-fluid w-100 rounded-top"
                        />
                      </a>
                      <span class="d-tag marketing">
                        {item?.category?.category_name}
                      </span>
                    </div>
                    <div class="mt-4 digi-blog-info">
                      <span class="fs-sm text-muted fw-normal">
                        <i class="far fa-calendar me-2"></i>
                        {formatDate(item?.created_at)}
                      </span>
                      <h4>{item?.blog_title}</h4>
                      <p>{item?.blog_short_details1}</p>
                      <a class="read-more-link text-decoration-none">
                        Explore More <i class="fas fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </Link>
              ))}

            <div class="col-lg-4 col-md-6">
              <div class="digi-blog-list">
                <div class="list-header">
                  <h5>{data?.bottom_title}</h5>
                </div>
                <div class="digi-blog-posts bg-light-subtle">
                  <ul class="list-unstyled">
                    {Array.isArray(latestBlogData) &&
                      latestBlogData?.map((item, idx) => (
                        <li class="mb-3">
                          <Link to={`/blog/${item?.blog_slug}`}>
                            <span class="fs-sm text-muted">
                              {item?.user?.name} {formatDate(item?.created_at)}
                            </span>
                            <h5 class="h6">{item?.blog_title}</h5>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style9;
