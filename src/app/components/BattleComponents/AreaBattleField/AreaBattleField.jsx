import { valuesPokemon } from "@/Assets/funcions";
import React from "react";

//!Component
import PokemonInBattleField from "../PokemonInBattleField/PokemonInBattleField";
import ShowVectorDirection from "../ShowVectorDirection/ShowVectorDirection";
function AreaBattleField({ battleState, methods }) {
  console.log(battleState);
  return (
    <div
      style={{
        position: "relative",
        width: `${valuesPokemon.componentBattle.areaBattlefield.size.width}px`,
        height: `${valuesPokemon.componentBattle.areaBattlefield.size.height}px`,
        backgroundColor: `rgba(222,222,222,0.2)`,
      }}
    >
      <PokemonInBattleField battleState={battleState} user='rival' methods={methods} />
      <PokemonInBattleField battleState={battleState} user='user' methods={methods} />
{
    battleState.inGame==='selectionCard'?
    <ShowVectorDirection battleState={battleState} user='user'/>:null
}
      {/* <ShowVectorDirection battleState={battleState} user='rival'/> */}
      <h1>{valuesPokemon.componentBattle.areaBattlefield.size.width}</h1>
    </div>
  );
}

export default AreaBattleField;
