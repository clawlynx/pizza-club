import React from "react";

export default function PizzaCard({ img, content }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img src={img} className="w-52 h-52 rounded-full overflow-hidden"></img>
      <h4 className="text-yellowColor cursive-font text-2xl">{content}</h4>
    </div>
  );
}
