import React from "react";
import bg from "../../assets/homebg.jpg";
import landing1 from "../../assets/landingh1.png";
import landing2 from "../../assets/landingh3.png";
import landing3 from "../../assets/landingp.png";

export default function LandingSection() {
  return (
    <div
      className="landing-height flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-0 items-center">
        <img
          src="/uplines.png"
          alt="uplines"
          className="w-20 h-20 animate-slideInTop"
        ></img>
        <h1
          className="bg-no-repeat bg-cover text-6xl text-white font-semibold p-5 animate-slideInLeft"
          style={{ backgroundImage: `url(${landing1})` }}
        >
          BRINGING PEOPLE
        </h1>
        <h3
          className="bg-no-repeat bg-contain ml-10 text-6xl font-semibold text-gray-700 p-5 animate-slideInRight"
          style={{ backgroundImage: `url(${landing2})` }}
        >
          TOGETHER
        </h3>
        <p
          className="bg-no-repeat bg-cover text-3xl text-white main-font p-5 text-center animate-slideInLeft"
          style={{ backgroundImage: `url(${landing3})` }}
        >
          <span className="">with a slice of tasty pizza!</span>
        </p>
        <img
          src="/downlines.png"
          alt="uplines"
          className="w-20 h-20 animate-slideInBottom"
        ></img>
      </div>
    </div>
  );
}
