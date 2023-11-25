import React, { useState, useEffect } from "react";
import { initialStateBattle, set, battle,get } from "./batleField";

//components
import AreaBattle from "../AreaBattle/AreaBattle";
import { valuesPokemon } from "@/Assets/funcions";

function BattleField({ localState, trainers = ["User", "Rival"] }) {
  const [state, setState] = useState(initialStateBattle(localState, trainers));

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log("localState", localState);
    setState(initialStateBattle(localState, trainers));
  }, [localState]);

  useEffect(() => {
    if (localState.phase === "fight") {
      console.log("TIMER .....");
      const stepTimer = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          general: {
            ...prevState.general,
            figth: {
              ...prevState.general.figth,
              state: true,
            },
          },
        }));
      }, state.general.time.phase);
      return () => clearTimeout(stepTimer); // Limpiar el temporizador al desmontar el componente
    }
  }, [localState.phase === "fight"]);

  useEffect(() => {
    let battleTimer = setTimeout(() => {
      if (state.general.figth.state && !state.general.figth.pause) {
        //console.log("Go to Fight .....", state.general.time.count);
        setState(battle.phase.timeCount(state));
      }
    }, state.general.time.delay / state.general.figth.actualSpeed.value);
    return () => clearTimeout(battleTimer);
  }, [state.general.figth.state, state.general.time.count]);

  useEffect(() => {
    // if (!state.general.figth.pause && state.general.figth.state) {
    //   const pokemonUser = document.getElementById(valuesPokemon.componentBattle.id.pokemon);
    //   const pokemonRival = document.getElementById(valuesPokemon.componentBattle.id.rival);

    //   console.log( 'in State',pokemonUser)

    //   if (pokemonUser) {
    //     pokemonUser.style.transform = `translate(${state.pokemonUser.position.x.position.pokemon}px, ${state.pokemonUser.position.y.position.pokemon}px)`;
    //     pokemonRival.style.transform = `translate(${state.pokemonRival.position.x.position.pokemon}px, ${state.pokemonRival.position.y.position.pokemon}px)`;
    //   }
    // }
  }, [
    
    state.pokemonUser?.position.x.position.pokemon,
    state.pokemonUser?.position.y.position.pokemon,
  ]);
  

  const handlerPause = () => {
    setState(set.pause(state));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {localState.phase === "fight" && state.general.figth.state === false ? (
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          {localState.phase} !!!
        </h1>
      ) : null}

      <AreaBattle localState={state} />
      <button onClick={handlerPause}>
        {" "}
        {!state.general.figth.pause ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default BattleField;
