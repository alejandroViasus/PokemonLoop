"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter, useSearchParams } from "next/navigation";

//? .....IMPORT COMPONENTS
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";


function Page() {
  const urlHome = "/";
  const globalState = useSelector((state) => state.valueState);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, error, isLoading } = useUser();

  const initialState = {
    userId: searchParams.get("id"),
    userLogin: {},
    userInfo: {},
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch(`/api/user/get/userById?id=${state.userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) =>
        setState({
          ...state,
          userInfo: data.data,
          userLogin: user.email ? user : {},
        })
      )
      .catch((err) => {
        console.log("ERRROR____", err);
        router.push(`${urlHome}`);
      });
  }, [state.userId]);

//   useEffect(() => {
//     if(state.userInfo._id!==undefined){
//         fetch(`/api/pokemon/all?id=${state.userInfo._id}`)
//         .then(response=>response.json())
//         .then(data=>console.log("pokemons___",data.data))

//     }
//   }, [state.userInfo]);

  console.log("_AAAAAAAAAAAAAAAA_", globalState);
  return (
    <div>
      <NavigationMenu />
      <div>
        <h1>id: {state.userId}</h1>
        <h1>user: {user?.email}</h1>
      </div>
      <div>
        {globalState.pokemonsUser.map((pokemon)=>{
            return(<div key={pokemon.name}> {pokemon.name}</div>)
        })}
      </div>
    </div>
  );
}

export default Page;
