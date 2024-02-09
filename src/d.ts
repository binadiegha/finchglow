import { ReactNode, InputHTMLAttributes } from "react";

export interface FgProps
  extends React.HTMLAttributes<HTMLElement | HTMLInputElement> {
  children?: ReactNode;
  className?: string;
  label?: string;
}

export interface FgInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  endAdornment?: ReactNode;
}
