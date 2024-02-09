import Button from "@mui/material/Button";
import { FgProps } from "../../d";
import { styled } from "@mui/material";
import Constants from "../../common/utils/constants";

const CustomButton = styled(Button)(() => ({
  color: "white",
  outline: "none",
  border: "none",
  height: "44px",
  width: "100%",

  backgroundColor: Constants.AccentColor,
  "&:hover": {
    backgroundColor: Constants.AccentColorDark,
    border: "none",
  },
}));

const FgButton: React.FC<FgProps> = ({ children }) => {
  return (
    <>
      <CustomButton variant="outlined">{children}</CustomButton>
    </>
  );
};

export default FgButton;
