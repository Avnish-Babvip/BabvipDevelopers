import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";
import { BsPersonCircle } from "react-icons/bs";
import { getProfileData } from "../../features/actions/dashboard";

const Header = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const { profileData } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();
  const profileDropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { customerData, isUserLoggedIn } = useSelector(
    (state) => state.authentication,
  );
  // const { customer } = useSelector((state) => state.dashboard.profileData);
  const customer = profileData;

  const { headMenuData } = useSelector((state) => state.headMenu);
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData,
  );

  // Function to close offcanvas menu on link click
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasWithBackdrop");
    if (offcanvasElement) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdown2, setActiveDropdown2] = useState(null);

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    // <header class="main-header position-absolute w-100 z-10">
    <header class="main-header w-100 z-10">
      <nav className="navbar navbar-expand-xl navbar-light sticky-header">
        <div className="container d-flex align-items-center justify-content-between">
          {/* LEFT: Brand */}
          <Link
            to={"/"}
            className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
          >
            {siteSetting?.setting_data?.site_logo && (
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  siteSetting?.setting_data?.site_logo
                }`}
                alt={siteSetting?.setting_data?.site_logo_alt}
                className="img-fluid"
              />
            )}
          </Link>

          {/* CENTER: Menu */}
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                <li>
                  <Link
                    target="_blank"
                    to={`products-services`}
                    class="nav-link"
                  >
                    Products & Services
                  </Link>
                </li>

                {Array.isArray(headMenuData) &&
                  headMenuData?.length > 0 &&
                  headMenuData?.map((item, idx) =>
                    item?.status === "active" &&
                    item?.is_horizontal &&
                    item?.children_recursive?.length > 0 ? (
                      <li
                        key={idx}
                        className="nav-item dropdown"
                        onMouseEnter={() => setActiveDropdown(idx)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <Link
                          target="_blank"
                          className="nav-link dropdown-toggle"
                          to={
                            item?.menu_slug ||
                            item?.pages?.page_data?.page_slug ||
                            "#"
                          }
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item?.title}
                        </Link>
                        <div
                          className={` dropdown-menu border-0 rounded-custom shadow py-0  ${
                            activeDropdown === idx ? "show" : ""
                          }`}
                        >
                          <div className="dropdown-grid rounded-custom homepage-dropdown">
                            <div style={{ width: "864px" }}>
                              <div className="row g-0">
                                {item?.children_recursive?.map(
                                  (item2, idx2) =>
                                    item2?.status === "active" && (
                                      <Link
                                        target="_blank"
                                        to={
                                          item2?.menu_slug ||
                                          item2?.pages?.page_data?.page_slug ||
                                          "#"
                                        }
                                        key={idx2}
                                        className="col-md-4"
                                        onClick={() => setActiveDropdown(null)} // Close dropdown when clicked
                                      >
                                        <div
                                          className="card h-100 border-0 rounded-3 zoom-card"
                                          style={{
                                            width: "288px",
                                            cursor: "pointer",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <div className="card-body">
                                            <div className="mb-3">
                                              <img
                                                src={
                                                  item2?.menu_image
                                                    ? `${
                                                        import.meta.env
                                                          .VITE_REACT_APP_IMAGE_PATH
                                                      }/${item2?.menu_image}`
                                                    : `${assetRoute}/placeholder.webp`
                                                }
                                                alt={item2?.title}
                                                width={255}
                                                height={150}
                                                className="rounded-3 zoom-image"
                                              />
                                            </div>
                                            <div>
                                              <h5 className="card-title d-flex align-items-center fs-6 gap-2">
                                                <div>{item2?.title}</div>
                                              </h5>
                                              <p className="card-text text-muted   small truncate-2 font-weight-semibold text-capitalize">
                                                {item2?.menu_description}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : item?.status === "active" &&
                      !item?.is_horizontal &&
                      item?.children_recursive?.length > 0 ? (
                      <li
                        key={idx}
                        class="nav-item dropdown"
                        onMouseEnter={() => setActiveDropdown2(idx)}
                        onMouseLeave={() => setActiveDropdown2(null)}
                      >
                        <Link
                          target="_blank"
                          class="nav-link dropdown-toggle  "
                          onClick={() => setActiveDropdown2(null)}
                          to={
                            item?.menu_slug ||
                            item?.pages?.page_data?.page_slug ||
                            "#"
                          }
                          // data-bs-toggle="dropdown"
                        >
                          {item?.title}
                        </Link>
                        <div
                          class={`dropdown-menu border-0 rounded-custom shadow py-0  homepage-list-wrapper ${
                            activeDropdown2 === idx ? "show" : ""
                          }`}
                        >
                          <div class="dropdown-grid rounded-custom  homepage-dropdown">
                            {/* Custom Logo Mega Header Layout  */}
                            <div className="" style={{ width: "900px" }}>
                              <div className="row g-0">
                                {item?.children_recursive?.map(
                                  (item2, idx2) =>
                                    item2?.status === "active" && (
                                      <Link
                                        key={idx2}
                                        target="_blank"
                                        to={
                                          item2?.id === 52
                                            ? isUserLoggedIn
                                              ? "/customer/dashboard"
                                              : "/login--signup"
                                            : item2?.menu_slug ||
                                              item2?.pages?.page_data
                                                ?.page_slug ||
                                              "#"
                                        }
                                        className="col-md-6"
                                        onClick={() => setActiveDropdown2(null)}
                                        style={{ cursor: "pointer" }}
                                      >
                                        <div
                                          className="card h-100 border-0 rounded-4 dropdownCardHover"
                                          style={{ width: "450px" }}
                                        >
                                          <div className="card-body d-flex align-items-center gap-3">
                                            {/* IMAGE */}
                                            <div>
                                              <img
                                                src={
                                                  item2?.menu_image
                                                    ? `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item2?.menu_image}`
                                                    : `${assetRoute}/placeholder.webp`
                                                }
                                                alt={item2?.title}
                                                width={70}
                                                height={70}
                                                className="rounded-3"
                                              />
                                            </div>

                                            {/* CONTENT */}
                                            <div>
                                              <h5
                                                className="card-title d-flex gap-2 fs-6 custom-hover-color"
                                                style={{ color: "#175cff" }}
                                              >
                                                {/* 🔥 TITLE CHANGE */}
                                                {item2?.id === 52
                                                  ? isUserLoggedIn
                                                    ? "Dashboard"
                                                    : "Client Login / Sign Up"
                                                  : item2?.title}
                                                <span>›</span>
                                              </h5>

                                              {/* 🔥 DESCRIPTION CHANGE */}
                                              {(item2?.menu_description ||
                                                item2?.id === 52) && (
                                                <p className="card-text truncate-2 text-muted text-capitalize small font-weight-semibold">
                                                  {item2?.id === 52
                                                    ? isUserLoggedIn
                                                      ? "Go to your dashboard"
                                                      : item2?.menu_description
                                                    : item2?.menu_description}
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={idx}>
                        <Link
                          target="_blank"
                          to={
                            item?.menu_slug ||
                            item?.pages?.page_data?.page_slug ||
                            "#"
                          }
                          class="nav-link"
                        >
                          {item?.title}
                        </Link>
                      </li>
                    ),
                  )}
              </ul>
            </ul>
          </div>
          {/* RIGHT: mobile Hamburger */}
          <div className="d-flex align-items-center gap-5 ">
            {/* Hamburger */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <i className="flaticon-menu"></i>
            </button>
            {/* Desktop Hamburger*/}
            {isUserLoggedIn && (
              <div className="d-xl-flex gap-5 align-items-center d-none ">
                <div
                  className="position-relative d-none d-xl-block"
                  ref={profileDropdownRef}
                >
                  <div
                    className="d-flex align-items-center gap-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      src={
                        customer?.profile_image
                          ? `${customer?.profile_image}`
                          : `${assetRoute}/placeholder.webp`
                      }
                      height={40}
                      width={40}
                      className="rounded-circle"
                      alt="Profile"
                    />
                    <span className="fw-semibold text-black">
                      {customer?.first_name} {customer?.last_name}
                    </span>
                  </div>

                  {dropdownOpen && (
                    <div
                      className="dropdown-menu show mt-2 p-2 shadow rounded-3"
                      style={{
                        right: 0,
                        left: "auto",
                        minWidth: "160px",
                        position: "absolute",
                      }}
                    >
                      <Link to="/customer/dashboard" className="dropdown-item">
                        Dashboard
                      </Link>
                      <Link to="/customer/profile" className="dropdown-item">
                        My Profile
                      </Link>
                      <Link
                        to="/customer/changePassword"
                        className="dropdown-item"
                      >
                        Change Password
                      </Link>
                      <Link
                        onClick={() => {
                          dispatch(customerLogout(customerData?.token));
                        }}
                        className="dropdown-item text-danger"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* //mobile screen */}

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasWithBackdrop"
      >
        <div class="offcanvas-header d-flex align-items-center mt-4">
          <Link
            to={"/"}
            class="d-flex align-items-center mb-md-0 text-decoration-none"
          >
            {siteSetting?.setting_data?.site_logo && (
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  siteSetting?.setting_data?.site_logo
                }`}
                alt={siteSetting?.setting_data?.site_logo_alt}
                class="img-fluid ps-2"
              />
            )}
          </Link>
          <button
            type="button"
            class="close-btn text-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="flaticon-cancel"></i>
          </button>
        </div>

        <div class="offcanvas-body">
          <ul class="nav col-12 col-md-auto justify-content-center main-menu">
            {Array.isArray(headMenuData) &&
              headMenuData?.length > 0 &&
              headMenuData?.map((item, idx) =>
                item?.children_recursive?.length > 0 ? (
                  <li key={idx} class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      to={
                        item?.menu_slug ||
                        item?.pages?.page_data?.page_slug ||
                        "#"
                      }
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item?.title}
                    </Link>
                    <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper">
                      <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                        <div class="dropdown-grid-item bg-white radius-left-side">
                          {item?.children_recursive?.map((item2, idx2) => (
                            <Link
                              to={
                                item2?.menu_slug ||
                                item2?.pages?.page_data?.page_slug ||
                                "#"
                              }
                              onClick={closeOffcanvas} // Close offcanvas on click
                              key={idx2}
                              class="dropdown-link"
                            >
                              <img
                                src={
                                  item2?.menu_image
                                    ? `${
                                        import.meta.env
                                          .VITE_REACT_APP_IMAGE_PATH
                                      }/${item2?.menu_image}`
                                    : `${assetRoute}/placeholder.webp`
                                }
                                alt={item2?.title}
                                class="demo-list rounded"
                              />

                              <div class="dropdown-info">
                                <div class="drop-title text-capitalize">
                                  {item2?.title}
                                </div>
                                <p className="text-capitalize truncate-1">
                                  {item2?.menu_description}{" "}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={idx}>
                    <Link
                      to={
                        item?.menu_slug ||
                        item?.pages?.page_data?.page_slug ||
                        "#"
                      }
                      class=" nav-link text-capitalize"
                      onClick={closeOffcanvas} // Close offcanvas on click
                    >
                      {item?.title}
                    </Link>
                  </li>
                ),
              )}
          </ul>
        </div>

        {isUserLoggedIn && (
          <div
            className="position-absolute bottom-0 end-0 p-4 d-xl-none"
            style={{ zIndex: 1055 }} // Ensure it stays above base content
          >
            <div className="nav-item dropdown">
              <div
                className="d-flex align-items-center nav-link dropdown-toggle gap-4"
                style={{ cursor: "pointer" }}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    customer?.profile_image
                      ? `${customer?.profile_image}`
                      : `${assetRoute}/placeholder.webp`
                  }
                  height={40}
                  width={40}
                  className="rounded-circle"
                  alt="Profile"
                />
                <span className="fw-semibold text-black">
                  {customer?.first_name} {customer?.last_name}
                </span>
              </div>

              <div
                className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper show-on-click"
                style={{
                  width: "300px", // Increased width for the dropdown box
                  minWidth: "300px", // Set a fixed min-width to avoid shrinkage
                }}
              >
                <div className="dropdown-grid rounded-custom ">
                  <div className="dropdown-grid-item bg-white radius-left-side">
                    <Link
                      to="/customer/dashboard"
                      onClick={closeOffcanvas}
                      className="dropdown-link d-flex align-items-center gap-2"
                    >
                      <img
                        src={`${assetRoute}/placeholder.webp`}
                        className="demo-list rounded"
                        alt="Customer"
                      />
                      <div className="dropdown-info">
                        <div className="drop-title text-capitalize">
                          Dashboard
                        </div>
                        <p className="truncate-1">Go to Dashboard</p>
                      </div>
                    </Link>

                    <Link
                      to="/customer/profile"
                      onClick={closeOffcanvas}
                      className="dropdown-link d-flex align-items-center gap-2"
                    >
                      <img
                        src={`${assetRoute}/placeholder.webp`}
                        className="demo-list rounded"
                        alt="Admin"
                      />
                      <div className="dropdown-info">
                        <div className="drop-title text-capitalize">
                          My Profile
                        </div>
                        <p className="truncate-1">Go to My Profile</p>
                      </div>
                    </Link>

                    <Link
                      to="/customer/changePassword"
                      onClick={closeOffcanvas}
                      className="dropdown-link d-flex align-items-center gap-2"
                    >
                      <img
                        src={`${assetRoute}/placeholder.webp`}
                        className="demo-list rounded"
                        alt="Admin"
                      />
                      <div className="dropdown-info">
                        <div className="drop-title text-capitalize">
                          Change Password
                        </div>
                        <p className="truncate-1">Go to Change Password</p>
                      </div>
                    </Link>

                    <Link
                      to="/customer/profile"
                      onClick={() => {
                        dispatch(customerLogout(customerData?.token));
                        closeOffcanvas();
                      }}
                      className="dropdown-link d-flex align-items-center gap-2"
                    >
                      <img
                        src={`${assetRoute}/placeholder.webp`}
                        className="demo-list rounded"
                        alt="Logout"
                      />
                      <div className="dropdown-info">
                        <div className="drop-title text-capitalize">
                          Log out
                        </div>
                        <p className="truncate-1">Logged out the profile</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
