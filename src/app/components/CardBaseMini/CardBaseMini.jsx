import React, { useState, useEffect } from "react";

import { imagesPokemon } from "@/Assets/funcions";
import Image from "next/image";

function CardBaseMini({ pokemon, handlerSelect, user = "rival"  ,index,globalIndex}) {
  //console.log(pokemon.alive)
  
const tone='180,10,175';
const gama=globalIndex===index?'1':'0.2'
const color=`rgba(${tone},${gama})`

  return (
    <div>
      {pokemon !== undefined  ? (
        <ul
          style={{
            backgroundColor: "rgba(22,22,22,0.1)",
            width: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: `${pokemon?.alive ? 1 : 0.3}`,
            border: `solid 3px ${color}`
          }}
          onClick={() =>
            pokemon.alive ? handlerSelect(index, user) : () => {}
          }
        >
          <h3>{pokemon.name}</h3>
          <Image
            src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
            width={40}
            height={40}
            alt={`detail pokemon ${pokemon.name}`}
          />
          <h6>{pokemon.level}</h6>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardBaseMini;
