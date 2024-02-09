import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../pages/home";
import App from "../App";
import LoginPage from "../pages/login";
import LoginComponent from "../components/Auth/LoginComponent/";
import SignupComponent from "../components/Auth/SignupComponent";
import VerificationComponent from "../components/Auth/VerificationComponent";
import OTPComponent from "../components/Auth/OTPComponent";
import DashboardLayout from "../pages/dashboard/layout/layout";
import { Dashboard } from "@mui/icons-material";

const routes = {
  MAIN: <LoginPage />,
  APP: <App />,
  LOGIN: <LoginComponent />,
  SIGNUP: <SignupComponent />,
  VERIFY: <VerificationComponent />,
  OTP: <OTPComponent />,

  DASHBOARD_LAYOUT: <DashboardLayout />,
  DASHBOARD: <Dashboard />,
};

const Router = createBrowserRouter([
  {
    path: "/app",
    element: routes.APP,
  },
  {
    path: "/",
    element: routes.MAIN,
    children: [
      {
        path: "",
        element: routes.SIGNUP,
      },
      {
        path: "/login",
        element: routes.LOGIN,
      },
      {
        path: "/verify",
        element: routes.VERIFY,
      },
      {
        path: "/otp",
        element: routes.OTP,
      },
    ],
  },
  {
    path: "/dashboard",
    element: routes.DASHBOARD_LAYOUT,
    children: [
      {
        path: "",
        element: routes.DASHBOARD,
      },
      {
        path: "user-management",
        element: <div>User managment</div>,
      },
      {
        path: "customer-applications",
        element: <div>Customer application page</div>,
      },
      {
        path: "rest",
        element: <div>more odhfh</div>,
      },
    ],
  },
]);

export default Router;
