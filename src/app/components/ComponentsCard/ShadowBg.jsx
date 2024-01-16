import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function ShadowBg({type='Normal',subColor='primary',color=''}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={160}
    height={190}
    
  >
    <path
      d="M132.993.155c-8.987.099-18.037.002-26.984.223-2.619 12.894-14.857 22.995-27.666 21.77C66.742 21.44 56.398 11.69 54.206.017 36.157.086 17.996-.123.016.12.085 63.5-.116 126.991.118 190.297c53.275-.07 106.66.138 159.866-.104-.067-63.381.134-126.877-.1-190.187l-26.89.149Z"
      style={{
        fill:`${color !== "" ? color : typesPokemon[type].colors[subColor]}`,
        fillOpacity: 1,
        strokeWidth: 0.562575,
      }}
    />
  </svg>
  )
}

export default ShadowBg