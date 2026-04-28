import React, { useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import DashboardHeader from "../Header/DashboardHeader";
import DashboardSidebar from "../Sidebar/DashboardSidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardDefaultLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <ErrorBoundary>
      <div className="d-flex nunitoSans-font min-vh-100 position-relative">
        {/* Sidebar */}
        <div
          className={`bg-light d-none d-lg-block`}
          style={{ width: "220px" }}
        >
          <DashboardSidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>

        {/* Popup sidebar for small screens */}
        {isSidebarOpen && (
          <div
            className="position-fixed top-0 start-0 bg-white shadow h-100"
            style={{ width: "250px", zIndex: 1050 }}
          >
            <DashboardSidebar
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              closeSidebar={() => setSidebarOpen(false)}
            />
            <button
              className="border-0 bg-white  position-absolute top-0 end-0 m-2 d-lg-none"
              onClick={() => setSidebarOpen(false)}
            >
              ✖
            </button>
          </div>
        )}

        {/* Right side - header and content */}
        <div className="flex-grow-1 d-flex flex-column">
          <DashboardHeader onHamburgerClick={() => setSidebarOpen(true)} />
          <main
            className="flex-grow-1 py-3 p-lg-3 "
            style={{ backgroundColor: "#F7F7F7" }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardDefaultLayout;
