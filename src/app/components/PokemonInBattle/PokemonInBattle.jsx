import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imagesPokemon } from "@/Assets/funcions";
import { get } from "../BattleField/batleField";
import { valuesPokemon } from "@/Assets/funcions";
function PokemonInBattle({ pokemon, pokemonId }) {
  let size = get.positionSize(pokemon.dataPokemon);
  
  

  let bg = "rgba(22,22,22,1)";
  //console.log("pokemon:", pokemon, pokemon);

  const [state, setState] = useState({
    size: size>valuesPokemon.componentBattle.size.tail/2?`${get.positionSize(pokemon.dataPokemon)}px`:`${valuesPokemon.componentBattle.size.tail/2}px`,
    bg: `${
      pokemonId === valuesPokemon.componentBattle.id.pokemon
        ? "rgba(7, 102, 173,1)"
        : "rgba(199, 0, 57,1)"
    }`,
    longTailKeys: Object.keys(pokemon.position.x.position),
  });

  //console.log('in pokemonBattle',pokemonId,pokemon.position.x.position)
 //console.log("in pokemonBattle", state);

  return (
    <>
      {state.longTailKeys.reverse()?.map((tail, index) => {
        //console.log(index % 3);
        return (
          <>
            {index % 5 === 0 ? (
              <div
                id={tail === "pokemon" ? pokemonId : `${pokemonId}${tail}`}
                style={{
                  position: "absolute",
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: `translate(${pokemon.position?.x.position[tail]}px, ${pokemon.position?.y.position[tail]}px)`,

                  //background: `${bg}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: `${tail === "pokemon" ? 1 : 1 / (index * 0.15)}`,
                  zIndex: `${tail === "pokemon" ? 1 : 0}`,
                  //border:`1px solid black`
                }}
              >
                <div
                  style={{
                    borderRadius: `20%`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: `${state.bg}`,
                    width: `${size > 100 ? size - index * 3 : size - index}px`,
                    height: `${size > 100 ? size - index * 3 : size - index}px`,
                  }}
                >
                  {pokemon !== undefined && tail === "pokemon" ? (
                    < div
                    style={{
                     
                      width: `20%`,
                      height: `20%`,
                    }}
                    >
                    <Image
                      src={imagesPokemon.official(
                        pokemon.dataPokemon?.noPokedex,
                        pokemon.shiny
                        )}
                        layout="fill"
                        objectFit="cover"
                        alt={`pokemon ${pokemon.dataPokemon?.name} in Battle`}
                        />
                        </div>
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
