import { valuesPokemon } from "@/Assets/funcions";
import React, { useState, useEffect } from "react";
import pokemon from "../../../../../models/pokemon";
import { battle } from "@/app/battle/battlek";
import { generate } from "@/Assets/funcions";

function ShowVectorDirection({ battleState, user }) {
  //battleState=OriginalBattleState
  const initialState = () => {
    const OriginalBattleState = { ...battleState };
    const pokemonSelected =
      battleState.team[user][battleState.selectorPokemon[user]];
    const positionPokemonSelected = battleState.position[user].pokemon;
    const sizePokemon = battle.get.sizepokemon(pokemonSelected);

    const newState = {
      speed: generate.getStat(pokemonSelected, "Speed") ,
      sizePokemon: sizePokemon,
      vector: {
        ...OriginalBattleState.cardsVector[user][
          battleState.selectorCardVector[user]
        ],
      },
      dimensionBatteField: {
        left: 0,
        rigth: valuesPokemon.componentBattle.areaBattlefield.size.width,
        top: 0,
        bottom: valuesPokemon.componentBattle.areaBattlefield.size.height,
      },
      position: {
        left: positionPokemonSelected.x,
        rigth: positionPokemonSelected.x + sizePokemon,
        top: positionPokemonSelected.y,
        botton: positionPokemonSelected.y + sizePokemon,
      },
      delay: {
        frame: 5,
        timmer: 10000,
      },
    };
    //newState.vector.powerActual=newState.vector.power;
    return { ...newState };
  };
  const [state, setState] = useState(initialState());

  useEffect(() => {
    let newState = initialState();
    setState({ ...newState });
  }, [battleState]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.vector.powerActual === 0) {
        clearInterval(interval);
      } else {
        let newState = { ...state };
        if (
          newState.position.left <= newState.dimensionBatteField.left ||
          newState.position.left + newState.sizePokemon >=
            newState.dimensionBatteField.rigth ||
          newState.position.top <= newState.dimensionBatteField.top ||
          newState.position.top + newState.sizePokemon >=
            newState.dimensionBatteField.bottom
        ) {
            
            clearInterval(interval);
            newState = initialState();
        }
        newState = battle.locomotion.stepVectorDirection(newState);
        if (newState.vector.powerActual <= 0) {
          newState = initialState();
        }
        setState(newState);
      }
    }, state.delay.frame);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.vector.powerActual === 0) {
        let newState = initialState();
        console.log(
          "wait",
          state.vector.components,
          battleState.cardsVector[user][battleState.selectorCardVector[user]]
            .components
        );
        newState.vector.powerActual = newState.vector.power;
        //newState = battle.locomotion.stepVectorDirection(newState);
        setState(newState);
      } else {
        clearInterval(interval);
      }
    }, state.delay.timmer);
    return () => clearInterval(interval);
  }, [state.vector.powerActual === 0]);

  //console.log("A...", state.vector.components);
//   console.log(
//     "B...",
//     battleState.cardsVector[user][battleState.selectorCardVector[user]]
//       .components
//   );
  //   console.log("battleState...", battleState);
  return (
    <div
      style={{
        position: "absolute",
        transform: `translateX(${state.position.left}px) translateY(${state.position.top}px)`,
        //backgroundColor: `rgba(222,22,22,0.8)`,
        width: `${state.sizePokemon}px`,
        height: `${state.sizePokemon}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: `rgba(222,22,22,0.5)`,
          width: `60%`,
          height: `60%`,
          borderRadius: "50%",
        }}
      >
        {/* {state.vector.powerActual} */}
      </div>
    </div>
  );
}

export default ShowVectorDirection;
