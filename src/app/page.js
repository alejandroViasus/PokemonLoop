"use client";
import React from "react";
import { useSelector } from "react-redux";

//import components
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import PrincipalDetailUserHome from "./components/PrincipalDetailUserHome/PrincipalDetailUserHome";
function page() {
  return (
    <div>
      <div>
        <NavigationMenu />
      </div>
      <div>
        <PrincipalDetailUserHome />
      </div>
    </div>
  );
}

export default page;
