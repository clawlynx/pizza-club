import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { handleChatClick, phone } from "../utils/whatsapp";

export default function SmallHeader({ showSmallbar, setShowSmallBar }) {
  return (
    <div className="md:hidden w-full bg-partialColor px-5 py-10 absolute z-20 animate-slideInTop">
      <div
        className="flex justify-end text-yellowColor text-2xl"
        onClick={() => setShowSmallBar(!showSmallbar)}
      >
        <IoMdClose />
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <NavLink
          to={"/"}
          className={
            "text-white text-xl hover:text-yellowColor nav-link border-b border-gray-600 py-5"
          }
          onClick={() => setShowSmallBar(!showSmallbar)}
        >
          HOME
        </NavLink>
        <NavLink
          className={
            "text-white text-xl hover:text-yellowColor nav-link  border-b border-gray-600 pb-5"
          }
          to={"/menu"}
          onClick={() => setShowSmallBar(!showSmallbar)}
        >
          MENU
        </NavLink>
      </div>
      <button
        onClick={handleChatClick}
        className="my-5 p-2 rounded-lg text-lg border text-white hover:bg-yellowColor nav-link hover:text-black font-semibold hover:shadow-md hover:shadow-yellowColor"
      >
        Contact Us
      </button>
    </div>
  );
}
