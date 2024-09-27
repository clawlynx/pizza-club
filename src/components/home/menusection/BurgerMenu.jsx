import React from "react";
import PriceItem from "./PriceItem";
import { burgerData } from "../../../utils/menudata";

export default function BurgerMenu() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-slideInBottom py-10">
      {burgerData.slice(0, 6).map((x) => (
        <PriceItem
          key={x.id}
          item={x.item}
          price={x.price}
          desc={x.desc}
          variant1={x.variant1 && x.variant1}
          variant1Price={x.variant1price && x.variant1price}
        />
      ))}
    </div>
  );
}
