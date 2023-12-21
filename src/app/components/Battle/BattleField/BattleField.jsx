import React from "react";
import { battleVariables } from "@/app/battle/battle";

//Components

import BattleFieldPokemon from "../BattleFieldPokemon/BattleFieldPokemon";

function BattleField({ battleState }) {
  return (
    <div
      style={{
        position: `relative`,
        width: `${battleVariables.size.structure.stadium.width}px`,
        height: `${battleVariables.size.structure.stadium.heigth}px`,
        backgroundColor: `rgba(22,22,22,1)`,
      }}
    >
      <BattleFieldPokemon battleState={battleState} trainer={"user"} />
      <BattleFieldPokemon battleState={battleState} trainer={"rival"} />
    </div>
  );
}

export default BattleField;
