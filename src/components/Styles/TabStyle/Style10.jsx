import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "tab1", label: "Collectibles", icon: "fa-anchor" },
  { id: "tab2", label: "Locksmith", icon: "fa-edit" },
  { id: "tab3", label: "Abatement", icon: "fa-gg" },
  { id: "tab4", label: "Instructor", icon: "fa-google-wallet" },
];

const content = {
  tab1: {
    text: "CREATE ONLINE WEBSITE WITH ONLY 1-CLICK",
    img: "https://templates.seekviral.com/organ/images/resource/parallax-tab1.jpg",
  },
  tab2: {
    text: "BUILD SECURE LOCKSMITH PLATFORM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJwhYNkFgYifz8u8-Te6p0ClWqQsIDCGAwg&s",
  },
  tab3: {
    text: "IMPROVE YOUR BUSINESS ABATEMENT",
    img: "http://placehold.it/570x384",
  },
  tab4: {
    text: "BECOME A CERTIFIED INSTRUCTOR",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJwhYNkFgYifz8u8-Te6p0ClWqQsIDCGAwg&s",
  },
};

const Style10 = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <style>{`
        .block {
          padding: 60px 0;
          position: relative;
          z-index: 1;
        }

        .parallax-bg {
         
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .parallax-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.65); /* dark overlay */
          z-index: 0;
        }

        .container, .parallax-tabs, .simple-parallax-text {
          position: relative;
          z-index: 1;
        }

        .parallax-tabs ul.nav {
          background: rgba(37, 31, 31, 0.9);
          display: inline-flex;
          padding: 0 20px;
          margin-bottom: 50px;
          border-radius: 0;
        }

        .parallax-tabs ul.nav li {
          list-style: none;
          margin: 0 20px;
        }

        .parallax-tabs ul.nav li a {
          color: #fff;
          padding: 15px 20px;
          text-decoration: none;
          display: block;
          font-weight: 300;
        }

        .parallax-tabs ul.nav li.active a {
          color: #e74c3c;
          border-bottom: 2px solid #e74c3c;
        }

        .simple-parallax-text h3 {
          font-weight: bold;
          color: white;
        }

        .simple-parallax-text span {
          color: #e74c3c;
          font-style: italic;
        }

        .simple-parallax-text p {
          color: #d5d5d5;
        }

        .coloured-btn {
          background: #e74c3c;
          color: #fff;
          padding: 10px 20px;
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
        }
      `}</style>

      <section>
        <div
          className="block parallax-bg"
          style={{
            background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
              data?.banner_bg_image
            })no-repeat
                center center / cover`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-white mb-4">
                <span>{data?.sub_title}</span>
                <h1 className="fw-bold text-white">{data?.title}</h1>
              </div>

              <div className="parallax-tabs text-center">
                <ul className="nav justify-content-center">
                  {Array.isArray(data?.tab_data) &&
                    data?.tab_data.map((item, idx) => (
                      <li
                        key={idx}
                        className={idx === activeTab ? "active" : ""}
                      >
                        <a onClick={() => setActiveTab(idx)}>
                          {item.tab_title}
                        </a>
                      </li>
                    ))}
                </ul>

                <div className="tab-content text-start">
                  <div className="row align-items-center">
                    {Array.isArray(data?.tab_data) &&
                      data?.tab_data.map(
                        (item, idx) =>
                          activeTab === idx && (
                            <>
                              <div className="col-md-6">
                                <div className="simple-parallax-text">
                                  <span>{item?.tab_main_title_}</span>
                                  <h3>{item?.tab_title}</h3>
                                  <p>{item?.tab_description}</p>
                                  {item?.button_text && (
                                    <Link
                                      to={item?.button_url}
                                      target="_blank"
                                      className="coloured-btn"
                                    >
                                      {item?.button_text}
                                    </Link>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/${item?.tab_image}`}
                                  alt={item?.tab_image_alt_tag}
                                  className="img-fluid"
                                />
                              </div>
                            </>
                          )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style10;
