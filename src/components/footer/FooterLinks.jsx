import React from "react";

export default function FooterLinks({ icon }) {
  return (
    <p className="w-10 h-10 bg-orangeColor p-2 rounded-full flex items-center justify-center hover:bg-white nav-link">
      {icon}
    </p>
  );
}
