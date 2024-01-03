import { typesPokemon } from '@/Assets/typesPokemon'
import React from 'react'

function Fighting({type,color=''}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={95}
    height={95}
    fill="none"
    
  >
    <path
       fill={color!==''?color:typesPokemon[type].colors.primary}
      d="M40.143 58.572H6.673L5 66.94l1.673 13.388s10.76 11.996 20.082 13.388c3.232.482 5.11.26 8.368 0 8.86-.71 21.755-6.694 21.755-6.694l26.776-11.715V63.593H43.49l-3.347-5.02Z"
    />
    <rect
      width={36.817}
      height={16.735}
      x={50.184}
      y={40.164}
      fill={color!==''?color:typesPokemon[type].colors.primary}
      rx={1}
    />
    <rect
      width={16.735}
      height={30.123}
      fill={color!==''?color:typesPokemon[type].colors.primary}
      rx={1}
      transform="matrix(1 0 0 -1 66.92 33.47)"
    />
    <rect
      width={16.735}
      height={33.47}
      fill={color!==''?color:typesPokemon[type].colors.primary}
      rx={1}
      transform="matrix(1 0 0 -1 46.837 33.47)"
    />
    <rect
      width={16.735}
      height={50.205}
      fill={color!==''?color:typesPokemon[type].colors.primary}
      rx={1}
      transform="matrix(1 0 0 -1 26.755 50.205)"
    />
    <rect
      width={16.735}
      height={46.858}
      fill={color!==''?color:typesPokemon[type].colors.primary}
      rx={1}
      transform="matrix(1 0 0 -1 6.673 50.205)"
    />
  </svg>
  )
}

export default Fighting