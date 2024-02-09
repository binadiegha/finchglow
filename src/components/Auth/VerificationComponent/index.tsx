// import { useRef, useState } from 'react';

import FgButton from "../../Button";
import FgText from "../../Text";
import FgHeading from "../../Heading";
import { Link } from "react-router-dom";

const VerificationComponent = () => {
  // const ref = useRef(null);
  return (
    <div className="w-full h-svh  flex justify-center items-center">
      <div className=" w-[50%]">
        <FgHeading className=" text-3xl font-bold text-center">
          Verify your email
        </FgHeading>

        <FgText className="text-center my-10 text-light">
          Hello Jonny, use the link below to verify your email and start booking
          your tickets.
        </FgText>

        <div className="my-5">
          <FgButton>Verify email</FgButton>
        </div>

        <FgText className="text-center my-10 text-light">
          Questions? email us at{" "}
          <Link to="" className=" !text-accent">
            support@fgt.com
          </Link>
        </FgText>
      </div>
    </div>
  );
};

export default VerificationComponent;
