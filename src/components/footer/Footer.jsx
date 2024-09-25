import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import FooterLinks from "./FooterLinks";
import FooterDetails from "./FooterDetails";

const icons = [<FaXTwitter />, <FaFacebookF />, <FaYoutube />, <FaInstagram />];
const footerDetails = [
  {
    id: 1,
    icon: <IoLocationOutline />,
    content: "12 Market St, Ballymoney BT53 6EB, United Kingdom",
  },
  {
    id: 2,
    icon: <CiPhone />,
    content: "+44 28 2766 2062",
  },
];

export default function Footer() {
  return (
    <div className="bg-partialColor px-20 py-5">
      <div
        className=" flex justify-between items-center
    "
      >
        <div className="flex flex-col gap-5">
          <img
            src="/logo.png"
            alt="pizza club logo"
            className="w-28 h-32"
          ></img>
          <div className="flex gap-3">
            {icons.map((x) => (
              <FooterLinks key={x} icon={x} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 normal-font">
          {footerDetails.map((x) => (
            <FooterDetails key={x.id} icon={x.icon} content={x.content} />
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-gray-500 my-5"></div>
      <p className="normal-font text-white text-center">
        © 2024 / All Rights Reserved
      </p>
    </div>
  );
}
