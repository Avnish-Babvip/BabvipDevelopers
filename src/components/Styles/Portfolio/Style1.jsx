import React from "react";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  // Extract unique categories
  const uniqueCategories = [
    ...new Set(data?.step_data?.map((item) => item.category)),
  ];

  return (
    <section className="portfolio bg-light-subtle ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>{data?.title}</h2>
              <p>{data?.main_description}</p>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="row justify-content-center">
          <div className="">
            <div className="tab-button mb-5">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                {/* "All" Tab */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>

                {/* Unique Category Tabs */}
                {uniqueCategories.map((category, idx) => (
                  <li key={idx} className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id={`pills-${category.replace(/\s+/g, "-")}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#pills-${category.replace(/\s+/g, "-")}`}
                      type="button"
                      role="tab"
                      aria-controls={`pills-${category.replace(/\s+/g, "-")}`}
                      aria-selected="false"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content" id="pills-tabContent">
            {/* "All" Tab Content */}
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <div className="row">
                {data?.step_data?.map((item, index) => (
                  <Link
                    to={`/portfolio/${item?.port_slug}`}
                    className="col-lg-4"
                    key={index}
                  >
                    <div className="single-portfolio-item mb-30">
                      <div className="portfolio-item-img">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item.step_image_icon
                          }`}
                          alt={
                            item.step_image_icon_alt_tag || "portfolio photo"
                          }
                          className="img-fluid"
                        />
                        <div className="portfolio-info">
                          <h5>
                            <div className="text-decoration-none text-white">
                              {item.step_title}
                            </div>
                          </h5>
                          <div className="categories">
                            <span>{item.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dynamic Tabs for Unique Categories */}
            {uniqueCategories.map((category, idx) => (
              <div
                key={idx}
                className="tab-pane fade"
                id={`pills-${category.replace(/\s+/g, "-")}`}
                role="tabpanel"
                aria-labelledby={`pills-${category.replace(/\s+/g, "-")}-tab`}
              >
                <div className="row">
                  {data?.step_data
                    ?.filter((item) => item.category === category)
                    .map((item, index) => (
                      <Link
                        to={`/portfolio/${item?.port_slug}`}
                        className="col-lg-4"
                        key={index}
                      >
                        <div className="single-portfolio-item mb-30">
                          <div className="portfolio-item-img">
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/${item.step_image_icon}`}
                              alt={
                                item.step_image_icon_alt_tag ||
                                "portfolio photo"
                              }
                              className="img-fluid"
                            />
                            <div className="portfolio-info">
                              <h5>
                                <div className="text-decoration-none text-white">
                                  {item.step_title}
                                </div>
                              </h5>
                              <div className="categories">
                                <span>{item.category}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
