import React from "react";

export default function MenuHeaders({
  icon,
  name,
  clr,
  hover,
  active,
  setActive,
  border,
}) {
  return (
    <div
      className={`${
        active === name ? border : ""
      } flex flex-col justify-center gap-4 items-center ${clr} border-b py-5 ${hover} nav-link cursor-pointer`}
      onClick={() => setActive(name)}
    >
      <span className="md:text-7xl text-4xl">{icon}</span>
      <p className="cursive-font md:text-2xl text-xl">{name}</p>
    </div>
  );
}
