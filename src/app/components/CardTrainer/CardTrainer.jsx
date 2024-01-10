import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import { trainers } from "@/Assets/trainers";
import { pokemonGet } from "@/Assets/funcions";
import Image from "next/image";

// components

import SelectorIconType from "../SelectorIconType/SelectorIconType";
import StartLevel from "@/app/Icons/StartLevel";
import BoxShowTeam from "../BoxShowTeam/BoxShowTeam";
import IconStickerLeagueMini from "@/app/Icons/IconStickerLeagueMini";
import IconStickerLeague from "@/app/Icons/IconStickerLeague";
import ShowStickersLeague from "../ShowStickersLeague/ShowStickersLeague";

function CardTrainer({ localState }) {
  //console.log("local in Home", localState);

  const useTheme = localState.user ? localState.user.theme : "None";

  const colorsMarginsTitle = `${typesPokemon[useTheme].colors.secondary}`;

  const contentCardTrainerShow = {
    height: `750px`,
    width: "530px",
    backgroundColor: `${typesPokemon[useTheme].colors.primary}`,
    border: ` 5px solid ${typesPokemon[useTheme].colors.textDark}`,
  };

  const styleImageTrainer = {
    left: "5%",
    top:'17%',
    scale:'1.2',
    //backgroundColor:'red'
  };

  const ligthBackGround = {
    width: "80%",
    height: "90%",
    backgroundColor: `${typesPokemon[useTheme].colors.secondary}`,
    borderRadius: "50%",
    filter: "blur(0.8px)",
  };
  const typeBg = {
    left: "40%",
    top: "30%",
    scale: "3",
    filter: "blur(0.3px)",
    opacity: "0.8",
  };

  const floorBackGround = {
    width: "110%",
    height: "40%",
    backgroundColor: `${typesPokemon[useTheme].colors.quaternary}`,
    bottom: "-5px",
    filter: "blur(1px)",

    // transform:'rotate(3deg)'
  };

  const ligthFloor = {
    width: "80%",
    height: "250%",
    backgroundColor: `red`,
    backgroundColor: `${typesPokemon[useTheme].colors.primary}`,
    borderRadius: "50%",
    filter: "blur(3px)",
    bottom: "30%",
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

  const styleTitleHeader = {
    top: "4%",
    height: "12%",
    borderTop: `10px solid ${colorsMarginsTitle}`,
    borderBottom: `5px solid ${colorsMarginsTitle}`,
    backgroundColor: `${typesPokemon[useTheme].colors.textDark}`,
    justifyContent: "flex-end",
    paddingRight: "32px",
  };

  const titleHeader = {
    color: `${typesPokemon[useTheme].colors.textWhite}`,
  };

  const styleStarLevel = {
    top: "2.8%",
    left: "-6%",
    scale: "1.3",
  };

  const fontierPanel = {
    width: "130%",
    height: "28%",
    backgroundColor: `${typesPokemon[useTheme].colors.textDark}`,
    bottom: "-5%",
    borderTop: `10px solid ${typesPokemon[useTheme].colors.textWhite}`,
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
            type={useTheme}
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
              src={trainers[localState.user?.pictureTrainer].image}
              width={550}
              height={550}
              alt={`image Trainer ${localState.user?.pictureTrainer}`}
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
              type={useTheme}
              //color="rgba(22,22,22,1)"
            />
          </div>
        </div>

        <div className="flex-all-center absolute" style={contentTeamPokemon}>
          <BoxShowTeam localState={localState} />
        </div>

        <div
          className="absolute flex-all-center percentage-100-width"
          style={styleTitleHeader}
        >
          <p className="font-button-in" style={titleHeader}>
            {localState.user ? localState.user.gametag : ""}
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
          {localState.user?.level}
        </p>
        <StartLevel type={useTheme} />

      </div>
      <div className="absolute display-all-center"
        style={{
          bottom: '2%',
          //backgroundColor: 'green',
          right: '3%',
        }}
      >
        <IconStickerLeague type={useTheme} league={0} />
      </div>

      
    </div>
  );
}

export default CardTrainer;
