import { useState } from "react";

const Style9 = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-semibold text-uppercase">{data?.title}</h2>
          <hr
            style={{
              width: "80px",
              borderTop: "2px solid #d29052",
              margin: "16px auto",
            }}
          />
        </div>

        {/* Make tabs and content the same height */}
        <div className="row border" style={{ minHeight: "279px" }}>
          <div className="col-md-3 p-0 bg-white border-end d-flex">
            <ul className="nav flex-column nav-pills w-100 flex-grow-1 m-0">
              {Array.isArray(data?.tab_data) &&
                data?.tab_data.map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <button
                      className={`nav-link text-start py-4 px-4 w-100 border-bottom rounded-0 ${
                        activeTab === idx
                          ? "text-white fw-semibold"
                          : "bg-light text-dark fw-medium"
                      }`}
                      style={{
                        backgroundColor: activeTab === idx ? "#d29052" : "",
                        color: activeTab === idx ? "white" : "#d29052",
                      }}
                      onClick={() => setActiveTab(idx)}
                    >
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.tab_image
                        }`}
                        alt={item?.tab_image_alt_tag}
                        className={`me-2`}
                      />{" "}
                      {item.tab_title}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-md-9 p-4 bg-white">
            {Array.isArray(data?.tab_data) &&
              data?.tab_data.map(
                (item, idx) =>
                  activeTab === idx && (
                    <div
                      key={idx}
                      className="h-100 d-flex flex-column justify-content-between"
                    >
                      <div>
                        <h5 className=" text-uppercase mb-3">
                          {item.tab_title}
                        </h5>
                        <hr />
                        <p
                          className="pt-3 text-capitalize"
                          style={{ color: "#000000", fontSize: "14px" }}
                        >
                          {item.tab_description}
                        </p>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style9;
