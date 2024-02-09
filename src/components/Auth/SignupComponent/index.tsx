// import { useRef, useState } from 'react';

import FgInput from "../../Input";

import FgButton from "../../Button";
import FgText from "../../Text";
import FgHeading from "../../Heading";
import { Link } from "react-router-dom";

const SignupComponent = () => {
  // const ref = useRef(null);
  return (
    <div className="w-full h-svh  flex justify-center items-center">
      <div className=" w-[50%]">
        <FgHeading className="  text-3xl font-bold">Sign up</FgHeading>
        <FgInput label="Name*" />
        <FgInput label="Email*" />

        <div className="my-5">
          <FgButton>Create Account</FgButton>
        </div>

        <FgText className="text-center my-10 text-light">
          Already have an account{" "}
          <Link to="/login" className=" !text-accent">
            Login
          </Link>
        </FgText>
      </div>
    </div>
  );
};

export default SignupComponent;
