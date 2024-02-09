// import { useRef, useState } from 'react';

import FgInput from "../../Input";

import FgButton from "../../Button";
import FgText from "../../Text";
import FgHeading from "../../Heading";
import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import Constants from "../../../common/utils/constants";

const LoginComponent = () => {
  // const ref = useRef(null);
  return (
    <div className="w-full h-svh  flex justify-center items-center">
      <div className=" w-[50%]">
        <FgHeading className="  text-3xl font-bold">Welcome Back!</FgHeading>
        <FgText className=" text-light">
          Welcome back! Please enter your details.
        </FgText>
        <FgInput label="Email*" placeholder="Enter your email" />
        <FgInput label="Password*" placeholder="Enter your password" />

        <div className="my-5">
          <FgButton>Login</FgButton>
        </div>

        <div className=" flex items-center">
          <Checkbox
            className=" "
            defaultChecked
            name="remember-me"
            sx={{
              margin: "none",
              color: Constants.AccentColor,
              "&.Mui-checked": {
                color: Constants.AccentColor,
              },
            }}
          />

          <FgText className=" text-light text-sm">
            {" "}
            Remember me for 30 days
          </FgText>
        </div>

        <FgText className="text-center my-10 text-light">
          Dont have an account with us yet?{" "}
          <Link to="/" className=" !text-accent">
            Sign up now
          </Link>
        </FgText>
      </div>
    </div>
  );
};

export default LoginComponent;
