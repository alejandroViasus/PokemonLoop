"use client";
import React from "react";
import { useSelector } from "react-redux";

//import components
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import PrincipalDetailUserHome from "./components/PrincipalDetailUserHome/PrincipalDetailUserHome";
function page() {
  return (
    <div
      className="content-home 
    percentage-100-width 
    percentage-100-height
    flex-all-center
    "
    >
      <div className="all-percentage-100 ">
        <NavigationMenu />
      </div>
      <div className="principal-details-home percentage-100-width
      flex-all-center 
      ">
        <PrincipalDetailUserHome />
      </div>
    </div>
  );
}

export default page;
