import React from "react";
import { drinksData } from "../../../utils/menudata";
import PriceItem from "./PriceItem";

export default function DrinksMenu() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-slideInBottom py-10">
      {drinksData.slice(0, 6).map((x) => (
        <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
      ))}
    </div>
  );
}
