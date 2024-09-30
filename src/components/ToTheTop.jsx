import React from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ToTheTop() {
  return (
    <div
      className="w-10 h-10 rounded-full fixed right-3 bottom-3 bg-yellowColor flex justify-center items-center cursor-pointer hover:bg-transparent hover:text-white hover:border z-20"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </div>
  );
}
