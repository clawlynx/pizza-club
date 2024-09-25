import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-24 px-20 py-5 flex justify-between items-center bg-partialColor main-font sticky top-0 z-20">
      <img
        src="/logo.png"
        alt="pizza club logo"
        className="w-[65px] h-[70px]"
      ></img>
      <div className="flex">
        <NavLink
          className={
            "text-white text-3xl hover:text-yellowColor nav-link border-r border-gray-600 px-5"
          }
        >
          HOME
        </NavLink>
        <NavLink
          className={"text-white text-3xl hover:text-yellowColor nav-link px-5"}
        >
          MENU
        </NavLink>
      </div>
      <button className="p-2 rounded-lg text-xl border text-white hover:bg-yellowColor nav-link hover:text-black font-semibold hover:shadow-md hover:shadow-yellowColor">
        Contact Us
      </button>
    </div>
  );
}
