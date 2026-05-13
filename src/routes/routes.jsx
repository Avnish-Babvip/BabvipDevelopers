// -----------------------------------------------Imports---------------------------------------------
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import DynamicRootPage from "../pages/DynamicRootPage";
import Loader from "../components/Loader/Loader";
import DownloadCertificate from "../pages/DownloadCertificate";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import ChangePassword from "../pages/Authentication/ChangePassword";
import VerifyEmailSignup from "../pages/Authentication/VerifyEmailSignup";
import Services from "../pages/Services";
import ServicePlans from "../pages/ServicePlan";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProfileTab from "../pages/Dashboard/AccountCenterTabData/ProfileTab";
import BillingTab from "../pages/Dashboard/AccountCenterTabData/BillingTab";
import ProductTab from "../pages/Dashboard/AccountCenterTabData/ProductTab";
import SecurityTab from "../pages/Dashboard/AccountCenterTabData/SecurityTab";
import DashboardChangePassword from "../pages/Dashboard/DashboardChangePassword";
import ProtectedRoute from "../services/ProtectedRoute";
import BookMyTechnician from "../pages/BookMyTechnician/BookMytechnician";
import BookingCalendar from "../pages/BookMyTechnician/BookingCalendar";
import InternshipTraining from "../pages/Internship/InternshipTraining";
import MyAppointments from "../pages/Dashboard/MyAppointments";
import ServicePlanEnquiry from "../pages/Dashboard/ServicePlanEnquiry";

// Lazy Loading 😴
const Blog = lazy(() => import("../pages/Blog"));
const Insight = lazy(() => import("../pages/Insight"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

// import Blog from "../pages/Blog";
// import HelpCenter from "../pages/HelpCenter";
// import Portfolio from "../components/Home/Portfolio/Portfolio";

// ---------------------------------------------------------------------------------------------------
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <DynamicRootPage />,
      },
      {
        path: "/:slug",
        element: <DynamicRootPage />,
      },
      {
        path: "/login--signup", // 👈 separate route
        element: <Login />,
      },
      {
        path: "/signup", // 👈 separate route
        element: <Signup />,
      },
      {
        path: "/forgot-password", // 👈 separate route
        element: <ForgotPassword />,
      },
      {
        path: "/password/reset/:slug", // 👈 separate route
        element: <ChangePassword />,
      },
      {
        path: "/verify-email", // 👈 separate route
        element: <VerifyEmailSignup />,
      },
      {
        path: "/download/certificate",
        element: <DownloadCertificate />,
      },
      {
        path: "/industrial-training-internship",
        element: <InternshipTraining />,
      },
      {
        path: "/book-my-technician",
        element: <BookMyTechnician />,
      },
      {
        path: "/book-calendar/:id",
        element: (
          <ProtectedRoute>
            <BookingCalendar />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products-services",
        element: <Services />,
      },
      {
        path: "/products-services/:slug",
        element: <ServicePlans />,
      },
      {
        path: "/customer/appointment",
        element: (
          <ProtectedRoute>
            <MyAppointments />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/plan-enquiry",
        element: (
          <ProtectedRoute>
            <ServicePlanEnquiry />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/profile",
        element: (
          <ProtectedRoute>
            <ProfileTab />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/billing",
        element: (
          <ProtectedRoute>
            <BillingTab />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/products",
        element: (
          <ProtectedRoute>
            <ProductTab />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/security",
        element: (
          <ProtectedRoute>
            <SecurityTab />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customer/changePassword",
        element: (
          <ProtectedRoute>
            <DashboardChangePassword />
          </ProtectedRoute>
        ),
      },
      {
        path: "/insights/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Insight />
          </Suspense>
        ),
      },
      {
        path: "/blog/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/help/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <HelpCenter />
          </Suspense>
        ),
      },
      {
        path: "/portfolio/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        ),
      },
    ],
  },
]);

export const maintenanceAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />,
  },
]);
