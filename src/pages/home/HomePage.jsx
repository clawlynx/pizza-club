import React from "react";
import LandingSection from "../../components/home/LandingSection";
import PizzaSection from "../../components/home/pizzaSection/PizzaSection";
import ThirdSection from "../../components/home/ThirdSection";
import LocationSection from "../../components/home/LocationSection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <PizzaSection />
      <ThirdSection />
      <LocationSection />
    </div>
  );
}
