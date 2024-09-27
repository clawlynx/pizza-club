import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatItem({ number, stat, span }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 justify-center items-center text-white"
    >
      <h4 className="cursive-font md:text-6xl text-3xl text-center">
        {inView ? <CountUp end={number} duration={1} /> : `${number}`}
        {span}
      </h4>
      <p className="main-font font-semibold md:text-3xl text-xl">{stat}</p>
    </div>
  );
}
