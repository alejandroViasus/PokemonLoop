import React, { useEffect, useState } from "react";
import Image from "next/image";
import { typesPokemon } from "@/Assets/typesPokemon";
import { imagesPokemon, pokemonGet, valuesPokemon } from "@/Assets/funcions";
import Star from "../../../../public/Assets/icons/Types/Star.svg";
import Like from "@/app/Icons/Like";
import Pokeball from "@/app/Icons/Pokeball";
// components

import BackGroundPokeball from "@/app/Icons/BackGroundPokeball";
import CardButtonTeam from "../CardButtonTeam/CardButtonTeam";
function ShowCardMiniTeam({ pokemon, disposition }) {
  const initialState = {
    theme: pokemon.type1,
    size: {
      height: "130px",
      width: "110px",
    },
    stars: [],
    rarity: "rare",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    //console.log(pokemonGet.valuePokemon(pokemon));
    const valuestars = [];

    for (let i = 0; i < pokemonGet.valuePokemon(pokemon); i++) {
      valuestars.push(<Image key={`star${i}`} src={Star} width={13} height={13} alt="star" />);
    }

    const rarity =
      valuesPokemon.rateRarity[valuestars.length - 1] !== undefined
        ? valuesPokemon.rateRarity[valuestars.length - 1]
        : valuesPokemon.rateRarity[valuesPokemon.rateRarity.length - 1];

    setState({ ...state, stars: valuestars, rarity });
  }, []);

  const styleContentCard = {
    position: "relative",
    height: state.size.height,
    width: state.size.width,
    // backgroundColor: ``,
    overflow: "hidden",
    borderRadius: "8px",
    border: `3px solid rgba(20,20,20,0.4)`,
  };

  const styleName = {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    height: "auto%",
    width: "100%",
    borderRadius: "0px 0px 0px 8px",
    textAlign: "center",
    fontSize: "15px",
    fontFamily: `Kodchasan, sans-serif`,
    color: typesPokemon[state.theme].colors.textDark,
  };

  const secondaryBG = {
    position: "absolute",
    top: "0px",
    right: "0px",
    height: "85%",
    width: "75%",
    borderRadius: "0px 0px 0px 8px",
    backgroundColor: typesPokemon[state.theme]?.colors.primary,

    overflow: "hidden",
  };

  const styleBGPokeball = {
    position: "relative",
    top: "10px",
    left: "0px",
    scale: "0.9",
    opacity: "0.25",
    transform: "rotate(40deg)",
  };

  const styleImagePokemon = {
    top: "15px",
    scale:'0.9'
  };

  const bordeMargin = {
    height: "20%",
    width: "102%",
    top: "5px",
    right: "0px",
    backgroundColor: typesPokemon[state.theme]?.colors.tertiary,
    border: `1.5px solid ${typesPokemon[state.theme]?.colors.primary}`,
    flexDirection: "column",
  };

  const miniTitle = {
    fontSize: "13px",
    //backgroundColor:'red',
    padding: "0px",
    top: "-2px",
  };

  const boxStar = {
    padding: "0px",
    margin: "0px",
    gap: "2px",
    // bottom: "2px",
    opacity: "0.4",
  };

  //console.log(state);
  return (
    <div className="" style={styleContentCard}>
      <div
        className="absolute  percentage-100-width percentage-100-height"
        style={{
          backgroundColor: `${typesPokemon[state.theme].colors.background}`,
        }}
      ></div>

      <p className="font-quicksand" style={styleName}>
        {pokemon.name}
      </p>
      <div className="flex-all-center" style={secondaryBG}>
        <div style={styleBGPokeball}>
          <BackGroundPokeball
            type={state.theme}
            color={`${typesPokemon[state.theme]?.colors.secondary}`}
          />
        </div>

        <Image
          className="absolute"
          style={styleImagePokemon}
          src={imagesPokemon.pixel(pokemon.noPokedex, pokemon.shiny)}
          width={80}
          height={80}
          alt={`detail pokemon ${state.name}`}
        />
        <div
          className="absolute "
          style={{
            bottom: "0%",
            right:'0%',
            width: "auto",
            backgroundColor:`${typesPokemon[state.theme]?.colors.background}`,
            padding:'1px 5px',
            display:'flex',
            justifyContent:'flex-end',
            fontSize:'12px',
            fontWeight:'700',
            borderRadius:'4px 0px 0px 0px',
            color:`${typesPokemon[state.theme]?.colors.textDark}`
          }}
        >
          <p>lvl. {pokemonGet.calcularNivel(pokemon.experience)}</p>
        </div>
      </div>
      <div className="absolute flex-all-center" style={bordeMargin}>
        {/* <p className="flex-all-center absolute" style={miniTitle}>
          {state.rarity}
        </p> */}

        <div className="flex-all-center absolute" style={boxStar}>
          {state.stars.map((star) => {
            return star;
          })}
        </div>
      </div>

      <div
      className="absolute  cursor-pointer"
      style={{
        top:'28%',
        left:'5%',
        //backgroundColor:'red'
        zIndex:'2'
      }}
      >
      <CardButtonTeam pokemon={pokemon}/>
      </div>
      <div
      className="absolute cursor-pointer flex-all-center"
      style={{
        top:'48%',
        left:'5%',
        zIndex:'2'
      }}
      >
      <CardButtonTeam pokemon={pokemon} porperty={'favorite'}/>
      </div>
    </div>
  );
}

export default ShowCardMiniTeam;
