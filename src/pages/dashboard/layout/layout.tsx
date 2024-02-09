import React, { Dispatch, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import FgIcon from "../../../components/FgIcon";
import {
  ARROW_DOWN,
  COLLAPSE_ICON,
  DASHBOARD_ICON,
  Iimage,
  LOGO,
} from "../../../assets/images";
import { FgProps } from "../../../d";
import Routes, { IRoutes } from "./route";

interface IMenu extends FgProps {
  to?: string;
  icon?: Iimage;
  label?: string;
  handleCollapse?: Dispatch<React.SetStateAction<void>>;
  collapse?: boolean;
  Children?: IRoutes[];
}

const DashboardLayout = () => {
  return (
    <>
      <main className=" flex">
        <div className="w-[20%] bg-dark-blue h-svh">
          <div className="inner w-[80%] mx-auto mt-10 flex flex-col gap-10">
            <div className="brand flex justify-between">
              <img src={LOGO.src} alt={LOGO.alt} />
              <span>
                <FgIcon image={COLLAPSE_ICON} />
              </span>
            </div>

            <section className="links">
              {Routes.map((item) => (
                <MenuItem
                  key={item.label}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                  Children={item.children}
                />
              ))}
            </section>
          </div>
        </div>
        <section>
          <div>top navigation</div>
          <section>
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

function MenuItem({ to, icon, label, Children }: IMenu) {
  const [isActive, setIsActive] = useState(false);

  function handleCollapse() {
    setIsActive((prev) => !prev);
  }
  return (
    <>
      <div className="my-3">
        <NavLink
          onClick={handleCollapse}
          to={to ? to : "/dashboard"}
          end
          className={({ isActive }) =>
            isActive
              ? `bg-accent flex items-center justify-between  py-2 rounded-lg px-2`
              : `flex items-center justify-between  py-2 rounded-lg px-2 transition-transform`
          }
        >
          <div className=" flex items-center gap-5 ">
            <FgIcon image={icon ? icon : DASHBOARD_ICON} />
            <span className="text-white">{label ? label : "Dashbaord"}</span>
          </div>

          {Children && (
            <FgIcon
              image={ARROW_DOWN}
              className={`${isActive && "rotate-180"} transition-transform`}
            />
          )}
        </NavLink>

        {/* children */}
        <div
          className={`${
            isActive && "!h-auto !overflow-auto"
          } h-0 overflow-hidden`}
        >
          {/* conye */}
          {Children &&
            Children.map((subMenu) => <ChildMenu key={subMenu.label} to="" />)}
        </div>
      </div>
    </>
  );
}

function ChildMenu({ to }: IMenu) {
  const [isActive, setIsActive] = useState(false);

  function showChild() {
    setIsActive((prev) => !prev);
  }
  return (
    <div className="my-3">
      <NavLink
        onClick={() => showChild}
        to={to ? to : ""}
        end
        className={({ isActive }) =>
          isActive
            ? `text-[#B4BFC9]  flex items-center justify-between  py-2 rounded-lg px-2`
            : `text-[#F48487] flex items-center justify-between  py-2 rounded-lg px-2 transition-transform`
        }
      >
        <li>SOme itemkjb</li>
        <FgIcon
          image={ARROW_DOWN}
          className={`${isActive && "rotate-180"} transition-transform`}
        />
      </NavLink>

      {/* children */}
      <div></div>
    </div>
  );
}
export default DashboardLayout;
