import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHelpCenter } from "../../../features/actions/helpCenter";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  const dispatch = useDispatch();
  const { helpCenterData } = useSelector((state) => state.helpCenter);

  const extractText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  useEffect(() => {
    dispatch(getHelpCenter());
  }, []);

  return (
    <>
      <section
        class="page-header position-relative overflow-hidden pt-100 pb-40 bg-dark"
        style={{
          background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
            data?.banner_bg_image
          })no-repeat bottom left`,
          backgroundSize: "100% 100%",
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-12">
              <div class="text-center">
                <h1 class="display-5 fw-bold"> {data?.banner_title}</h1>
                <p class="lead">{data?.banner_description} </p>
                <div class="form-block-banner mw-60 m-auto mt-5">
                  <form name="search" class="search-form" id="helpsearch">
                    <input
                      type="hidden"
                      name="_token"
                      value="5W1juAUY3BWVfBZcOu7dWV727WOdxtrSrqGf9rKW"
                      autocomplete="off"
                    />{" "}
                    <div class="row">
                      <div class="col-md-10">
                        <input
                          type="email"
                          class="form-control me-2"
                          name="search"
                          data-name="search"
                          placeholder="Search for a topic or question"
                          id="searchFormhelp"
                          required=""
                          autocomplete="off"
                        />
                        <ul id="autocomplete-results"></ul>
                      </div>
                      <input type="hidden" id="searchFormslug" value="" />
                      <div class="col-md-2">
                        <input
                          type="button"
                          value="Search"
                          data-wait="Please wait..."
                          class="btn btn-primary"
                          id="btn-search-form"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
        </div>
      </section>
      <section class="support-content ptb-120">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
              <div class="support-article-sidebar sticky-sidebar">
                <div
                  class="nav flex-column nav-pills support-article-tab bg-light-subtle rounded-custom p-5"
                  id="v-pills-support"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {Array.isArray(helpCenterData) &&
                    helpCenterData?.map((item, idx) => (
                      <button
                        key={idx}
                        class={`nav-link ${!idx && "active"}`}
                        data-bs-target={`#support-tab-${idx + 1}`}
                        data-bs-toggle="pill"
                        type="button"
                        role="tab"
                        aria-selected={`${!idx && "true"}`}
                      >
                        {item?.category_name} - {`(${item?.question_ount})`}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-8">
              <div class="tab-content" id="v-pills-supportContent">
                {Array.isArray(helpCenterData) &&
                  helpCenterData?.map((item, idx) => (
                    <div
                      key={idx}
                      class={`tab-pane fade show ${!idx && "active"}`}
                      id={`support-tab-${idx + 1}`}
                      role="tabpanel"
                    >
                      <div class="support-article-wrap">
                        <h2>{item?.category_name}</h2>
                        <ul class="support-article-list list-unstyled mt-4">
                          {item?.help_faq?.map((item2, idx2) => (
                            <li key={idx2} class="py-4 border-top border-light">
                              <Link
                                to={`/help/${item2?.slug}`}
                                state={item2}
                                class="text-decoration-none d-block text-muted"
                              >
                                <h3 class="h5 support-article-title">
                                  {item2?.question}
                                </h3>
                                <p className="truncate-2">
                                  {extractText(item2?.answer)}
                                </p>
                                <span class="btn-link text-decoration-none read-more-link">
                                  Read More
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style1;
