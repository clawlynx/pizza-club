import React from "react";
import bg from "../../assets/homebg.jpg";
import landing1 from "../../assets/landingh1.png";
import landing2 from "../../assets/landingh3.png";
import landing3 from "../../assets/landingp.png";

export default function LandingSection() {
  return (
    <div
      className=" relative landing-height flex justify-center bg-cover bg-center md:bg-top items-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="flex flex-col gap-0 items-center">
        <img
          src="/uplines.png"
          alt="uplines"
          className="md:w-20 md:h-20 w-12 h-12 animate-slideInTop"
        ></img>
        <h1
          className="bg-no-repeat bg-cover md:text-6xl text-3xl text-white font-semibold md:p-5 p-3 animate-slideInLeft"
          style={{ backgroundImage: `url(${landing1})` }}
        >
          BRINGING PEOPLE
        </h1>
        <h3
          className="bg-no-repeat bg-contain ml-10 md:text-6xl text-3xl bg-center font-semibold text-gray-700 md:p-5 p-3 animate-slideInRight"
          style={{ backgroundImage: `url(${landing2})` }}
        >
          TOGETHER
        </h3>
        <p
          className="bg-no-repeat bg-cover md:text-3xl text-xl text-white main-font md:p-5 p-3 text-center animate-slideInLeft"
          style={{ backgroundImage: `url(${landing3})` }}
        >
          <span className="">with a slice of tasty pizza!</span>
        </p>
        <p className="cursive-font md:text-3xl text-xl text-white animate-slideInRight">
          Call us +44 28 2766 2062
        </p>
        <img
          src="/downlines.png"
          alt="uplines"
          className="md:w-20 md:h-20 w-12 h-12 animate-slideInBottom"
        ></img>
      </div>
    </div>
  );
}
