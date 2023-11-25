import React from "react";

import PokemonInBattle from "../PokemonInBattle/PokemonInBattle";
import { valuesPokemon } from "@/Assets/funcions";

function AreaBattle({ localState }) {
  //console.log("AREA", localState);
  return (
    <div
      id={valuesPokemon.componentBattle.id.battleField}
      style={{
        position: "relative",
        width: `${localState.general?.battlefield.width}px`,
        height: `${localState.general?.battlefield.height}px`,
        backgroundColor: `rgba(80,125,220,1)`,
      }}
    >
      <PokemonInBattle
        pokemonId={valuesPokemon.componentBattle.id.rival}
        pokemon={localState.pokemonRival}
      />
      <PokemonInBattle
        pokemonId={valuesPokemon.componentBattle.id.pokemon}
        pokemon={localState.pokemonUser}
      />
    </div>
  );
}

export default AreaBattle;
