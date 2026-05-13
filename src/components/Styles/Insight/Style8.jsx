import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLatestThreeInsights } from "../../../features/actions/blog";

const Style8 = ({ data }) => {
  const dispatch = useDispatch();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const { latestInsightData } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getLatestThreeInsights());
  }, []);
  return (
    <>
      <section class="crypto-blog bg-dark-black ptb-40">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-5">
                <h2 class="text-white">{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div class="row">
            {Array.isArray(latestInsightData) &&
              latestInsightData?.map((item, idx) => (
                <Link
                  to={`/insights/${item?.insight_slug}`}
                  class="col-lg-4 col-md-6"
                >
                  <div class="crypto-blog-card bg-soft-black mb-30 mb-lg-0">
                    <div class="blog-thumb">
                      <a>
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.insight_image1
                          }`}
                          alt={item?.image1_alt}
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <h3 class="h4 fw-medium">
                      <a class="text-decoration-none text-white">
                        {item?.insight_title}
                      </a>
                    </h3>
                    <p class="m-0">{item?.insight_short_details1}</p>
                    <div class="author-meta d-flex align-items-center py-4">
                      <div class="pe-3">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.user?.profile_image
                          }`}
                          alt="avatar"
                          width="40"
                          loading="lazy"
                          class="img-fluid rounded-circle me-3"
                        />
                      </div>
                      <div>
                        <h5 class="fw-normal text-white h6 m-0">
                          {item?.user?.name}
                        </h5>
                        <span> {formatDate(item?.created_at)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {data?.button_text && (
            <div class="row justify-content-center">
              <div class="col-lg-3">
                <div class="text-center mt-5">
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn-outline-primary btn rounded-pill text-decoration-none"
                  >
                    {data?.button_text}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Style8;
