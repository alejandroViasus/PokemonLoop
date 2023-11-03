"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPokemons } from "@/store/slice";

//? ---------------- COMPONENTS
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  useEffect(() => {
    // fetch(`/api/pokemon/all?email=${globalState.user.email}`)
    fetch(`/api/user/getuser?email=${globalState.user.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        if(data.register){
          dispatch(getAllPokemons(data.data));
        }else{
          if(globalState.user.email!==""){
            router.push("/register");
          }else{
            console.log("correo vacio redireccion : Invalida")
          }
        }
      })
      .catch((err) => {
        console.log("ERROR__________",err)
        if (globalState.user.email !== "") {
          router.push("/register");
        }
      });
  }, [globalState.user.email]);

  console.log(globalState);
  return (
    <main className="main-app">
      <NavigationMenu />

      <h1>
        globalState {"  : "} {globalState.user.email}
      </h1>
      <h1>pokemons {globalState.user.allPokemons.length}</h1>
    </main>
  );
}

{
  /* <Image
  src={
    "https://th.bing.com/th/id/R.166c3adb6c3150c596e8fd75aae6fb0a?rik=AgySNAtTku0dxg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f07%2fPok%c3%a9mon_logo.png&ehk=qOQewe8jlQDEb75Dsg5lFydn3LWbIbxRGjIoWlzDcA8%3d&risl=&pid=ImgRaw&r=0"
  }
  width={500}
  height={183}
  alt="logo-pokemon"
/> */
}
