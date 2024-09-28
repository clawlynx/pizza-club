import React, { useState } from "react";
import bg from "../../../assets/bgmenu2.jpg";
import { menuHeadings } from "../../../utils/menudata";
import MenuHeaders from "./MenuHeaders";
import PizzaMenu from "./PizzaMenu";
import BurgerMenu from "./BurgerMenu";
import KebabMenu from "./KebabMenu";
import DrinksMenu from "./DrinksMenu";
import { Link } from "react-router-dom";

export default function MenuSection() {
  const [active, setActive] = useState("Pizza");
  return (
    <div
      className="relative px-5 md:px-20 py-10 bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="flex justify-center flex-col items-center relative py-5">
        <h4 className="bg-yellowColor p-2 main-font font-semibold md:text-5xl text-2xl rounded-lg text-center">
          CAST YOUR EYES UPON OUR ENCHANTING MENU
        </h4>
        <p className="cursive-font text-yellowColor md:text-3xl text-xl text-center my-5">
          Deliciousness! This is where it happens!
        </p>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-2 md:gap-0 gap-y-2 relative z-10 my-10">
        {menuHeadings.slice(0, 4).map((x) => (
          <MenuHeaders
            key={x.id}
            icon={x.icon}
            name={x.name}
            clr={x.color}
            hover={x.hover}
            active={active}
            setActive={setActive}
            border={x.border}
            shadow={x.shadow}
            bg={x.bg}
          />
        ))}
      </div>
      {active === "Pizza" && <PizzaMenu />}
      {active === "Burger" && <BurgerMenu />}
      {active === "Kebab" && <KebabMenu />}
      {active === "Drinks" && <DrinksMenu />}
      <div className="relative flex justify-center">
        <Link
          className="p-2 px-3 rounded-full text-yellowColor main-font border border-yellowColor hover:bg-yellowColor hover:text-black font-semibold nav-link"
          to={"/menu"}
        >
          View Full Menu
        </Link>
      </div>
    </div>
  );
}
