import React from "react";
import bg from "../../../assets/bg2.jpg";
import PizzaCarousel from "./PizzaCarousel";

export default function PizzaSection() {
  return (
    <div
      className="md:px-20 px-5 py-10 bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col gap-5 justify-center items-center my-20">
        <h2 className="text-white text-6xl main-font font-bold text-center">
          WELCOME TO PIZZA CLUB!
        </h2>
        <h3 className="text-3xl text-yellowColor cursive-font text-center">
          Family Cafe & Pizzeria
        </h3>
        <p className="max-w-[600px] text-white normal-font text-center">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level
        </p>
      </div>
      <PizzaCarousel />
    </div>
  );
}
