import React from "react";
import { Link, NavLink } from "react-router-dom";
import { phone } from "../utils/whatsapp";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ showSmallBar, setShowSmallBar }) {
  return (
    <div className="h-24 md:px-20 px-5 py-5 flex justify-between items-center bg-partialColor main-font sticky top-0 z-20">
      <Link to={"/"} className="flex gap-2 items-center">
        <img
          src="/logo.png"
          alt="pizza club logo"
          className="w-[65px] h-[70px]"
        ></img>
        <h1 className="cursive-font text-2xl text-yellowColor">PIZZA CLUB</h1>
      </Link>
      <div className="md:flex hidden">
        <NavLink
          to={"/"}
          className={
            "text-white text-3xl hover:text-yellowColor nav-link border-r border-gray-600 px-5"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={"/menu"}
          className={"text-white text-3xl hover:text-yellowColor nav-link px-5"}
        >
          MENU
        </NavLink>
      </div>
      <a
        href={`tel:${phone}`}
        target="_blank"
        className="p-2 rounded-lg text-xl hidden md:block border text-white hover:bg-yellowColor nav-link hover:text-black font-semibold hover:shadow-md hover:shadow-yellowColor"
      >
        Contact Us
      </a>
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setShowSmallBar(!showSmallBar)}
      >
        <RxHamburgerMenu />
      </button>
    </div>
  );
}
