import React from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";

export default function MenuHeaders({
  icon,
  name,
  clr,
  hover,
  active,
  setActive,
  border,
  shadow,
  bg,
}) {
  return (
    <div
      className={`${
        active === name
          ? `white ${border} shadow-md border ${shadow} -mb-1 ${bg} `
          : "border-b"
      } flex flex-col justify-center gap-4 items-center ${clr} rounded-t-lg py-5 ${hover} nav-link cursor-pointer`}
      onClick={() => setActive(name)}
    >
      <span className="md:text-7xl text-4xl">{icon}</span>
      <div className="flex gap-2 items-center">
        <p className="cursive-font md:text-2xl text-xl ">{name}</p>
        <span className="md:text-3xl text-2xl font-extrabold">
          {active === name ? <CiCircleChevUp /> : <CiCircleChevDown />}
        </span>
      </div>
    </div>
  );
}
