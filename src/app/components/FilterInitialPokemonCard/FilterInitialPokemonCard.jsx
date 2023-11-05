import React from 'react'
import Image from 'next/image'
import { imagesPokemon } from '@/Assets/funcions'
import { headers } from '../../../../next.config'

function FilterInitialPokemonCard({pokedex,handlerInitialIndexPokemon}) {
  return (
    <button >
        <Image onClick={()=>{handlerInitialIndexPokemon(pokedex)}} src={imagesPokemon.official(pokedex)} height={50} width={50} alt='card initialPokemon' ></Image>
    </button>
  )
}

export default FilterInitialPokemonCard