import React from "react";

import { battleVariables } from "@/app/battle/battle";

function BattleFieldPokemon({ battleState, trainer }) {
  let sizePokemon = 0;
  const selectorTrainer = battleState.turn.user ? "user" : "rival";

  if (battleState?.team[trainer] !== undefined) {
    sizePokemon =
      battleState?.team[trainer][battleState?.select?.pokemon[trainer]]
        ?.height * battleVariables.size.pokemon.scale.base || 0;

    if (sizePokemon < battleVariables.size.pokemon.scale.min) {
      sizePokemon = battleVariables.size.pokemon.scale.min;
    }
    if (sizePokemon > battleVariables.size.pokemon.scale.max) {
      sizePokemon = battleVariables.size.pokemon.scale.max;
    }
  }
  //console.log(sizePokemon);
  return (
    <div
      id={`pokemon_${trainer}_in_battle`}
      style={{
        position: `absolute`,
        width: `${sizePokemon}px`,
        height: `${sizePokemon}px`,
        margin:'0px',
        padding:'0px',
        backgroundColor:
          selectorTrainer === trainer
            ? "rgba(222, 20, 20, 1)"
            : "rgba(20, 222, 20, 1)",
        transform: `translate(${battleState.position[trainer].pokemon.x}px,${battleState.position[trainer].pokemon.y}px)`,
      }}
    >
      {sizePokemon}
    </div>
  );
}

export default BattleFieldPokemon;
