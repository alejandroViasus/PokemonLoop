import React from "react";
import Image from "next/image";
import { trainers } from "@/Assets/trainers";
import { typesPokemon } from "@/Assets/typesPokemon";

//! components
import BackGroundPokeball from "@/app/Icons/BackGroundPokeball";

function FilterTrainerButton({ trainer, handleState, format = "battle" }) {
  const sizeButtonWidth = 210;
  const sizeButtonHeight = 100; // Cambiado para que coincida con el ancho

  return (
    <button
      className="
      bottons-info
      content-button-trainer 
    border-radius-big 
    relative 
    overflow-hidden
    flex-all-center 
    "
      onClick={() => handleState(trainer)}
      style={{
        backgroundColor: `${
          typesPokemon[trainers[trainer].typePreference].colors.background
        }`,
        width: `${sizeButtonWidth}px`,
        height: `${sizeButtonHeight}px`,
        position: "relative", // Añadido para que Image pueda llenar el espacio
      }}
    >
      <div
        className="background absolute"
        style={{
          height: `${sizeButtonHeight / 2}px`,
          width: `${sizeButtonWidth}px`,
          backgroundColor: `${
            typesPokemon[trainers[trainer].typePreference].colors.primary
          }`,
          bottom: "15%",
        }}
      ></div>
      {/* <div
        className="bg-pokeball absolute  "
        style={{
          transform: "rotate(-30deg)",
          scale: 0.7,
          right: "-50%",
          bottom: "-90px",
          opacity: "1",
        }}
      >
        <BackGroundPokeball type={trainers[trainer].typePreference} color="" />
      </div> */}
      <h1
        className="
        name-trainer
        absolute
        "
        style={{
          color: `${
            typesPokemon[trainers[trainer].typePreference].colors.background
          }`,
        }}
      >
        {" "}
        {trainer}
      </h1>

      <Image
        className="image-trainer absolute"
        src={trainers[trainer][format]}
        alt={`image-trainer-${trainer}`}
        width={sizeButtonWidth}
        height={sizeButtonHeight}
        style={{ width: "auto", height: "100%", objectFit: "cover" }}
      />
    </button>
  );
}

export default FilterTrainerButton;
