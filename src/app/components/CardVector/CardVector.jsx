import React from "react";
import Image from "next/image";
import ArrowDirectionTest from "../../../../public/Assets/icons/ArrowDirectionTest.svg";
import { typesPokemon } from "@/Assets/typesPokemon";
import { valuesPokemon } from "@/Assets/funcions";

function CardVector({ card, index, battleState, methods }) {
  // console.log("battleState in cardVector......:", battleState, card);
  const type = `type${card.type}`;
  const selectorType =
    battleState.team.user[battleState.select.pokemon.user][type];
  return (
    <div
      onClick={() => {
        console.log("Methots: ....", battleState.select.cardVector.user, index);
        methods.selector.cardVector(index, "user");
      }}
      style={{
        height: `${valuesPokemon.componentBattle.groupCards.dimension.height}px`,
        width: `${valuesPokemon.componentBattle.groupCards.dimension.width}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(222,222,222,0.3)",
      }}
    >
      <div
        style={{
          transform: `rotate(${card.angle}deg)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //backgroundColor: "red",
        }}
      >
        <Image
          src={ArrowDirectionTest}
          height={
            valuesPokemon.componentBattle.groupCards.dimension.height * 0.4
          }
          width={
            valuesPokemon.componentBattle.groupCards.dimension.height * 0.4
          }
          alt={`vector direction ${card.angle}`}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //backgroundColor: "red",
        }}
      >
        <Image
          src={typesPokemon[selectorType].icon}
          height={
            valuesPokemon.componentBattle.groupCards.dimension.height * 0.2
          }
          width={
            valuesPokemon.componentBattle.groupCards.dimension.height * 0.2
          }
          alt={`vector direction ${selectorType}`}
        />
      </div>
      {/* <h3>{selectorType}</h3> */}
      <div>{card.power}</div>
      <div>{card.typeAttack}</div>
    </div>
  );
}

export default CardVector;
