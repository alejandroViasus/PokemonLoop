import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

function FilterTypeButtonIn({ type, handleState }) {
  const sizeButton = 40;
  return (
    <button
      style={{
        fontweight: "300",
        fontSize: "22px",
        padding: "2px 80px",
        backgroundColor: `${typesPokemon[type].colors.secondary}`,
        color: `${typesPokemon[type].colors.textWhite}`,
        gap: "15px",
      }}
      className="content-button-in border-radius-big"
      key={`icon-select-${type}`}
      onClick={() => handleState(type)}
    >
      {/* <Image
        src={typesPokemon[type].icon}
        height={sizeButton}
        width={sizeButton}
        alt={`icon${type}`}
      /> */}
<p
className="font-button-in"
>

      {type}
</p>

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

export default FilterTypeButtonIn;
