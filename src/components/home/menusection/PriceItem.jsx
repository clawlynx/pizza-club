import React from "react";

export default function PriceItem({
  item,
  price,
  desc,
  variant1,
  variant2,
  variant1Price,
  variant2Price,
}) {
  return (
    <div className="relative flex flex-col w-full text-white">
      <div className="flex justify-between items-center border-b py-2">
        <p className="main-font md:text-3xl text-xl font-semibold">{item}</p>
        <p className="cursive-font text-yellowColor md:text-2xl text-xl">
          {price}
        </p>
      </div>
      <div className="flex justify-between items-center normal-font font-semibold py-2">
        <p className="md:max-w-[400px] max-w-[200px]">{desc}</p>
        <div className="flex flex-col gap-1">
          {variant1 && (
            <p className="flex">
              {variant1}
              {":"}{" "}
              <span className="cursive-font text-yellowColor">
                {" "}
                {variant1Price}
              </span>
            </p>
          )}
          {variant2 && (
            <p className="flex">
              {variant2}
              {":"}{" "}
              <span className="cursive-font text-yellowColor">
                {" "}
                {variant2Price}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
