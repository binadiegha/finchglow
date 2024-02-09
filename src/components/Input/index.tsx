import { forwardRef } from "react";
import { FgInputProps } from "../../d";
import { Input as BaseInput } from "@mui/base/Input";

const FgInput = forwardRef<HTMLDivElement, FgInputProps>(function FgInput(
  props,
  ref
) {
  const { label, ...allProps } = props;
  return (
    <span className=" block mt-5">
      <label className="block my-1 font-semibold">{label}</label>
      <BaseInput
        ref={ref}
        slotProps={{
          input: {
            className:
              "w-full border-2 h-[44px] px-3 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-[8px] shadow-md shadow-slate-100 focus:shadow-outline-primary border border-solid border-slate-300 hover:border-primary focus:border-primary bg-white text-slate-900 focus-visible:outline-0",
          },
        }}
        {...allProps}
      />
    </span>
  );
});

export default FgInput;
