import React from 'react'
import Image from 'next/image'
import { generate } from '@/Assets/funcions'
import { imagesPokemon } from '@/Assets/funcions';
import { typesPokemon } from '@/Assets/typesPokemon';


import IconHeald from '@/app/Icons/IconHeald';
import IconAttack from '@/app/Icons/iconAttack';
import IconDeffense from '@/app/Icons/iconDeffense';
import IconAttackPlus from '@/app/Icons/IconAttackPlus';
import IconDeffensePlus from '@/app/Icons/IconDeffensePlus';
import IconSpeed from '@/app/Icons/IconSpeed';

import { colors } from '@/Assets/colors';

import ShowType from '../../ShowType/ShowType';


function StadisticInBattle({ pokemon, trainer = 'user', rival = 'rival', bioma = 'Normal', dificult }) {


  console.log('pokemons...', pokemon)
  const IconStat = {
    Heald: IconHeald,
    Attack: IconAttack,
    Deffense: IconDeffense,
    SpecialAttack: IconAttackPlus,
    SpecialDeffense: IconDeffensePlus,
    Speed: IconSpeed,
  }

  const stats = ['Heald', 'Attack', 'Deffense', 'SpecialAttack', 'SpecialDeffense', 'Speed']
  return (
    <div className='flex-all-center relative'
      style={{
        // flexDirection: 'column',
        gap: '0px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '240px',
        width: '410px',
        
      }}
    >
      <div
        className='flex-all-center'
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >

        {stats.map((stat, index) => {
          const Component = IconStat[stat]
          return (
            <div
              key={`stat_${stat}_${index}`}
              className='flex-all-center'
              style={{
                justifyContent: 'flex-end',
                // gap: '15px'
                // backgroundColor:'red'
              }}
            >
              <h1
                className='flex-all-center'
                style={{
                  justifyContent: 'flex-end',
                  color: colors.Battle.selectorPokemon.background.white,
                  width: '100px',
                  //  backgroundColor:'green'
                }}
              >
                {generate.getStat(pokemon[trainer], stat)}
                {/* x {generate.getEffectiveness(pokemon[trainer],pokemon[rival],bioma)} */}
              </h1>
              <div
                className='flex-all-center'
                style={{
                  // backgroundColor:'green',
                  // backgroundColor:'red',
                  height: '40px',
                  // width:'40px',
                  scale: '0.5'
                }}
              >
                <Component color={colors.Battle.selectorPokemon.background.white} />
              </div>

              <div className="absolute animation-up-and-down"
                style={{
                  left: '50%'
                }}
              >
              </div>

              {/* <h2
            style={{
              color: colors.Battle.selectorPokemon.background.white
            }}
            >
            {generate.getStat(pokemon[rival], stat)}
          </h2> */}
            </div>
          )
        })}
      </div>
      <div
        className='flex-all-center border-radius-mid relative'
        style={{
          height: '180px',
          width: '200px',
          backgroundColor: trainer==='user'? colors.Battle.selectorPokemon.background.blue: colors.Battle.selectorPokemon.background.red

        }}
      >
        <h2
          className='absolute title-details'
          style={{
            fontSize: '25px',
            color: trainer==='user'? colors.Battle.selectorPokemon.background.blueIcons: colors.Battle.selectorPokemon.background.redIcons,
            top: '0%'
          }}
        >
          {pokemon[trainer]?.name}
        </h2>

        <Image src={imagesPokemon.official(pokemon[trainer]?.noPokedex, pokemon[trainer]?.shiny)} width={150} height={150} alt="pokemon User selected" />

      </div>
      <div className="flex-all-center absolute "
        style={{
          bottom: '-5%',
          right: '10%',
          backgroundColor: trainer==='user'? colors.Battle.selectorPokemon.background.blue: colors.Battle.selectorPokemon.background.red,
          height: '60px',
          width: '160px',
          borderRadius: '30px',
          
        }}
      >
        <ShowType
          type1={pokemon[trainer]?.type1}
          type2={pokemon[trainer]?.type2}
          fill={trainer==='user'? colors.Battle.selectorPokemon.background.blueIcons: colors.Battle.selectorPokemon.background.redIcons}
          scale='0.5'
          disposition='row'
        ></ShowType>
      </div>
    </div>
  )
}

export default StadisticInBattle