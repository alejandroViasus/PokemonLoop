"use client";
import React from "react";
import { useSelector } from "react-redux";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

//import components
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import PrincipalDetailUserHome from "./components/PrincipalDetailUserHome/PrincipalDetailUserHome";
import BottonLogin from "./components/bottonLogin/BottonLogin";


function page() {
  const globalState = useSelector((state) => state.valueState);
  console.log(globalState.user._id)
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
        {
          globalState.user._id === '0'
            ? (

              <div
                className="flex-all-center
              percentage-100-width 
              percentage-100-height
              
              "
                style={{
                  backgroundColor: typesPokemon.None.colors.background
                }}
              >

                {/* <Image
                  src={
                    "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
                  }
                  height={70}
                  width={100}
                  alt="logo Pokemon"
                  style={{
                    height: "80%",
                    width: "auto",
                  }}
                /> */}
                <BottonLogin />
              </div>
            )
            : (<PrincipalDetailUserHome />)
        }

      </div>
    </div>
  );
}

export default page;
