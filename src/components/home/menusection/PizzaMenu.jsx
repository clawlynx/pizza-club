import React from "react";
import { pizzaMenu } from "../../../utils/menudata";
import PriceItem from "./PriceItem";

export default function PizzaMenu() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-slideInBottom py-10">
      {pizzaMenu.slice(0, 6).map((x) => (
        <PriceItem
          key={x.id}
          item={x.item}
          price={x.price}
          desc={x.desc}
          variant1={x.variant1}
          variant2={x.variant2}
          variant1Price={x.variant1price}
          variant2Price={x.variant2price}
        />
      ))}
    </div>
  );
}
