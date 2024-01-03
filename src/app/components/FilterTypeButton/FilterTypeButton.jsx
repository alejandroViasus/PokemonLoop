import React from "react";

import SelectorIconType from "../SelectorIconType/SelectorIconType";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";
import BackGroundPokeball from "@/app/Icons/BackGroundPokeball";

function FilterTypeButton({ type, handleState }) {
  const sizeButton = 100;
  return (
    <button
      className="content-filter-type-button relative border-radius-big"

       style={{ backgroundColor: `${typesPokemon[type].colors.background}` }}
       key={`icon-select-${type}`}
       onClick={() => handleState(type)}
    >
      <div
        className="bg-pokeball absolute  "
        style={{ transform: "rotate(-30deg)", scale: 0.7 }}
      >
        <BackGroundPokeball type={type} color="" />
      </div>

      <h1
        className="text absolute"
        style={{
          color: `${typesPokemon[type].colors.quaternary}`,
        }}
      >
        {type}
      </h1>

      {/* 
      
      <div
      className="icon-content absolute "
      style={{ scale: 0.5 }}
      >
      <SelectorIconType type={type}  />
      </div> */}
    </button>
  );
}

export default FilterTypeButton;

// import React from "react";
// import { typesPokemon } from "@/Assets/typesPokemon";
// import Image from "next/image";

// function FilterTypeButton({type,handleState}) {
//     const sizeButton = 100;
//   return (
//     <button
//       key={`icon-select-${type}`}
//       onClick={() => handleState(type)}
//     >
//       <Image
//         src={typesPokemon[type].icon}
//         height={sizeButton}
//         width={sizeButton}
//         alt={`icon${type}`}
//       />
//       <h3>{type}</h3>
//     </button>
//   );
// }

// export default FilterTypeButton;
