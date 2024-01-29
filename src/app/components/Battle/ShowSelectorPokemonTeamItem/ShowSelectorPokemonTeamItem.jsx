import React from 'react'
import Image from 'next/image'
import { imagesPokemon, pokemonGet } from '@/Assets/funcions'
import { colors } from '@/Assets/colors'
import { typesPokemon } from '@/Assets/typesPokemon'

function ShowSelectorPokemonTeamItem({ methods, trainer, pokemon, index, selector,theme='Normal' }) {

  const scale = selector === index ? 1.1 : 1

  let selectorColor = `${selector === index
    ? typesPokemon[theme].colors.textWhite
    : typesPokemon[theme].colors.textDark}`

  // if (trainer === 'user') {
  //   selectorColor = `${selector === index
  //     ? typesPokemon[theme].colors.textWhite
  //     : colors.Battle.selectorPokemon.background.blueIcons}`
  // }

  return (
    <div
      style={{
        // backgroundColor: 'red',
        opacity: pokemon.heald === 0 ? 0.3 : 1
      }}
    >
      <button
        disabled={pokemon.heald === 0}
        className={`
        relative 
        flex-all-center 
        none-styles-button 
        border-radius-mid 
        ${trainer === 'user' ? 'cursor-pointer' : ''}
        hover-scale-select-pokemon
        `}
        style={{
          backgroundColor: selectorColor,
          height: '120px',
          width: '120px',
          flexDirection: 'column',
          outline: `4px solid ${typesPokemon[theme].colors.secondary}`,
          scale: scale,

        }}
        onClick={() => { trainer === 'user' ? methods.selector.pokemon(index, trainer) : () => { } }}
      >


        <div className="absolute percentage-100-width flex-all-center"
          style={{
            // backgroundColor: trainer === 'user'
            //   ? colors.Battle.selectorPokemon.background.whiteBlueSelected
            //   : colors.Battle.selectorPokemon.background.whiteRedSelected,
            backgroundColor:selector === index
            ?typesPokemon[theme].colors.textDark
            :typesPokemon[theme].colors.textWhite,
            color:selector === index
            ?typesPokemon[theme].colors.textWhite
            :typesPokemon[theme].colors.textDark,
            // color: trainer === 'user'
            //   ? colors.Battle.selectorPokemon.background.blue
            //   : colors.Battle.selectorPokemon.background.red,
            height: '20%',
            top: '10%',
          }}
        >
          {pokemon.name}

        </div>
        <Image
          className='absolute'
          style={{
            top: '20%'
          }}
          src={imagesPokemon.pixel(pokemon.noPokedex, pokemon.shiny)}
          width={100}
          height={100}
          alt={`detail pokemon ${pokemon.name}`}
        />
        <h4 className="absolute"
          style={{
            color: typesPokemon[theme].colors.textDark,
            bottom: '8%',
            right: '8%'
          }}
        >
          lvl.{pokemonGet.calcularNivel(pokemon.experience)}
        </h4>
      </button>
    </div>
  )
}

export default ShowSelectorPokemonTeamItem