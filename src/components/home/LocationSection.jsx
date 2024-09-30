import React from "react";
import bg from "../../assets/bg4.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { handleChatClick, phone } from "../../utils/whatsapp";

export default function LocationSection() {
  return (
    <div className="flex md:flex-row flex-col landing-height">
      <div className="bg-yellowColor landing-height md:px-20 px-5 w-full flex flex-col justify-center items-center gap-5 text-black">
        <p className="cursive-font md:text-3xl text-xl text-center">
          Contact +44 28 2766 2062
        </p>
        <p className="cursive-font md:text-3xl text-xl text-center">
          to explore world of pizzas
        </p>
        <a
          href={`tel:${phone}`}
          target="_blank"
          className="p-3 normal-font rounded-full border-2 border-black font-semibold text-xl hover:bg-black hover:text-yellowColor nav-link"
        >
          Contact Now
        </a>
      </div>
      <div
        className="relative w-full md:px-20 px-5 landing-height flex flex-col justify-center bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-white flex flex-col gap-5 justify-center items-center h-full my-auto">
          <span className="md:text-6xl text-3xl">
            <FaLocationDot />
          </span>
          <p className="cursive-font md:text-2xl text-xl text-center">
            12 Market St, Ballymoney BT53 6EB, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
}
