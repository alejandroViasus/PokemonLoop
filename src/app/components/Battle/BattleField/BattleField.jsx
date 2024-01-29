import React from "react";
import { battleVariables } from "@/app/battle/battle";
import { typesPokemon } from "@/Assets/typesPokemon";

import ShowType from "../../ShowType/ShowType";

//Components

import BattleFieldPokemon from "../BattleFieldPokemon/BattleFieldPokemon";
import RenderBattleField from "../../RenderBattleField/RenderBattleField";

function BattleField({ battleState, theme = 'None' }) {

  theme = battleState?.game?.bioma
  return (
    <div
      style={{
        position: `relative overflow-hidden flex-all-center`,

        width: `${battleVariables.size.structure.stadium.width}px`,
        height: `${battleVariables.size.structure.stadium.heigth}px`,
        // backgroundColor: typesPokemon[theme].colors.secondary,
        // borderRadius: '20px',
        // border: ` 5px solid ${typesPokemon[theme].colors.primary}`
      }}
    >

      

      <div
        className=" absolute percentage-100-width percentage-100-height"
        style={{
          // backgroundColor:'black'
        }}
      >
        <RenderBattleField theme={theme}
          width={`${battleVariables.size.structure.stadium.width}px`}
          height={`${battleVariables.size.structure.stadium.heigth}px`}
        />
      </div>

      <BattleFieldPokemon battleState={battleState} trainer={"user"} />
      <BattleFieldPokemon battleState={battleState} trainer={"rival"} />
    </div>
  );
}

export default BattleField;
