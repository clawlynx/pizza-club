import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-partialColor w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <div className="text-5xl main-font text-white font-bold">404!</div>
      <p className="text-lg normal-font text-white">
        The page you are looking is not found.
      </p>
      <Link
        to={"/"}
        className="px-4 py-2 rounded-lg bg-yellowColor hover:bg-yellow-400 nav-link text-black"
      >
        Back Home
      </Link>
    </div>
  );
}
