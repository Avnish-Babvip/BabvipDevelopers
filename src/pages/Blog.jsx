import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailBlogBySlug,
  getLatestThreeBlogs,
} from "../features/actions/blog";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loader from "../components/Loader/Loader";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import VideoModal from "../components/VideoModal/VideoModal";
import { Helmet } from "react-helmet-async";

const ViewBlog = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );
  const { isLoading } = useSelector((state) => state.blog);
  const { data, newsSetting } = useSelector(
    (state) => state.blog.detailBlogData
  );

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
    dispatch(getDetailBlogBySlug(slug));
    dispatch(getLatestThreeBlogs());
  }, [slug]);

  useEffect(() => {
    const canonicalUrl = window.location.href.split("?")[0]; // remove query params if you want
    let link = document.querySelector("link[rel='canonical']");

    if (link) {
      // update existing
      link.setAttribute("href", canonicalUrl);
    } else {
      // create new
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalUrl);
      document.head.appendChild(link);
    }
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{data?.blog_title || "Babvip"}</title>
        <meta
          name="description"
          content={data?.blog_short_details1 || "Babvip Description"}
        />

        {/* ✅ Inject head script safely */}
        {/* {pageHeadScripts && (
          <script dangerouslySetInnerHTML={{ __html: pageHeadScripts }} />
        )} */}
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section
            class="page-header position-relative overflow-hidden pt-160 pb-120 bg-dark"
            style={{
              background: `url('${assetRoute}/assets/img/page-header-bg.svg')no-repeat bottom left`,
            }}
          >
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-8 col-12">
                  <h1 class="fw-bold display-5">{data?.blog_title}</h1>
                </div>
              </div>
              <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
            </div>
          </section>

          <section class="blog-details ptb-120">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-lg-8 pe-lg-5">
                  <div class="blog-details-wrap">
                    {parse(String(data?.blog_details1))}
                    <blockquote class="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                      <p class="text-muted">
                        <i class="fas fa-quote-left me-2 text-primary"></i>
                        {data?.blog_short_details1}
                        <i class="fas fa-quote-right ms-2 text-primary"></i>
                      </p>
                    </blockquote>
                  </div>

                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.blog_image2
                    }`}
                    alt={data?.image2_alt}
                    class="img-fluid mt-4 rounded-custom"
                    loading="lazy"
                  />
                  <blockquote class="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                    <p class="text-muted">
                      <i class="fas fa-quote-left me-2 text-primary"></i>
                      {data?.blog_short_details2}
                      <i class="fas fa-quote-right ms-2 text-primary"></i>
                    </p>
                  </blockquote>
                  <div class="job-details-info mt-5">
                    {parse(String(data?.blog_details2))}
                  </div>

                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.blog_image3
                    }`}
                    alt={data?.image3_alt}
                    class="img-fluid mt-4 rounded-custom"
                  />
                </div>
                <div class="col-lg-4">
                  <div class="author-wrap text-center bg-light-subtle p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        newsSetting?.setting_data?.news_logo
                      }`}
                      alt={newsSetting?.setting_data?.news_logo_alt}
                      width="120"
                      class="img-fluid shadow-sm rounded-circle"
                    />
                    <div class="author-info my-4">
                      <h5 class="mb-0">{newsSetting?.setting_data?.name}</h5>
                      <span class="small">
                        {newsSetting?.setting_data?.designation}
                      </span>
                    </div>
                    <p>{newsSetting?.setting_data?.description}</p>
                    <ul class="list-unstyled author-social-list list-inline mt-3 mb-0">
                      <ul class="list-unstyled list-inline footer-social-list mb-0">
                        <li class="list-inline-item">
                          <a
                            href={siteSetting?.setting_data?.facebook_page_url}
                            target="_blank"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>

                        <li class="list-inline-item">
                          <a
                            href={siteSetting?.setting_data?.instagram_page_url}
                            target="_blank"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>

                        <li class="list-inline-item">
                          <a
                            href={siteSetting?.setting_data?.linkdin_page_url}
                            target="_blank"
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <div
                class="bg-dark ptb-60 px-5 mt-100 position-relative overflow-hidden rounded-custom"
                style={{
                  background: `url(${
                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                  }/${
                    newsSetting?.setting_data?.section1_bg
                  })no-repeat center bottom`,
                }}
              >
                <div class="row justify-content-center">
                  <div class="col-lg-8 col-md-9">
                    <div class="subscribe-info-wrap text-center position-relative z-2">
                      <div class="section-heading">
                        <h4 class="h5 text-warning">
                          {newsSetting?.setting_data?.section1_subtitle}
                        </h4>
                        <h2>{newsSetting?.setting_data?.section1_title}</h2>
                        <p>{newsSetting?.setting_data?.section1_description}</p>
                      </div>
                      <div class="form-block-banner mw-60 m-auto mt-5">
                        <SubscribeForm buttonText="Join" />
                      </div>
                      <ul class="nav justify-content-center subscribe-feature-list mt-3">
                        <li class="nav-item">
                          <span>
                            <i class="far fa-dot-circle text-primary me-2"></i>
                            {newsSetting?.setting_data?.section1_tagline}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-dark-light left-5"></div>
              </div>
            </div>
          </section>

          <section class="related-blog-list ptb-120 bg-light-subtle">
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-lg-4 col-md-12">
                  <div class="section-heading">
                    <h4 class="h5 text-primary">
                      {newsSetting?.setting_data?.section2_subtitle}
                    </h4>
                    <h2>{newsSetting?.setting_data?.section2_title}</h2>
                  </div>
                </div>
                <div class="col-lg-7 col-md-12">
                  <div class="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">
                    <Link
                      target="_blank"
                      to={newsSetting?.setting_data?.section2_button_url}
                      class="btn btn-primary"
                    >
                      {newsSetting?.setting_data?.section2_button_text}
                    </Link>
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
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item?.blog_image1}`}
                              alt={item?.image1_alt}
                              class="img-fluid"
                            />
                          </div>{" "}
                        </Link>
                        <Link
                          className="text-reset"
                          to={`/blog/${item?.blog_slug}`}
                        >
                          <div class="article-content p-4">
                            <div class="article-category mb-4 d-block">
                              <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                class="d-inline-block text-warning badge bg-warning-soft"
                              >
                                {item?.category?.category_name}
                              </a>
                            </div>
                            <a href="#" onClick={(e) => e.preventDefault()}>
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
                                <h6 class="mb-0 avatar-name">
                                  {item?.user?.name}
                                </h6>
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
          <section class="cta-subscribe bg-dark ptb-120 position-relative overflow-hidden">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                  <div class="subscribe-info-wrap text-center position-relative z-2">
                    <div class="section-heading">
                      <h4 class="h5 text-warning">
                        {" "}
                        {newsSetting?.setting_data?.section3_title}
                      </h4>
                      <h2> {newsSetting?.setting_data?.section3_subtitle}</h2>
                      <p>{newsSetting?.setting_data?.section3_description}</p>
                    </div>
                    <div class="form-block-banner mw-60 m-auto mt-5">
                      <Link
                        to={newsSetting?.setting_data?.section3_button_url}
                        target="_blank"
                        class="btn btn-primary"
                      >
                        {newsSetting?.setting_data?.section3_button_text}
                      </Link>
                      <Link
                        onClick={() =>
                          newsSetting?.setting_data
                            ?.section3_video_button_url && setShowVideo(true)
                        }
                        class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"
                      >
                        {" "}
                        <i class="fas fa-play"></i>{" "}
                        {newsSetting?.setting_data?.section3_video_button_text}{" "}
                      </Link>
                    </div>
                    <ul class="nav justify-content-center subscribe-feature-list mt-4">
                      <li class="nav-item">
                        <span>
                          <i class="far fa-check-circle text-primary me-2"></i>
                          {newsSetting?.setting_data?.section3_tagline}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
              <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
            </div>
          </section>
          {showVideo && (
            <VideoModal
              videoUrl={newsSetting?.setting_data?.section3_video_button_url}
              setShowVideo={setShowVideo}
            />
          )}
        </>
      )}
    </>
  );
};

export default ViewBlog;
