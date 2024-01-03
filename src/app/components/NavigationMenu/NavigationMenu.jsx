"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { updateTeam, updateUser } from "@/store/slice";
import { useRouter , usePathname} from "next/navigation";
import { navigationItems } from "@/Assets/navigationItems";
import Link from "next/link";
import Image from "next/image";

//? import Components
import NavigationMenuItems from "../NavigationMenuItems/NavigationMenuItems";
import { typesPokemon } from "@/Assets/typesPokemon";

//? {
//?user:{
//?   email: "alejandro.daniel.viasus@gmail.com";
//?   email_verified: true;
//?   family_name: "Viasus";
//?   given_name: "Alejandro";
//?   locale: "es";
//?   name: "Alejandro Viasus";
// ?  nickname: "alejandro.daniel.viasus";
//?   picture: "https://lh3.googleusercontent.com/a/ACg8ocLegeezlQitgn3TwBxvjkcaj2Ue19Z8QrQSgKSXjqi-Ag=s96-c";
//?   sid: "52b6iyFFvV3RXc2AGNpSRu3tFXkGYobA";
//?   sub: "google-oauth2|102044553791208789220";
//?   updated_at: "2023-11-03T03:52:41.721Z";
//?   }
//? }

function NavigationMenu({ iNeedInfoUser = () => {} }) {
  // creacion de variables
  const urlSingUp = "/sign-up";
  const router = useRouter();
  const pathname = usePathname()
  const dispatch = useDispatch();
  const { user, error, isLoading } = useUser();
  const globalState = useSelector((state) => state.valueState);
  

  //! useEffects
  useEffect(() => {
    //* al renderizar el componente hace la peticion a la bd para que me traiga el usuario en caso tal de estar registrado
    if (globalState.user.email !== undefined) {
      fetch(`/api/user/getuser?email=${globalState.user.email}`)
        .then((response) => response.json())
        .then((data) => {
          //! data biene en este formato
          const dataUser = data.data;
          //console.log("NEW DATA _____", data.data, globalState.user.email);
          if (data.register) {
            //console.log("____BIENVENIDO", dataUser.gametag);
            dispatch(updateUser({ state: globalState, newUser: dataUser }));
          } else {
            router.push(`${urlSingUp}`);
          }
        });
    }
    //console.log("desde NavigationManu", globalState);
  }, [
    globalState.user?.email,
    globalState.user?._id,
    user?.email,
    globalState.render,
  ]);

  useEffect(() => {
    const newUser = { ...globalState.user, email: user?.email || undefined };
    //console.log("NEW USER", newUser);
    iNeedInfoUser(user);
    dispatch(updateUser({ state: globalState, newUser: newUser }));
  }, [user]);

  useEffect(() => {
    if (globalState.user._id !== "0") {
      fetch(`/api/pokemon/get/team?id=${globalState.user._id}`)
        .then((response) => response.json())
        .then((data) => {
          let dataTeam = data.data;
          //console.log("data", dataTeam);
          dispatch(updateTeam({ state: globalState, teamUser: dataTeam }));
        });
    }
  }, [globalState.version]);

  useEffect(() => {
    //console.log("desde NavigationManu", globalState);
  }, [globalState.teamUser]);

  const keyNavigationItems = Object.keys(navigationItems);

  const menuNavigation = keyNavigationItems.map((item) => {
    //console.log(navigationItems[item].route(),pathname, navigationItems[item].route().includes(pathname))
    //console.log(navigationItems[item].route(),path, navigationItems[item].route()===path)
    const path=`${pathname}?id=`
    
    return (
      <NavigationMenuItems
        key={navigationItems[item].route(globalState.user._id)}
        item={navigationItems[item]}
        id={globalState.user._id}
        theme ={[globalState.user.theme]}
        focus={navigationItems[item].route()===path?true:false}
      />
    );
  });

  return (
    <section
      className="
      content-navigation-menu
      vw100 
      flex-all-center
    "
      style={{
        backgroundColor: typesPokemon[globalState.user.theme].colors.primary,
      }}
    >
      <div className="content-image-navigation-menu">
        {/* <h3>{globalState.user.email}</h3>
        <h3>lvl {globalState.user.level}</h3>
        <h3>exp: {globalState.user.experience}</h3>
        <h3>pokeballs: {globalState.user.pokeballs}</h3>
        <h3>box: {globalState.user.box}</h3>
        <h3>coins: {globalState.user.coins}</h3> */}

        <Image
          src={
            "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
          }
          height={50}
          width={150}
          alt="logo Pokemon"
          style={{
            height: "80%",
            width: "auto",
          }}
        />
      </div>
      {globalState.user._id !== "0" ? (
        <div className="content-items-navigation">{menuNavigation}</div>
      ) : null}

      <div className="button-login">
        {globalState.user._id === "0" ? (
          <Link
            className="title"
            href="/api/auth/login"
            style={{
              color: typesPokemon[globalState.user.theme].colors.text,
            }}
          >
            <h3>LOGIN</h3>
          </Link>
        ) : (
          <Link
            className="title"
            href="/api/auth/logout"
            style={{
              color: typesPokemon[globalState.user.theme].colors.text,
            }}
          >
            <h3>LOGOUT</h3>
          </Link>
        )}
      </div>
    </section>
  );
}

export default NavigationMenu;
