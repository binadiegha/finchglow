import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../pages/home";
import App from "../App";
import LoginPage from "../pages/login";
import LoginComponent from "../components/Auth/LoginComponent/";
import SignupComponent from "../components/Auth/SignupComponent";
import VerificationComponent from "../components/Auth/VerificationComponent";
import OTPComponent from "../components/Auth/OTPComponent";

const routes = {
  MAIN: <LoginPage />,
  APP: <App />,
  LOGIN: <LoginComponent />,
  SIGNUP: <SignupComponent />,
  VERIFY: <VerificationComponent />,
  OTP: <OTPComponent />,
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
]);

export default Router;
