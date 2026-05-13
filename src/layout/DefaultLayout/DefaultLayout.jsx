// ----------------------------------Imports--------------------------------------
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import DashboardDefaultLayout from "./DashboardDefaultLayout";
import ChatBot from "../../components/Chatbot";

// --------------------------------------------------------------------------------

const DefaultLayout = () => {
  const { pathname } = useLocation(); // Get the current route

  const isCustomerSlugRoute = pathname.startsWith("/customer/");

  const isAuthenticationSlugRoute =
    pathname.startsWith("/login") || pathname.startsWith("/signUp");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Runs when route changes

  return isCustomerSlugRoute ? (
    <>
      <DashboardDefaultLayout /> <ChatBot />
    </>
  ) : (
    <div>
      <ErrorBoundary>
        {!isAuthenticationSlugRoute && <Header />}
        <Outlet />
        <ChatBot />
        {!isAuthenticationSlugRoute && <Footer />}
      </ErrorBoundary>
    </div>
  );
};

export default DefaultLayout;
