"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector, useDispatch } from "react-redux";

import { globalStateFormat } from "@/Assets/globalStateFormat";
import { valuesPokemon } from "@/Assets/funcions";

//? ---- components

import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import BattlePhaseSelection from "../components/BattlePhaseSelection/BattlePhaseSelection";

function Page() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);
  const urlHome = "/";
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const initialState = {
    phase: "login-phase",
    trainer: globalState,
    rival: globalStateFormat,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    //valido si el globalState tiene datos validos, de lo contrario re dirije a "/"
    if (globalState.user._id == 0) {
      router.push(`${urlHome}`);
    }
  }, []);

  // useEffect(() => {

  //   const teamUserPokemon=fetch(`/api/pokemon/get/team?id=${state.trainer.user._id}`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data.data))
  //   .catch(err=>console.log(err))

  //   const teamRivalPokemon = [];
  //   for(let i=0; i<valuesPokemon.componentBattle.sizeTeam; i++){
  //     teamRivalPokemon.push(Math.round(Math.random()*(valuesPokemon.minNumberPokedex+valuesPokemon.maxNumberPokedex)))
  //   }

  //   console.log('create Rival' , teamRivalPokemon)

  //   console.log("battle", state);
  // }, [state]);
  return (
    <div>
      <div>
        <NavigationMenu />
      </div>
      {state.phase === "selection-phase" ? (
        <BattlePhaseSelection localState={state} />
      ) : null}
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Page;
