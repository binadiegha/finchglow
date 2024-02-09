import { Iimage } from "../../assets/images";
import { FgProps } from "../../d";

interface IconInterface extends FgProps {
  image: Iimage;
  outline?: boolean;
}

const FgIcon = ({ image, outline, className }: IconInterface) => {
  return (
    <span
      className={`${className} ${
        outline && "border-[0.5px] border-[#506982]"
      } w-8 h-8  rounded-lg flex items-center justify-center cursor-pointer`}
    >
      <img src={image.src} alt={image.alt} className=" w-[40px]" />
    </span>
  );
};

export default FgIcon;
