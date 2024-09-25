import React from "react";
import Slider from "react-slick";
import { pizzaCarouselData } from "../../../utils/pizzacarouselData";
import PizzaCard from "./PizzaCard";

export default function PizzaCarousel() {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (2 seconds)
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
  };
  return (
    <div className="w-full flex justify-center">
      <Slider {...settings} className="w-full ">
        {pizzaCarouselData.map((x, index) => (
          <PizzaCard key={index} img={x.img} content={x.content} />
        ))}
      </Slider>
    </div>
  );
}
// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
