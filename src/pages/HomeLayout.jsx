import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import ToTheTop from "../components/ToTheTop";
import SmallHeader from "../components/SmallHeader";

export default function HomeLayout() {
  const [showSmallBar, setShowSmallBar] = useState(false);
  return (
    <div className="mx-0 overflow-x-hidden">
      <div className="">
        <Header showSmallBar={showSmallBar} setShowSmallBar={setShowSmallBar} />
        {showSmallBar && (
          <SmallHeader
            setShowSmallBar={setShowSmallBar}
            showSmallbar={showSmallBar}
          />
        )}
        <ToTheTop />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
