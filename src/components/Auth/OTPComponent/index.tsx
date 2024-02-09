import { useState } from "react";

import FgButton from "../../Button";
import FgText from "../../Text";
import FgHeading from "../../Heading";
import { Link } from "react-router-dom";
// import CodeInput from "../../Codes";
import { OTP } from "../../Codes";

const OTPComponent = () => {
  const [otp, setOtp] = useState("");
  // const ref = useRef(null);
  return (
    <div className="w-full h-svh  flex justify-center items-center">
      <div className="w-[50%]">
        <FgHeading className=" text-3xl font-bold text-center">
          Verify your email
        </FgHeading>

        <FgText className="text-center my-10 text-light">
          Input the code that was sent to your email in the field below to
          verify your email.
        </FgText>

        {/* <OTPInput /> */}
        <div className="mx-auto flex justify-center">
          <OTP
            separator={<span> </span>}
            value={otp}
            onChange={setOtp}
            length={4}
          />
        </div>
        <div className="my-5">
          <FgButton>Verify </FgButton>
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

export default OTPComponent;
