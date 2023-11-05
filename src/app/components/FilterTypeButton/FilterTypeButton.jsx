import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

function FilterTypeButton({type,handleState}) {
    const sizeButton = 100;
  return (
    <button
      key={`icon-select-${type}`}
      onClick={() => handleState(type)}
    >
      <Image
        src={typesPokemon[type].icon}
        height={sizeButton}
        width={sizeButton}
        alt={`icon${type}`}
      />
      <h3>{type}</h3>
    </button>
  );
}

export default FilterTypeButton;
