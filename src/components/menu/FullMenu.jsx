import React from "react";
import bg from "../../assets/bgmenu2.jpg";
import { LuPizza } from "react-icons/lu";
import { LiaHamburgerSolid } from "react-icons/lia";
import { RiDrinksLine } from "react-icons/ri";
import { MdOutlineKebabDining } from "react-icons/md";
import { PiPopcorn } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { MdOutlineChildCare } from "react-icons/md";
import MenuHeaders from "../home/menusection/MenuHeaders";
import {
  burgerData,
  chipsData,
  drinksData,
  extrasData,
  kebabData,
  kiddiesMenu,
  pizzaMenu,
  startersData,
} from "../../utils/menudata";
import PriceItem from "../home/menusection/PriceItem";

export default function FullMenu() {
  return (
    <div
      className="md:px-20 py-10 px-5 bg-repeat flex justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[750px]">
        <h3 className="md:text-5xl text-3xl main-font text-yellowColor font-bold text-center py-10">
          FULL MENU
        </h3>
        <p className="normal-font text-lg text-white text-center">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level
        </p>
        <MenuHeaders
          icon={<PiPopcorn />}
          name={"Starters"}
          clr={"text-orange-500"}
          border={"border-orange-500"}
        />
        <div className="py-10">
          {startersData.map((x) => (
            <PriceItem key={x.id} price={x.price} desc={x.desc} item={x.item} />
          ))}
        </div>
        <MenuHeaders
          icon={<LuPizza />}
          name={"Pizza"}
          clr={"text-orangeColor"}
          border={"border-orangeColor"}
        />
        <div className="py-10">
          {pizzaMenu.map((x) => (
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
        <MenuHeaders
          icon={<LiaHamburgerSolid />}
          name={"Burger"}
          clr={"text-saffronColor"}
          border={"border-saffronColor"}
        />
        <div className="py-10">
          {burgerData.map((x) => (
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
        <MenuHeaders
          icon={<MdOutlineKebabDining />}
          name={"Kebab"}
          clr={"text-mangoColor"}
          border={"border-mangoColor"}
        />
        <div className="py-10">
          {kebabData.map((x) => (
            <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
          ))}
        </div>
        <MenuHeaders
          icon={<LiaCookieBiteSolid />}
          name={"Chips"}
          clr={"text-yellow-500"}
          border={"border-yellow-500"}
        />
        <div className="py-10">
          {chipsData.map((x) => (
            <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
          ))}
        </div>
        <MenuHeaders
          icon={<MdOutlineChildCare />}
          name={"Kiddies Menu"}
          clr={"text-yellow-500"}
          border={"border-yellow-500"}
        />
        <div className="py-10">
          {kiddiesMenu.map((x) => (
            <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
          ))}
        </div>
        <MenuHeaders
          icon={<BiDish />}
          name={"Extras"}
          clr={"text-red-500"}
          border={"border-red-500"}
        />
        <div className="py-10">
          {extrasData.map((x) => (
            <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
          ))}
        </div>
        <MenuHeaders
          icon={<RiDrinksLine />}
          name={"Drinks"}
          clr={"text-yellowColor"}
          border={"border-yellowColor"}
        />
        <div className="py-10">
          {drinksData.map((x) => (
            <PriceItem key={x.id} item={x.item} price={x.price} desc={x.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}
