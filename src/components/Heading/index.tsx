import React from "react";
import { FgProps } from "../../d";

const FgHeading: React.FC<FgProps> = ({ children, className }) => {
  return <h1 className={`${className} text-5xl leading-snug`}>{children}</h1>;
};

export default FgHeading;
