import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

function Normal({ type, subColor = "primary", color = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={95} height={95} fill="none">
      <path
        fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
        fillRule="evenodd"
        d="M14.732 1c4.372 0 8.267 2.075 10.781 5.31A45.005 45.005 0 0 1 46.773 1a45.005 45.005 0 0 1 19.129 4.242C68.398 2.626 71.894 1 75.763 1c7.584 0 13.732 6.246 13.732 13.95 0 3.431-1.22 6.573-3.242 9.003 4 6.907 6.294 14.955 6.294 23.547 0 25.681-20.494 46.5-45.774 46.5S1 73.181 1 47.5c0-7.796 1.889-15.144 5.226-21.598A14.006 14.006 0 0 1 1 14.95C1 7.246 7.148 1 14.732 1Zm32.041 80.6c18.54 0 33.568-15.267 33.568-34.1 0-18.833-15.029-34.1-33.568-34.1-18.538 0-33.567 15.267-33.567 34.1 0 18.833 15.029 34.1 33.567 34.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Normal;
