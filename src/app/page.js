"use client";
import React from "react";
import { useSelector } from "react-redux";

//import components
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
function page() {
  const globalState = useSelector((state) => state.valueState);
  return (
    <div>
      <NavigationMenu />
      <h1>This is the homepage {globalState.user.gametag} ww</h1>
      <h1> {globalState.user._id}</h1>
    </div>
  );
}

export default page;


