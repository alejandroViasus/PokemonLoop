import { typesPokemon } from "@/Assets/typesPokemon";
import React from "react";

function BackGroundPokeball({ type,scale=3, color = "" }) {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        fill="none"
      >
        <path
          fill={color !== "" ? color : typesPokemon[type].colors.primary}
          fillRule="evenodd"
          d="M134.373 95.385H200C197.586 42.299 153.738 0 100 0S2.414 42.299 0 95.385h65.242C67.417 78.249 82.064 65 99.808 65c17.743 0 32.39 13.25 34.565 30.385Z"
          clipRule="evenodd"
        />
        <path
          fill={color !== "" ? color : typesPokemon[type].colors.secondary}
          fillRule="evenodd"
          d="M65.627 104.615H0C2.414 157.701 46.262 200 100 200s97.586-42.299 100-95.385h-65.242C132.583 121.751 117.936 135 100.193 135c-17.745 0-32.39-13.249-34.566-30.385Z"
          clipRule="evenodd"
        />
        <ellipse
          cx={99.807}
          cy={99.808}
          fill={color !== "" ? color : typesPokemon[type].colors.tertiary}
          rx={25.219}
          ry={25.192}
        />
      </svg>
    
  );
}

export default BackGroundPokeball;
