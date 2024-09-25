import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
