import React from "react";

export default function FooterDetails({ icon, content }) {
  return (
    <div className="flex gap-5 items-center text-white md:text-lg text-base hover:text-orangeColor nav-link">
      <p>{icon}</p>
      <p>{content}</p>
    </div>
  );
}
