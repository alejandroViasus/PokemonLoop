import { valuesPokemon } from "@/Assets/funcions";
import React from "react";

//! Compoennts
import PokemonInBattle from "../../PokemonInBattle/PokemonInBattle";

function BattleField({ state }) {
  console.log("state in BattleField  :", state);
  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(222,222,222,1)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${valuesPokemon.componentBattle.size.battlefield.with}px`,
            height: `${valuesPokemon.componentBattle.size.battlefield.height}px`,
            backgroundColor: "rgba(122,122,122,1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

            
            
        </div>
      </div>
    </div>
  );
}

export default BattleField;
