import React from "react";
import { FgProps } from "../../d";

const FgText: React.FC<FgProps> = ({ children, className }) => {
  return <p className={`${className} `}>{children}</p>;
};

export default FgText;
