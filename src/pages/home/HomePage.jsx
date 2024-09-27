import React from "react";
import LandingSection from "../../components/home/LandingSection";
import PizzaSection from "../../components/home/pizzaSection/PizzaSection";
import ThirdSection from "../../components/home/ThirdSection";
import LocationSection from "../../components/home/LocationSection";
import PressSection from "../../components/home/PressSection";
import StatsSection from "../../components/home/statssection/StatsSection";
import MenuSection from "../../components/home/menusection/MenuSection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <PizzaSection />
      <ThirdSection />
      <MenuSection />
      <StatsSection />
      <PressSection />
      <LocationSection />
    </div>
  );
}
