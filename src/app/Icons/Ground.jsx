import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function Ground({type,subColor='primary',color=''}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={95}
    height={95}
    fill="none"
   
  >
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
    <g fill={color !== "" ? color : typesPokemon[type].colors[subColor]} mask="url(#a)">
      <path
        fillRule="evenodd"
        d="m9.929 72.93 29.916 13.165 6.517 1.63 6.517-1.63 31.753-13.973 2.463.938 3.258 3.259-3.258 4.496L52.879 95.87l-6.517 1.63-6.517-1.63L5.629 80.815 4 77.948l1.63-3.258 4.299-1.76Z"
        clipRule="evenodd"
      />
      <path d="M41.474 43.733 5.63 58.397 4 61.655l1.63 2.867 34.215 15.056 6.517 1.629 6.517-1.63 34.216-15.055 3.258-4.496-3.258-3.259-34.216-13.034-6.517-1.63-4.888 1.63ZM40.474 25.81h-7.776a1 1 0 0 0-1 1v7.776a1 1 0 0 0 1 1h7.776a1 1 0 0 0 1-1V26.81a1 1 0 0 0-1-1ZM79.578 16.034H68.543a1 1 0 0 0-1 1V28.07a1 1 0 0 0 1 1h11.035a1 1 0 0 0 1-1V17.034a1 1 0 0 0-1-1ZM27.44 3H9.888a1 1 0 0 0-1 1v17.552a1 1 0 0 0 1 1H27.44a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" />
    </g>
  </svg>
  )
}

export default Ground