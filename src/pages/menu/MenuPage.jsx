import React, { useEffect } from "react";
import MenuLanding from "../../components/menu/MenuLanding";
import FullMenu from "../../components/menu/FullMenu";

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <MenuLanding />
      <FullMenu />
    </div>
  );
}
