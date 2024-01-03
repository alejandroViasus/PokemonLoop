import React from "react";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";
import { typesPokemon } from "@/Assets/typesPokemon";

function FilterTrainerButtonIn({ trainer, handleState, format = "image" , type='None'}) {
  const sizeButtonWidth = 150;
  const sizeButtonHeight = 250; // Cambiado para que coincida con el ancho

  return (
    <button
   
    className="content-button-trainer-in border-radius-big font-quicksand flex-all-center"
      onClick={() => handleState(trainer)}
      style={{
        display:'flex',
        gap:'16px',
        fontweight: '300',
        fontSize: '22px',
        backgroundColor:`${typesPokemon[type].colors.secondary}`,
        position: "relative", // Añadido para que Image pueda llenar el espacio
      }}
    >
      <h1 
      className="font-button-in"
      style={{
        color:`${typesPokemon[type].colors.textWhite}`,
        
      }}
      >{trainer}</h1>
      <div
        style={{
          width: "0",
          height: "0",
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          transform: "rotate(180deg)",
          borderBottom: `15px solid ${typesPokemon[type].colors.primary}`,
        }}
      ></div>
    </button>
  );
}

export default FilterTrainerButtonIn;
