import React from "react";

export default function FooterLinks({ icon }) {
  return (
    <p className="md:w-10 md:h-10 w-7 h-7 bg-orangeColor p-2 rounded-full flex items-center justify-center hover:bg-white nav-link">
      {icon}
    </p>
  );
}
