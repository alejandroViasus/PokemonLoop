import React from 'react'
import Image from 'next/image'
import { imagesPokemon, pokemonGet } from '@/Assets/funcions'
import { colors } from '@/Assets/colors'
function ShowSelectorPokemonTeamItem({ methods, trainer, pokemon, index, selector }) {

  const scale = selector === index ? 1.1 : 1

  let selectorColor = `${selector === index
    ? colors.Battle.selectorPokemon.background.whiteRedSelected
    : colors.Battle.selectorPokemon.background.redIcons}`

  if (trainer === 'user') {
    selectorColor = `${selector === index
      ? colors.Battle.selectorPokemon.background.whiteBlueSelected
      : colors.Battle.selectorPokemon.background.blueIcons}`
  }

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
          height: '100px',
          width: '100px',
          flexDirection: 'column',
          outline: `4px solid ${colors.Battle.selectorPokemon.background.blackMarginSelectors}`,
          scale: scale,

        }}
        onClick={() => { trainer === 'user' ? methods.selector.pokemon(index, trainer) : () => { } }}
      >


        <div className="absolute percentage-100-width"
          style={{
            backgroundColor: trainer === 'user'
              ? colors.Battle.selectorPokemon.background.whiteBlueSelected
              : colors.Battle.selectorPokemon.background.whiteRedSelected,
            color: trainer === 'user'

              ? colors.Battle.selectorPokemon.background.blue
              : colors.Battle.selectorPokemon.background.red,
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
          width={80}
          height={80}
          alt={`detail pokemon ${pokemon.name}`}
        />
        <h4 className="absolute"
          style={{
            color: colors.Battle.selectorPokemon.background.blackMarginSelectors,
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