import React, { useEffect, useState } from "react";
import {
  getServices,
  getServicesCategory,
} from "../../features/actions/services";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookMyTechnician = () => {
  const { categoryData, serviceData } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const data = Array.isArray(categoryData) && categoryData;
  const services = Array.isArray(serviceData) ? serviceData : [];

  useEffect(() => {
    if (id) {
      dispatch(getServices(id));
    }
  }, [id]);

  useEffect(() => {
    dispatch(getServicesCategory());
  }, []);
  useEffect(() => {
    if (data?.length && !id) {
      setId(data[0].id); // ✅ default first category
    }
  }, [data]);
  const selectedCategory = data?.find((cat) => cat.id === id);

  return (
    <section class="feature-tab-section ptb-60 bg-light-subtle">
      <div class="container">
        <div class="row justify-content-center align-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="section-heading text-center mb-4">
              {/* <h5 class="h6 text-primary">Services</h5> */}
              <h2>Book My Technician</h2>
              <p>Book Your Technician Now.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul
              class="nav justify-content-center feature-tab-list-2 mt-4"
              id="nav-tab-2"
              role="tablist"
            >
              {data?.map((item, idx) => (
                <li class="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${!idx && "active"}`}
                    to={`#tab-2-${idx + 1}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#tab-2-${idx + 1}`}
                    role="tab"
                    aria-selected="true"
                    onClick={() => setId(item.id)} // ✅ SET ID HERE
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div class="tab-content" id="nav-tabContent-2">
              <div className="row mt-5">
                {services.length > 0 ? (
                  services.map((srv, i) => (
                    <div key={i} className="col-md-4 mb-4">
                      <div class="feature-card border border-light border-2 rounded-custom p-5">
                        <div class="rounded mb-2 d-flex align-items-center">
                          {selectedCategory?.image && (
                            <img
                              src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH_2}/category/${selectedCategory.image}`}
                              alt={selectedCategory.name}
                              className="img-fluid mb-3 rounded"
                            />
                          )}
                        </div>
                        <h3 class="h5 mt-30">{srv?.name}</h3>
                        <div class="feature-content">
                          <p class="mb-0">{srv?.description}</p>
                        </div>
                        <Link
                          state={srv}
                          to={`/book-calendar/${srv.id}`}
                          className="btn btn-sm btn-primary mt-5   w-100"
                        >
                          Book Service
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center mt-4">No services available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMyTechnician;
