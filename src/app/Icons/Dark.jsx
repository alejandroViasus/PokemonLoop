


import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

function Dark({ type, subColor = "primary", color = "" }) {
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
        <path fill="#fff" d="M97.488 3H3v94.488h94.488V3Z" />
      </mask>
      <g fill={color !== "" ? color : `${typesPokemon[type].colors[subColor]}`} fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
        <path d="M50.19 72.085c11.684 0 21.155-14.571 21.155-32.545 0-3.047-.272-5.995-.78-8.792 7.187-1.82 13.604-4.657 18.842-8.242 5.037 6.73 7.975 14.828 7.975 23.542 0 23.367-21.128 42.309-47.191 42.309C24.128 88.357 3 69.415 3 46.048 3 36.674 6.4 28.012 12.155 21c4.863 3.748 10.938 6.798 17.827 8.889a48.931 48.931 0 0 0-.946 9.65c0 17.975 9.471 32.546 21.155 32.546Z" />
        <path d="M61.01 42.724c-.821 2.566-2.444 4.313-4.31 4.313-2.696 0-4.882-3.643-4.882-8.137 0-2.23.538-4.25 1.41-5.719-.46-.1-.931-.151-1.41-.151-5.392 0-9.763 6.557-9.763 14.645 0 8.089 4.37 14.646 9.763 14.646s9.764-6.557 9.764-14.646c0-1.737-.202-3.404-.572-4.95Z" />
      </g>
    </svg>
  );
}

export default Dark;
