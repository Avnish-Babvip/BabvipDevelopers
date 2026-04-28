import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";

const Footer = () => {
  const { footerMenuData } = useSelector((state) => state.footerMenu);
  const [expandedMenus, setExpandedMenus] = useState({});

  const { footerSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData,
  );
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData,
  );

  const theme = footerSetting?.setting_data?.footer_type || "light";

  const toggleExpand = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <footer
      class="footer-section"
      data-bs-theme={theme}
      style={{ backgroundColor: theme === "dark" ? "#171717" : "#FFFFFF" }}
    >
      <div class="footer-top footer-light pt-120 pb-60">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
              <div class="footer-single-col">
                <Link to={"/"}>
                  <div class="footer-single-col mb-4">
                    {footerSetting?.setting_data?.footer_logo && (
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          footerSetting?.setting_data?.footer_logo
                        }`}
                        alt={footerSetting?.setting_data?.footer_logo_alt}
                        class="img-fluid"
                      />
                    )}
                  </div>
                </Link>
                <p>{footerSetting?.setting_data?.footer_description}</p>

                <SubscribeForm buttonText="Subscribe" />

                <div class="ratting-wrap mt-4">
                  <h6 class="mb-0">
                    {footerSetting?.setting_data?.rating_title}
                  </h6>
                  <ul class="list-unstyled rating-list list-inline mb-0">
                    {footerSetting?.setting_data?.rating &&
                      Array(Number(footerSetting?.setting_data?.rating))
                        ?.fill()
                        ?.map((_, idx) => {
                          return (
                            <li
                              key={idx}
                              class="list-inline-item  padding-end-1"
                            >
                              {" "}
                              <i class="fas fa-star text-warning"></i>
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
              <div class="row">
                {Array.isArray(footerMenuData) &&
                  footerMenuData?.map((item, idx) => {
                    const items = item?.children_recursive || [];

                    const showAll = expandedMenus[idx] === true;
                    const visibleItems = showAll ? items : items.slice(0, 6);

                    return (
                      item?.status === "active" && (
                        <Link
                          target="_blank"
                          to={
                            item?.menu_slug ||
                            item?.pages?.page_data?.page_slug ||
                            "#"
                          }
                          key={idx}
                          class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0 mb-md-5"
                        >
                          <div class="footer-single-col">
                            <h3>{item?.title}</h3>

                            <ul class="list-unstyled footer-nav-list mb-lg-0">
                              {/* Show only first 6 or all depending on state */}
                              {visibleItems.map(
                                (item2, idx2) =>
                                  item2?.status === "active" && (
                                    <li key={idx2}>
                                      <Link
                                        target="_blank"
                                        to={
                                          item2?.menu_slug ||
                                          item2?.pages?.page_data?.page_slug ||
                                          "#"
                                        }
                                        class="text-decoration-none"
                                      >
                                        {item2?.title}
                                      </Link>
                                    </li>
                                  ),
                              )}

                              {/* SEE MORE / SEE LESS button */}
                              {items.length > 6 && (
                                <li>
                                  <button
                                    type="button"
                                    class="btn btn-link p-0 mt-2"
                                    onClick={() => toggleExpand(idx)}
                                  >
                                    {showAll ? "See Less" : "See More"}
                                  </button>
                                </li>
                              )}
                            </ul>
                          </div>
                        </Link>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom footer-light py-4">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-7 col-lg-7">
              <div class="copyright-text">
                <p class="mb-lg-0 mb-md-0">
                  {footerSetting?.setting_data?.footer_tag_line}
                </p>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="footer-single-col text-start text-lg-end text-md-end">
                <ul class="list-unstyled list-inline footer-social-list mb-0">
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href={siteSetting?.setting_data?.facebook_page_url}
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
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href={siteSetting?.setting_data?.you_tube_page_url}
                      target="_blank"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
