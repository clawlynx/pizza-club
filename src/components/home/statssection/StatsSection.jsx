import React from "react";
import { statData } from "../../../utils/statData";
import StatItem from "./StatItem";

export default function StatsSection() {
  return (
    <div className="bg-orangeColor px-20 py-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-10 gap-2 mx-auto w-full justify-center items-center my-10">
        {statData.map((x) => (
          <StatItem key={x.id} number={x.num} stat={x.content} span={x.span} />
        ))}
      </div>
    </div>
  );
}
