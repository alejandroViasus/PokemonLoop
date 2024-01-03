import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";


function StartLevel({type}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={114}
      height={113}
      fill="none"
      
    >
      <path
        fill={`${typesPokemon[type].colors.secondary}`}
        stroke={`${typesPokemon[type].colors.textDark}`}
        strokeWidth={8.344}
        d="m56.978 6.941 11.705 15.437 1.475 1.945 2.418-.333 19.192-2.638-2.64 19.191-.332 2.418 1.945 1.475 15.437 11.705-15.437 11.705-1.945 1.474.333 2.418 2.639 19.192-19.192-2.639-2.418-.332-1.475 1.945-11.705 15.436-11.705-15.436-1.474-1.945-2.418.332-19.192 2.64 2.639-19.193.332-2.418-1.945-1.474L7.78 56.14l15.436-11.705 1.945-1.475-.332-2.418-2.64-19.191 19.193 2.638 2.418.333 1.474-1.945L56.978 6.94Z"
      />
    </svg>
  );
}

export default StartLevel;
