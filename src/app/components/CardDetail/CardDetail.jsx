import React from "react";
import Image from "next/image";
import { imagesPokemon } from "@/Assets/funcions";

function CardDetail({ pokemon }) {
  console.log("pokemon___", pokemon);
  return (
    <div>
      {pokemon ? (
        <div>
          <h1>{pokemon?.name}</h1>
          <Image
            src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
            width={100}
            height={100}
            alt={`detail pokemon ${pokemon.name}`}
          />
          <h4> {pokemon.shiny ? "SHINY" : ""}</h4>
          <h4> noPokedex {pokemon.noPokedex}</h4>
          <h4> {pokemon.favorite ? "FAVORITE" : ""}</h4>
          <h4> noPokedex: {pokemon.noPokedex}</h4>
          <h4> LEVEL: {pokemon.level}</h4>
          <h4>
            {" "}
            Actual Stack: {pokemon.actualStack}/{pokemon.maxStack4level}
          </h4>
          <h4> weight: {pokemon.weight}kg</h4>
          <h4> height: {pokemon.height}m</h4>
          <h4> type: {pokemon.type1}</h4>
          <h4> type: {pokemon.type2}</h4>
          <h4>
            Heald: {pokemon.baseHeald} + {pokemon.effortHeald} +{" "}
            {pokemon.scaleHeald}
          </h4>
          <h4>
            Attack: {pokemon.baseAttack} + {pokemon.effortAttack} +{" "}
            {pokemon.scaleAttack}
          </h4>
          <h4>
            Deffense: {pokemon.baseDeffense} + {pokemon.effortDeffense} +{" "}
            {pokemon.scaleDeffense}
          </h4>
          <h4>
            SpecialDeffense: {pokemon.baseSpecialDeffense} +{" "}
            {pokemon.effortSpecialDeffense} + {pokemon.scaleSpecialDeffense}
          </h4>
          <h4>
            SpecialAttack: {pokemon.baseSpecialAttack} +{" "}
            {pokemon.effortSpecialAttack} + {pokemon.scaleSpecialAttack}
          </h4>
          <h4>
            Speed: {pokemon.baseSpeed} + {pokemon.effortSpeed} +{" "}
            {pokemon.scaleSpeed}
          </h4>
        </div>
      ) : null}
    </div>
  );
}

export default CardDetail;
