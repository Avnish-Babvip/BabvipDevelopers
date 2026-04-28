import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPortfolioDetailBySlug } from "../features/actions/portfolio";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { isLoading, step_data } = useSelector(
    (state) => state.portfolio.detailPortfolioData
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    dispatch(getPortfolioDetailBySlug(slug));
  }, [slug]);

  console.log(step_data.description);

  return (
    <>
      <Helmet>
        <title>{step_data?.step_title || "Babvip"}</title>
        <meta
          name="description"
          content={step_data?.description || "Babvip Description"}
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
            class="page-header position-relative overflow-hidden ptb-100 bg-dark"
            style={{
              background: `url(${assetRoute}/assets/img/page-header-bg.svg)no-repeat bottom left`,
            }}
          >
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 text-center">
                  <h1 class="display-5 fw-bold">{step_data?.step_title}</h1>
                  <ul class="list-unstyled d-flex justify-content-center">
                    <li class="pe-1">
                      <Link to={"/"} class="text-decoration-none text-white">
                        Home /{" "}
                      </Link>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none text-muted">
                        {step_data?.category}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
            </div>
          </section>

          <section class="portfolio-details pt-30">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-9 portfolio-feature-img pb-20">
                  {!imageLoaded && (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "300px" }}
                    >
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      step_data?.step_image
                    }`}
                    alt={step_data?.step_image_alt_tag}
                    className={`img-fluid ${imageLoaded ? "" : "d-none"}`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <div class="col-lg-3">
                  <ul class="list-unstyled">
                    <li>
                      <h5>Client</h5>
                      <span> {step_data?.client}</span>
                    </li>
                    <li>
                      <h5>Date</h5>
                      <span>{step_data?.created_at}</span>
                    </li>
                    <li>
                      <h5>Service</h5>
                      <span>{step_data?.service}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 ">
                  <div class="portfolio-deatil-info">
                    <h3 class="">{step_data?.detail_title}</h3>
                    {step_data?.description
                      ?.split(/\r?\n\r?\n/)
                      .map((para, index) => (
                        <p key={index}>{para}</p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Portfolio;
