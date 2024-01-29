import React, { useState, useEffect } from "react";

import { battleVariables } from "@/app/battle/battle";
import Image from "next/image";
import { imagesPokemon } from "@/Assets/funcions";
import { typesPokemon } from "@/Assets/typesPokemon";
imagesPokemon

function BattleFieldPokemon({ battleState, trainer, format = 'official' }) {


  const initialState = {
    sizePokemon: 0,
    selectorTrainer: '',
  }

  const pokemon = battleState?.team?.[trainer]?.[battleState?.select?.pokemon?.[trainer]]

  const [state, setState] = useState(initialState)



  useEffect(() => {

    let sizePokemon = 0;
    const selectorTrainer = battleState.turn.user ? "user" : "rival";

    if (battleState?.team[trainer] !== undefined) {
      sizePokemon =
        battleState?.team[trainer]?.[battleState?.select?.pokemon?.[trainer]]
          ?.height * battleVariables.size.pokemon.scale.base;



      if (sizePokemon < battleVariables.size.pokemon.scale.min) {
        sizePokemon = battleVariables.size.pokemon.scale.min;
      }
      if (sizePokemon > battleVariables.size.pokemon.scale.max) {
        sizePokemon = battleVariables.size.pokemon.scale.max;
      }
    }

    // console.log('sizePokemon:',sizePokemon ,'heigth :',battleState?.team[trainer]?.[battleState?.select?.pokemon?.[trainer]]
    // ?.height, 'scale:', )
    setState(
      {
        sizePokemon,
        selectorTrainer,
      }
    )
  }, [battleState])

  console.log('pokemon', pokemon);
  return (
    <div
    className="flex-all-center"
      id={`pokemon_${trainer}_in_battle`}
      style={{
        position: `absolute`,
        width: `${state.sizePokemon}px`,
        height: `${state.sizePokemon}px`,
        margin: '0px',
        padding: '0px',
        // backgroundColor:
        //   state.selectorTrainer === trainer
        //     ? "rgba(222, 20, 20, 1)"
        //     : "rgba(20, 222, 20, 1)",
        border:`4px solid ${typesPokemon[pokemon?.type2]?.colors.primary}`,
        background:typesPokemon[pokemon?.type1]?.colors.primary,
        transform: `translate(${battleState.position[trainer].pokemon.x}px,${battleState.position[trainer].pokemon.y}px)`,
        borderRadius:`${state.sizePokemon/2}px`,
        outline:     state.selectorTrainer === trainer
             ? "4px solid yellow"
             : " ",
      }}
    >
      <Image
        src={imagesPokemon[format](pokemon?.noPokedex, pokemon?.shiny)}
        height={3*state.sizePokemon/4}
        width={3*state.sizePokemon/4}
        alt={`pokemon ${trainer} in battle ${pokemon?.name}`}
      />
    </div>
  );
}

export default BattleFieldPokemon;
