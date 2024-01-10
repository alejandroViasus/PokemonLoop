import React from 'react'
import { typesPokemon } from '@/Assets/typesPokemon'

function 
IconCoins({type,subColor='primary',color=''}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
  
  >
    <path
       fill={color!==''
       ?color
       :typesPokemon[type].colors[subColor]
       }
      fillRule="evenodd"
      d="M32 57c13.807 0 25-11.193 25-25S45.807 7 32 7 7 18.193 7 32s11.193 25 25 25Zm0-5c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z"
      clipRule="evenodd"
    />
    <path
      fill={color!==''
      ?color
      :typesPokemon[type].colors[subColor]
      }
      fillRule="evenodd"
      d="M28.778 17.222a2.222 2.222 0 1 1 4.444 0v3.2c1.04.093 2.02.306 2.939.64 1.295.44 2.347 1.007 3.157 1.7.67.532 1.006 1.145 1.006 1.84 0 .508-.197.97-.59 1.387-.393.416-.855.624-1.388.624-.346 0-.659-.104-.936-.312-.37-.324-.867-.624-1.492-.902a11.2 11.2 0 0 0-1.977-.729c-.694-.208-1.342-.312-1.943-.312-.995 0-1.839.127-2.533.382-.67.254-1.18.601-1.526 1.04-.347.44-.52.949-.52 1.527 0 .694.196 1.272.59 1.735.416.44 1.005.798 1.769 1.075.763.255 1.676.486 2.74.694 1.388.254 2.602.555 3.643.902 1.064.347 1.943.798 2.636 1.353a4.906 4.906 0 0 1 1.562 2.047c.347.81.52 1.804.52 2.983 0 1.504-.416 2.799-1.249 3.886-.833 1.087-1.931 1.92-3.296 2.498-.976.42-2.013.688-3.112.803v1.384a2.222 2.222 0 0 1-4.444 0v-1.614c-.41-.081-.805-.18-1.186-.296-1.295-.416-2.532-1.133-3.712-2.15a2.737 2.737 0 0 1-.694-.868 2.155 2.155 0 0 1-.243-.971c0-.532.185-.995.555-1.388a1.924 1.924 0 0 1 1.457-.625c.44 0 .833.14 1.18.417.879.717 1.746 1.26 2.602 1.63.879.37 1.954.555 3.226.555a7.01 7.01 0 0 0 2.36-.381c.716-.278 1.294-.636 1.734-1.076.44-.462.659-.983.659-1.56 0-.695-.208-1.285-.624-1.77-.417-.486-1.053-.89-1.908-1.214-.856-.347-1.943-.613-3.262-.798-1.248-.185-2.347-.463-3.295-.833-.949-.393-1.746-.879-2.394-1.457a6.075 6.075 0 0 1-1.422-2.082c-.324-.809-.486-1.71-.486-2.705 0-1.504.381-2.787 1.145-3.851.786-1.064 1.838-1.874 3.157-2.429.372-.157.756-.291 1.15-.404v-3.575Zm-7.222 15a2.778 2.778 0 1 1-5.556 0 2.778 2.778 0 0 1 5.556 0ZM46 35a2.778 2.778 0 1 0 0-5.555A2.778 2.778 0 0 0 46 35Z"
      clipRule="evenodd"
    />
  </svg>
  )
}


export default IconCoins