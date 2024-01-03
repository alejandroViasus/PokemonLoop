import { typesPokemon } from '@/Assets/typesPokemon'
import React from 'react'

function Flying({type,subColor='primary',color=''}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={95}
    height={95}
    fill="none"
   
  >
    <path
      fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
      d="M20.409 79.788c6.73 5.446 25.495-6.588 41.913-26.88C78.741 32.619 86.596 11.756 79.866 6.31 73.136.864 54.371 12.9 37.952 33.19 21.534 53.48 13.68 74.343 20.41 79.79Z"
    />
    <path
      fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
      d="M18.388 76.687C20.6 82.44 36.458 81.7 53.81 75.033c17.351-6.667 29.624-16.738 27.413-22.492-2.212-5.755-18.07-5.014-35.421 1.654-17.35 6.667-29.624 16.737-27.413 22.492Z"
    />
    <path
      fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
      d="M18.26 75.545c-.722 4.567 9.857 10.034 23.628 12.21 13.77 2.177 25.519.239 26.24-4.328.723-4.567-9.856-10.034-23.627-12.21-13.77-2.177-25.52-.239-26.241 4.328Z"
    />
    <path
      fill={color !== "" ? color : typesPokemon[type].colors[subColor]}
      d="M22.289 70.975c-5.3.856-5.475 6.948-.389 13.607 5.087 6.658 13.507 11.363 18.808 10.507 5.3-.856 5.474-6.948.388-13.607C36.01 74.823 27.59 70.12 22.289 70.975Z"
    />
  </svg>
  )
}

export default Flying