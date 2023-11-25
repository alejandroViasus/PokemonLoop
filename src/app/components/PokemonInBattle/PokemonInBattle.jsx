import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imagesPokemon } from "@/Assets/funcions";
import { get } from "../BattleField/batleField";
import { valuesPokemon } from "@/Assets/funcions";
function PokemonInBattle({ pokemon, pokemonId }) {
  let size = `${get.positionSize(pokemon.dataPokemon)}px`;
  let bg = "rgba(22,22,22,1)";
  //console.log("pokemon:", pokemon, pokemon);

  const [state, setState] = useState({
    size: `${get.positionSize(pokemon.dataPokemon)}px`,
    bg: `${
      pokemonId === valuesPokemon.componentBattle.id.pokemon
        ? "rgba(7, 102, 173,1)"
        : "rgba(199, 0, 57,1)"
    }`,
    longTailKeys: Object.keys(pokemon.position.x.position),
  });

  //console.log('in pokemonBattle',pokemonId,pokemon.position.x.position)
  console.log("in pokemonBattle", state);

  return (
    <>
      {state.longTailKeys.reverse()?.map((tail, index) => {
        console.log(index % 3);
        return (
          <>
            {index % 10 === 0 ? (
              <div
                id={tail === "pokemon" ? pokemonId : `${pokemonId}${tail}`}
                style={{
                  position: "absolute",
                  width: `${size}`,
                  
                  height: `${size}`,
                  transform: `translate(${pokemon.position?.x.position[tail]}px, ${pokemon.position?.y.position[tail]}px)`,
                  // top: `${pokemon.position.y.position.pokemon}px`,
                  // left: `${pokemon.position.x.position.pokemon}px`,
                  background: `${state.bg}`,
                  borderRadius: `15%`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
        
                  zIndex:`${tail==='pokemon'?100:100-index}`,
                  border:`1px solid black`
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: `70%`,
                    height: `70%`,
                  }}
                >
                  
                  {pokemon !== undefined&&tail==='pokemon'  ? (
                    <Image
                    src={imagesPokemon.official(
                      pokemon.dataPokemon?.noPokedex,
                      pokemon.shiny
                      )}
                      layout="fill"
                      objectFit="cover"
                      alt={`pokemon ${pokemon.dataPokemon?.name} in Battle`}
                      />
                      ) : null}
                </div>
              </div>
            ) : (
              <></>
            )}
              
          </>
        );
      })}
    </>
  );
}

export default PokemonInBattle;
