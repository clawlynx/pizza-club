import React from "react";
import PriceItem from "./PriceItem";
import { kebabData } from "../../../utils/menudata";

export default function KebabMenu() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-slideInBottom py-10">
      {kebabData.slice(0, 6).map((x) => (
        <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
      ))}
    </div>
  );
}
