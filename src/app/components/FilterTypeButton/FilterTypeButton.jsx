import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

function FilterTypeButton({ type, handleState }) {
  const sizeButton = 100;
  return (
    <button
      className="content-filter-type-button border-radius-big"
      style={{ backgroundColor: `${typesPokemon[type].colors.primary}` }}
      key={`icon-select-${type}`}
      onClick={() => handleState(type)}
    >
      <Image
        className="image-bg"
        src={typesPokemon[type].icon}
        height={sizeButton}
        width={sizeButton}
        alt={`icon${type}`}
      />
      <Image
        className="image-principal"
        src={typesPokemon[type].icon}
        height={sizeButton}
        width={sizeButton}
        alt={`icon${type}`}
      />
      <div className="title-type font-quicksand">

        <h3 className="text" style={{ color: `${typesPokemon[type].colors.text}` }}>{type}</h3>
      </div>
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
