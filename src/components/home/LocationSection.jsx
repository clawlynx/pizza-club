import React from "react";

export default function LocationSection() {
  return (
    <div className="flex landing-height">
      <div className="bg-yellowColor landing-height w-full flex flex-col justify-center items-center gap-5 text-black">
        <p className="cursive-font text-3xl">Contact +44 28 2766 2062</p>
        <p className="cursive-font text-3xl">to explore world of pizzas</p>
        <button className="p-3 normal-font rounded-full border-2 border-black font-semibold text-xl hover:bg-black hover:text-yellowColor nav-link">
          Contact Now
        </button>
      </div>
      <div className="w-full landing-height"></div>
    </div>
  );
}
