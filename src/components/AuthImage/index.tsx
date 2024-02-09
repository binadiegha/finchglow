import { AVATAR_GROUP, HAND_DRAWN_ARROW, STAR } from "../../assets/images";
import FgText from "../Text";
import FgHeading from "../Heading";
import data from "./data";
import { Outlet } from "react-router-dom";

const AuthImage = () => {
  return (
    <section className=" flex">
      <section className="relative bg-primary max-h-svh h-svh w-1/2 flex items-center bg-auth-background bg-[length:100%_100%] bg-no-repeat">
        <div className=" w-[55%] mx-auto flex flex-col gap-8 -translate-y-20">
          <img src={STAR.src} alt={STAR.alt} width="100" />

          <FgHeading className=" text-white">{data.Heading}</FgHeading>
          <FgText className=" text-white">{data.Body}</FgText>
          <div className="flex gap-5 items-center">
            <img src={AVATAR_GROUP.src} alt={AVATAR_GROUP.alt} />
            <FgText className=" text-white">{data.Side}</FgText>
          </div>
        </div>

        {/* arrow */}
        <div className="absolute -right-20 top-[65%]">
          <img
            src={HAND_DRAWN_ARROW.src}
            alt={HAND_DRAWN_ARROW.alt}
            width={400}
          />
        </div>
      </section>

      <section className=" w-1/2">
        <Outlet />
      </section>
    </section>
  );
};
export default AuthImage;
