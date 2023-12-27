import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

function FilterTypeButtonIn({ type, handleState }) {
  const sizeButton = 40;
  return (
    <button
      style={{backgroundColor:`${typesPokemon[type].colors.primary}`}}
      className="content-button-in border-radius-big"
      key={`icon-select-${type}`}
      onClick={() => handleState(type)}
    >
      <Image
        src={typesPokemon[type].icon}
        height={sizeButton}
        width={sizeButton}
        alt={`icon${type}`}
      />

      <div className="triangule"></div>
    </button>
  );
}

export default FilterTypeButtonIn;
