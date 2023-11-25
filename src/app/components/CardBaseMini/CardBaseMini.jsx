import React,{useState,useEffect} from 'react'

import { imagesPokemon } from '@/Assets/funcions'
import Image from 'next/image'

function CardBaseMini({pokemon,handlerSelect,user='rival'}) {
  return (
    <ul
    onClick={()=> handlerSelect(pokemon,user) }
    >
        <h3>{pokemon.name}</h3>
        <Image
            src={imagesPokemon.official(pokemon.noPokedex, pokemon.shiny)}
            width={40}
            height={40}
            alt={`detail pokemon ${pokemon.name}`}
            />
            <h6>{pokemon.level}</h6>
    </ul>
  )
}

export default CardBaseMini