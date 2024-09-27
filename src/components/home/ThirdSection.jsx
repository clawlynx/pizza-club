import React from "react";
import bg from "../../assets/bg3-1.jpg";

export default function ThirdSection() {
  return (
    <div
      className="relative px-5 md:px-20 p-10 landing-height bg-cover bg-bottom text-white "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 landing-height">
        <img src="/uplines.png" className="w-20 h-20" alt="uplines"></img>
        <h3 className="main-font md:text-6xl text-3xl text-center font-bold">
          EXCELLENT TASTE,
        </h3>
        <h3 className="main-font md:text-6xl text-3xl text-center font-bold">
          TOP QUALITY
        </h3>
        <h4 className="cursive-font md:text-3xl text-xl text-center my-5">
          we put 100% of love and dedication into our dishes
        </h4>
      </div>
    </div>
  );
}
