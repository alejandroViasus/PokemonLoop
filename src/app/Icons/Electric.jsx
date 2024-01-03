import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

function Electric({ type, subColor = "primary", color = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={95} height={95} fill="none">
      <mask
        id="a"
        width={95}
        height={95}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
          d="M97.488 3H3v94.488h94.488V3Z"
        />
      </mask>
      <g mask="url(#a)">
        <path
           fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
          d="M45.324 6.436 23 44.236 22 48l1 3.11 27.108 17.18L51 70l-9 23 .135 1.923L42.5 97l2.027.5L47 97l30-33 .216-.864L77 62 62 47l-.5-1 .5-1 20-22v-1.1l-.5-.9L51 3h-.892L49 3.5l-3.676 2.936Z"
        />
      </g>
    </svg>
  );
}

export default Electric;
