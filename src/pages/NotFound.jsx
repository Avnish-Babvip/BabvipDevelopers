import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="error-section ptb-120 bg-dark min-vh-100 w-100 d-flex flex-column justify-content-center">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-5 col-md-6">
            <div class="error-page-content-wrap">
              <h2 class="error-404 text-warning">404</h2>
              <h1 class="display-5 fw-bold">Page Not Found</h1>
              <p class="lead">
                Efficiently reinvent next-generation scenarios without focused
                networks. Collaboratively productize superior technology before
                robust potentialities.{" "}
              </p>

              <Link to="/" class="btn btn-primary mt-4">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
