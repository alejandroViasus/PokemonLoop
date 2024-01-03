import React from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

function None({ type, subColor = "primary", color = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={95} height={95} fill="none">
      <path
        fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
        fillRule="evenodd"
        d="M63.827 45.308H95C93.853 20.092 73.025 0 47.5 0S1.147 20.092 0 45.308h30.99c1.033-8.14 7.99-14.433 16.418-14.433 8.429 0 15.386 6.293 16.42 14.433ZM31.173 49.692H0C1.147 74.908 21.975 95 47.5 95S93.853 74.908 95 49.692H64.01c-1.033 8.14-7.99 14.433-16.419 14.433-8.428 0-15.385-6.293-16.418-14.433Z"
        clipRule="evenodd"
      />
      <ellipse
        cx={47.409}
        cy={47.409}
        fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
        rx={11.979}
        ry={11.966}
      />
    </svg>
  );
}

export default None;
