import React from 'react'
import { typesPokemon } from "@/Assets/typesPokemon";
function IconDeffense({  type='None', subColor = "primary", color = "" }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25mm"
    height="25mm"
    viewBox="0 0 25 25"
    
  >
    <path
      fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
      d="M11.913 22.658c-4.227-2.46-7.169-6.012-7.951-9.6-.194-.889-.222-1.571-.205-5.042l.015-3.335 8.736-2.638 1.29.391 2.92.883 3.069.928 1.441.437.016 3.334c.01 2.104-.006 3.56-.042 3.945-.343 3.626-2.936 7.324-7.02 10.012-.802.528-1.602.99-1.7.984-.034-.002-.29-.136-.569-.298zm.574-14.739-.013-4.525-3.63 1.096A451.133 451.133 0 0 0 5.12 5.624c-.087.035-.093.224-.092 2.909 0 2.845.029 3.492.186 4.251.265 1.284 1.032 2.873 2.006 4.158 1.285 1.694 2.928 3.133 5.12 4.481l.134.083.013-4.531c.008-2.492.008-6.567 0-9.056z"
    />
  </svg>
  )
}

export default IconDeffense