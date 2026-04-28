import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { getLatestThreeBlogs } from "../../../features/actions/blog";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Style5 = ({ data }) => {
  const swiperRef = useRef(null);
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

  useEffect(() => {
    const swiperInstance = new Swiper(".cyber-blog", {
      modules: [Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      // Ensure Swiper instance exists before destroying
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null; // Reset after unmount
      }
    };
  }, []);
  return (
    <section class="home-blog-section pt-60 pb-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-12">
            <div class="section-heading text-center">
              <h4 class="text-primary h5">{data?.subtitle}</h4>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="swiper cyber-blog swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div class="swiper-wrapper">
              {Array.isArray(latestBlogData) &&
                latestBlogData?.map((item, idx) => (
                  <div class="swiper-slide position-relative " role="group">
                    <div class="cyber-single-article mb-4 mb-lg-0 p-3 border">
                      <Link
                        to={`/blog/${item?.blog_slug}`}
                        class="cyber-article-img"
                      >
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.blog_image1
                          }`}
                          alt={item?.image1_alt}
                          class="img-fluid"
                        />
                      </Link>
                      <div class="article-content">
                        <div class="article-info d-flex py-3">
                          <div class="pe-3">
                            <a class="text-decoration-none">
                              <img
                                src={`${
                                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                }/${item?.user?.profile_image}`}
                              />
                              <span class="text-muted">{item?.user?.name}</span>
                            </a>
                          </div>
                          <div>
                            <a class="text-decoration-none">
                              <i class="fas fa-calendar pe-2"></i>
                              <span class="text-muted">
                                {" "}
                                {formatDate(item?.created_at)}
                              </span>
                            </a>
                          </div>
                        </div>
                        <a class="text-decoration-none">
                          <h2 class="h5 article-title limit-2-line-text">
                            {item?.blog_title}
                          </h2>
                        </a>
                        <a class="link-with-icon text-decoration-none">
                          Read more <i class="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style5;
