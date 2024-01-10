import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function IconStickerLeagueMini({ type, subColor = 'primary', color = '' }) {
  
    const fill = color !== ''
    ? color
    : typesPokemon[type].colors[subColor]
    return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
   
  >
    <g  fill={fill} fillOpacity={0.3} clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M35.593 24.851h16.406C51.396 11.58 40.434 1.005 27 1.005 13.566 1.005 2.604 11.58 2 24.85h16.31a8.71 8.71 0 0 1 8.642-7.597 8.71 8.71 0 0 1 8.642 7.597Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M27 1.007c.097 0 .195 0 .292.002h-.585c.098-.002.195-.002.293-.002Zm-8.593 26.155H2c.604 13.271 11.566 23.845 25 23.845s24.395-10.574 25-23.845H35.69a8.71 8.71 0 0 1-8.642 7.597 8.71 8.71 0 0 1-8.641-7.597Z"
        clipRule="evenodd"
      />
      <ellipse cx={26.951} cy={25.952} rx={6.305} ry={6.298} />
    </g>
    <rect
      width={50}
      height={50}
      x={1}
      y={1}
      stroke="#B4B4D2"
      strokeDasharray="4 4 4 8"
      strokeLinecap="round"
      strokeWidth={2}
      rx={25}
    />
    <defs>
      <clipPath id="a">
        <rect width={50} height={50} x={1} y={1} fill="#fff" rx={25} />
      </clipPath>
    </defs>
  </svg>
  )
}

export default IconStickerLeagueMini