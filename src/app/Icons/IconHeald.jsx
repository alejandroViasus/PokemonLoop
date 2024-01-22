import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function IconHeald({ type = 'None', subColor = "primary", color = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25mm"
      height="25mm"
      viewBox="0 0 25 25"

    >
      <rect
        width={4.454}
        height={20.914}
        x={10.273}
        y={-22.957}
        fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
        rx={1.03}
        ry={0}
        transform="rotate(90)"
      />
      <rect
        width={4.454}
        height={20.914}
        x={-14.727}
        y={-22.957}
        fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
        rx={1.03}
        ry={0}
        transform="scale(-1)"
      />
    </svg>
  )
}

export default IconHeald