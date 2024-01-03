import React, { useState, useEffect } from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

import BackGroundPokeball from "@/app/Icons/BackGroundPokeball";
import Pokeball from "@/app/Icons/Pokeball";
import Like from "@/app/Icons/Like";
import Image from "next/image";
import Star from "../../../../public/Assets/icons/Types/Star.svg";

function CardMini({
  key,
  pokedex,
  handlerInitialIndexPokemon=()=>{},
  theme,
  value = 1,
  exibicion = true,
  dataPokemon={},
  noEditable=true
}) {
  const initialState = {
    dataPokemon: {},
    type: "",
    stars: [],
    common: "rare",
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokedex}`)
      .then((data) => data.json())
      .then((response) => {
        const stars = [];
        for (let i = 0; i < value; i++) {
          stars.push(<Image src={Star} width={10} height={10} alt="star" />);
        }

        setState({
          ...state,
          dataPokemon: response,
          type:
            response.types[0].type.name.charAt(0).toUpperCase() +
            response.types[0].type.name.slice(1),
          stars: stars,
        });
      });
  }, [pokedex]);

  const styleContentCard = {
    position: "relative",
    height: "130px",
    width: "110px",
    //backgroundColor: "red",
    overflow: "hidden",
    borderRadius: "8px",
    border: `3px solid ${typesPokemon[state.type]?.colors.primary}`,
    border: `3px solid rgba(20,20,20,0.4)`,
  };

  const styleBackGround = {
    width: "100%",
    height: "100%",

    backgroundColor: typesPokemon[state.type]?.colors.background,
  };

  const secondaryBG = {
    position: "absolute",
    top: "0px",
    right: "0px",
    height: "85%",
    width: "75%",
    borderRadius: "0px 0px 0px 8px",
    backgroundColor: typesPokemon[state.type]?.colors.primary,

    overflow: "hidden",
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
  };

  const styleBGPokeball = {
    position: "relative",
    top: "10px",
    left: "0px",
    scale: "0.9",
    opacity: "0.3",
    transform: "rotate(40deg)",
  };

  const styleImagePokemon = {
    position: "absolute",
    top: "35px",
  };

  const bordeMargin = {
    height: "20%",
    width: "102%",
    top: "5px",
    right: "0px",
    backgroundColor: typesPokemon[state.type]?.colors.tertiary,
    border: `1.5px solid ${typesPokemon[state.type]?.colors.primary}`,
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
    bottom: "2px",
  };

  const colorIcon=exibicion
  ?typesPokemon[state.type]?.colors.primary
  :typesPokemon[state.type]?.colors.primary

  const opacityIcon=exibicion
  ?'0.3'
  :'1'

  const styleIconPokeball={
    top:'30%',
    left:'5%',
    scale:'1.4',
    transform:'rotate(35deg)',
    opacity:opacityIcon
  }
  const styleIconLike={
    top:'50%',
    left:'5%',
    scale:'1.4',
    transform:'rotate(35deg)',
    opacity:opacityIcon
  }

  
  return (
    <div 
    onClick={()=>{handlerInitialIndexPokemon(pokedex)}}
    className="hover-scale" style={styleContentCard}>
      <p className="font-quicksand" style={styleName}>
        {state.dataPokemon.name}
      </p>
      <div style={styleBackGround}></div>
      <div className="flex-all-center" style={secondaryBG}>
        <div style={styleBGPokeball}>
          <BackGroundPokeball
            type={state.type}
            color={`${typesPokemon[state.type]?.colors.secondary}`}
          />
        </div>
        {state.dataPokemon.sprites !== undefined ? (
          <Image
            style={styleImagePokemon}
            width={50}
            height={50}
            src={`${state.dataPokemon.sprites?.other["official-artwork"]["front_default"]}`}
          />
        ) : null}
      </div>

      <div className="absolute flex-all-center" style={bordeMargin}>
        <p className="flex-all-center absolute" style={miniTitle}>
          {state.common}
        </p>
        <div className="flex-all-center absolute" style={boxStar}>
          {state.stars.map((star) => {
            return star;
          })}
        </div>
      </div>
      <button
      disabled={noEditable}
      className="absolute flex-all-center none-styles-button"
      style={styleIconPokeball}
      >
        <Pokeball  color={colorIcon} />
      </button>
      <button
      className="absolute flex-all-center none-styles-button"
      style={styleIconLike}
      >
        <Like  color={colorIcon} />
      </button>
    </div>
  );
}

export default CardMini;
