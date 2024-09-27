import React from "react";
import bg from "../../assets/bg5.jpg";

export default function PressSection() {
  return (
    <div
      className="relative md:px-20 md:py-20 px-5 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex justify-center items-center flex-col gap-5 max-w-[650px] text-white mb-10 mx-auto">
        <h4 className="main-font md:text-6xl text-3xl text-center font-bold">
          WHAT THE WORLD SAYS
        </h4>
        <p className="cursive-font md:text-6xl text-3xl text-yellowColor">"</p>
        <p className="cursive-font md:text-6xl text-3xl text-yellowColor">.</p>
        <p className="cursive-font md:text-3xl text-xl text-center">
          "If you like unconventional pizza, this place is for you. Picturesque
          patio on a pedestrian square in the summer."
        </p>
        <p className="main-font md:text-3xl text-xl font-semibold">
          THE GUARDIAN
        </p>
      </div>
    </div>
  );
}
