import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaginateBlogs } from "../../../features/actions/blog";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

const Style2 = ({ data }) => {
  const dispatch = useDispatch();
  const { blogData, isLoading } = useSelector((state) => state.blog);
  const [url, setUrl] = useState(
    `${
      import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
    }/site/blogspaginate?page=1`
  );

  console.log(blogData);
  const isFirstRender = useRef(true); // Track first render

  useEffect(() => {
    dispatch(getPaginateBlogs(url));

    if (isFirstRender.current) {
      isFirstRender.current = false; // Prevent scrolling on first render
    } else {
      window.scrollTo(0, 0); // Scroll only on `url` change
    }
  }, [url]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <section class="masonary-blog-section pt-100 pb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10">
            <div class="section-heading text-center">
              <h2>{data?.title}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {Array.isArray(blogData?.data) &&
            blogData?.data?.slice(0, 2).map((item, idx) => (
              <div key={idx} class="col-lg-6 col-md-12">
                <div class="single-article feature-article rounded-custom my-3">
                  <Link to={`/blog/${item?.blog_slug}`} class="article-img">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.blog_image1
                      }`}
                      alt={item?.image1_alt}
                      class="img-fluid"
                    />
                  </Link>
                  <Link
                    to={`/blog/${item?.blog_slug}`}
                    class="article-content text-reset p-4"
                  >
                    <div class="article-category mb-4 d-block">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        class="d-inline-block text-primary badge bg-primary-soft"
                      >
                        {item?.category?.category_name}
                      </a>
                    </div>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <h2 class="h5 article-title limit-2-line-text">
                        {item?.blog_title}
                      </h2>
                    </a>
                    <p class="limit-2-line-text">{item?.blog_short_details1}</p>

                    <div class="d-flex align-items-center pt-4">
                      <div class="avatar">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.user?.profile_image
                          }`}
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
                  </Link>
                </div>
              </div>
            ))}
          {Array.isArray(blogData?.data) &&
            blogData?.data?.slice(2).map((item, idx) => (
              <div key={idx} class="col-lg-4 col-md-6">
                <div class="single-article rounded-custom my-3">
                  <Link to={`/blog/${item?.blog_slug}`} class="article-img">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.blog_image1
                      }`}
                      alt={item?.image1_alt}
                      class="img-fluid"
                      loading="lazy"
                    />
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
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <div class="row justify-content-center align-items-center mt-5">
          <div class="col-auto my-1">
            {Array.isArray(blogData?.links) && (
              <div
                onClick={() =>
                  blogData?.links[0]?.url && setUrl(blogData?.links[0]?.url)
                }
                class={`btn btn-soft-primary btn-sm ${
                  blogData?.links[0]?.url && "active"
                }`}
              >
                {blogData?.links[0]?.label?.replace("&laquo;", "")}
              </div>
            )}
          </div>
          <div class="col-auto my-1">
            <nav>
              <ul class="pagination rounded mb-0">
                {Array.isArray(blogData?.links) &&
                  blogData?.links?.slice(1, -1).map((item, idx) => (
                    <li
                      key={idx}
                      onClick={() => setUrl(item?.url)}
                      class={`page-item ${url === item?.url && "active"} `}
                    >
                      <div class="page-link">{item?.label}</div>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
          <div class="col-auto my-1">
            {Array.isArray(blogData?.links) && (
              <div
                onClick={() =>
                  blogData?.links?.at(-1)?.url &&
                  setUrl(blogData?.links?.at(-1)?.url)
                }
                class={`btn btn-soft-primary btn-sm ${
                  blogData?.links?.at(-1)?.url && "active"
                }`}
              >
                {blogData?.links?.at(-1)?.label?.replace("&raquo;", "")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style2;
