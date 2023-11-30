"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

import { generate, initialStateBattle } from "./battle";
import { generate as generateFunction } from "@/Assets/funcions";
import { valuesPokemon } from "@/Assets/funcions";

//! import component

import SelectorAlert from "../components/battle/SelectorAlert/SelectorAlert";
import SelectorMode from "../components/battle/SelectorMode/SelectorMode";
import SelectPokemon from "../components/battle/SelectPokemon/SelectPokemon";
import BattleField from "../components/battle/BattleField/BattleField";

function page() {
  const globalState = useSelector((state) => state.valueState);
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const router = useRouter();
  // vamos a crear unas cartas de movimiento aleatoria con posiciones y aceleraciones aleatoria
  const [state, setState] = useState(initialStateBattle(globalState));

  useEffect(() => {
    //console.log("state", state);
    //console.log("globalState", globalState);
    //console.log(".................battle");
    if (globalState.user._id == 0) {
      router.push(`${valuesPokemon.componentBattle.redirection.urlHome.url}`);
    }
  }, []);

  useEffect(() => {
    //! usamos este UseEffect para crear el Equipo Pokemon riva , asignandole propiuedades unicas como las baseStatEnffort level (segun level de entrenador)
    const newState = { ...state };
    //console.log("Ok", newState);
    const teamRival = state.rival.noPokedexTeamPokemon;
    const fetchArray = teamRival?.map((noPokedex) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${noPokedex}`)
    );
    if (fetchArray !== undefined) {
      Promise.all(fetchArray)
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((data) => {
          const createTeam = [];
          data.map((pokemon) => {
            let referencePokemon = generateFunction.newPokemon(
              pokemon,
              newState.rival.dataTrainer,
              newState.general
            );
            referencePokemon._id = `rival${
              Math.random() * (referencePokemon.id || 1)
            }${referencePokemon.name}${
              Math.random() * (referencePokemon.id || 1)
            }`;
            createTeam.push(referencePokemon);
          });

          //console.log('TEAM POKEMON =' ,createTeam)
          newState.rival.teamPokemon = createTeam;
          //console.log("Ok___", newState);

          //! se crean los stats de todos los pokemon de cada entrnador
          newState.user.statsTeam = generate.stats(newState.user.teamPokemon);
          newState.rival.statsTeam = generate.stats(newState.rival.teamPokemon);

          setState({ ...newState });
        });
    }
  }, [state.rival?.noPokedexTeamPokemon]);

  useEffect(() => {
    const newState = { ...state };
    //! se aparto esta sona para elejir un pokemon aleatorio para el usuario y el rival
    newState.game.user.idpokemonSelect = generate.selecRandomAlivePokemon(
      newState.user.teamPokemon
    );
    newState.game.rival.idpokemonSelect = generate.selecRandomAlivePokemon(
      newState.rival.teamPokemon
    );
    console.log("ActualState", newState);
    setState({ ...newState });
  }, [state.rival.teamPokemon]);

  const handlerPhase = (value, property) => {
    if (property !== undefined) {
      const newState = { ...state };
      newState.phase[property] = value;
      setState(newState);
    }
  };
  const handlerSelect = (index, user) => {
    if (user === "user") {
      const newState = { ...state };
      newState.game[user].idpokemonSelect = index;
      setState(newState);
    }
  };

  return (
    <div
      style={{
        position: "realtive",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {
        //!Validaciones de las fases
      }

      {state.phase?.team === "Yes" ? <BattleField state={state} /> : null}

      {state.phase?.selectPokemon === "" && state.phase?.team === "Yes" ? (
        <SelectPokemon
          state={state}
          handler={handlerPhase}
          handlerSelect={handlerSelect}
        />
      ) : null}
      {state.phase?.selectorMode === "" ? (
        <SelectorMode
          handler={handlerPhase}
          phase={valuesPokemon.componentBattle.phases.values[0]}
          title="Select Mode"
        />
      ) : null}

      {state.phase?.team === "" ? (
        <SelectorMode
          handler={handlerPhase}
          phase={valuesPokemon.componentBattle.phases.values[1]}
          title="Your Pokémon team is small, do you want to continue?"
        />
      ) : null}
      {state.phase?.team === "No" ? (
        <SelectorMode
          handler={handlerPhase}
          phase={valuesPokemon.componentBattle.phases.values[1]}
          title="What do u want"
          redirection={valuesPokemon.componentBattle.redirection}
          id={userId}
        />
      ) : null}
    </div>
  );
}

export default page;
