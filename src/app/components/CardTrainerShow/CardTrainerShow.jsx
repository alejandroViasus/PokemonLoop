import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import { trainers } from "@/Assets/trainers";
import Image from "next/image";
import SelectorIconType from "../SelectorIconType/SelectorIconType";
import CardMini from "../CardMini/CardMini";
import StartLevel from "@/app/Icons/StartLevel";
function CardTrainerShow({ localState }) {
  console.log(".......", localState.initialPokemon);
  const contentCardTrainerShow = {
    height: `700px`,
    width: "450px",
    border: `5px solid ${typesPokemon[localState.type].colors.textDark}`,
    backgroundColor: `${typesPokemon[localState.type].colors.primary}`,
  };

  const styleImageTrainer = {
    left: "5%",
  };

  const ligthBackGround = {
    width: "80%",
    height: "90%",
    backgroundColor: `${typesPokemon[localState.type].colors.secondary}`,
    borderRadius: "50%",
    filter: "blur(1px)",
  };

  const typeBg = {
    height: "95px",
    width: "95px",
    left: "40%",
    top: "30%",
    scale: "3",
    filter: "blur(0.3px)",
  };

  const floorBackGround = {
    width: "110%",
    height: "40%",
    backgroundColor: `${typesPokemon[localState.type].colors.quaternary}`,
    bottom: "-5px",
    filter: "blur(1px)",

    // transform:'rotate(3deg)'
  };

  const ligthFloor = {
    width: "80%",
    height: "250%",
    backgroundColor: `red`,
    backgroundColor: `${typesPokemon[localState.type].colors.primary}`,
    borderRadius: "50%",
    filter: "blur(3px)",
    bottom: "25%",
  };

  const contentTeamPokemon = {
    height: "80%",
    width: "30%",
    // backgroundColor: "green",
    flexDirection: "column",
    justifyContent: "flex-start",
    left: "0%",
    top: "18%",
    gap: "8px",
  };

  const colorsMarginsTitle = `${
    typesPokemon[localState.type].colors.secondary
  }`;

  const styleTitleHeader = {
    top: "4%",
    height: "10%",
    borderTop: `10px solid ${colorsMarginsTitle}`,
    borderBottom: `5px solid ${colorsMarginsTitle}`,
    backgroundColor: `${typesPokemon[localState.type].colors.textDark}`,
    justifyContent: "flex-end",
    paddingRight: "32px",
  };

  const titleHeader = {
    color: `${typesPokemon[localState.type].colors.textWhite}`,
  };

  const styleStarLevel = {
    top: "2%",
    left: "-6%",
    scale: "1.1",
  };

  const fontierPanel = {
    width: "130%",
    height: "28%",
    backgroundColor: `${typesPokemon[localState.type].colors.textDark}`,
    bottom: "-5%",
    borderTop: `10px solid ${typesPokemon[localState.type].colors.textWhite}`,
    transform: "rotate(-3deg)",
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden
    border-radius-big
    font-Kodchasan
    flex-all-center
    relative
    "
        style={contentCardTrainerShow}
      >
        <div className="absolute" style={ligthBackGround}></div>
        <div className="absolute" style={typeBg}>
          <SelectorIconType
            type={localState.type}
            //   color="rgba(22,22,22,1)"
          />
        </div>
        <div
          className="absolute flex-all-center overflow-hidden"
          style={floorBackGround}
        >
          <div className="absolute" style={ligthFloor}></div>
        </div>

        <div className="absolute" style={styleImageTrainer}>
          {localState.trainer !== "None" ? (
            <Image
              src={trainers[localState.trainer].image}
              width={550}
              height={550}
              alt={`image Trainer ${localState.trainer}`}
            />
          ) : null}
        </div>

        <div
          className="absolute flex-all-center overflow-hidden"
          style={fontierPanel}
        >
          <div
            className="absolute"
            style={{
              scale: "2.5",
              transform: "rotate(5deg)",
              opacity: "0.3",
              right: "20%",
            }}
          >
            <SelectorIconType
              type={localState.type}
              //   color="rgba(22,22,22,1)"
            />
          </div>
        </div>

        <div className="flex-all-center absolute" style={contentTeamPokemon}>
          <button className=" flex-all-center none-styles-button">
            <CardMini
              exibicion={false}
              key={`pokedexPokemonNoInitialPokemon`}
              pokedex={localState.initialPokemon}
              theme={localState.type}
            />
          </button>
          {/* <CardMini
            exibicion={false}
            key={`pokedexPokemonNoInitialPokemon`}
            pokedex={localState.initialPokemon}
            theme={localState.type}
          />
          <CardMini
            exibicion={false}
            key={`pokedexPokemonNoInitialPokemon`}
            pokedex={localState.initialPokemon}
            theme={localState.type}
          />
          <CardMini
            exibicion={false}
            key={`pokedexPokemonNoInitialPokemon`}
            pokedex={localState.initialPokemon}
            theme={localState.type}
          /> */}
        </div>

        <div
          className="absolute flex-all-center percentage-100-width"
          style={styleTitleHeader}
        >
          <p className="font-button-in" style={titleHeader}>
            {localState.name}
          </p>
        </div>
      </div>
      <div className="absolute flex-all-center" style={styleStarLevel}>
        <p
          className="absolute font-button-in"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          1
        </p>
        <StartLevel type={localState.type} />
      </div>
    </div>
  );
}

export default CardTrainerShow;
