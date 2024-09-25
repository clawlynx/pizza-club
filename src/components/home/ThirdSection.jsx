import React from "react";
import bg from "../../assets/bg3-1.jpg";

export default function ThirdSection() {
  return (
    <div
      className="relative landing-height bg-cover bg-bottom text-white "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 landing-height">
        <img src="/uplines.png" alt="uplines"></img>
        <h3 className="main-font text-6xl font-bold">EXCELLENT TASTE,</h3>
        <h3 className="main-font text-6xl font-bold">TOP QUALITY</h3>
        <h4 className="cursive-font text-3xl my-5">
          we put 100% of love and dedication into our dishes
        </h4>
      </div>
    </div>
  );
}
