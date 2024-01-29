import React from 'react'
import Image from 'next/image'
import { generate } from '@/Assets/funcions'
import { imagesPokemon } from '@/Assets/funcions';
import { typesPokemon } from '@/Assets/typesPokemon';
import { colors } from '@/Assets/colors';


import IconHeald from '@/app/Icons/IconHeald';
import IconAttack from '@/app/Icons/iconAttack';
import IconDeffense from '@/app/Icons/iconDeffense';
import IconAttackPlus from '@/app/Icons/IconAttackPlus';
import IconDeffensePlus from '@/app/Icons/IconDeffensePlus';
import IconSpeed from '@/app/Icons/IconSpeed';



import ShowType from '../../ShowType/ShowType';


function StadisticInBattle({ theme = 'None', pokemon, trainer = 'user', rival = 'rival', bioma = 'Normal', dificult }) {


  // console.log('pokemons...', pokemon)
  const IconStat = {
    Heald: IconHeald,
    Attack: IconAttack,
    Deffense: IconDeffense,
    SpecialAttack: IconAttackPlus,
    SpecialDeffense: IconDeffensePlus,
    Speed: IconSpeed,
  }

  const stats = ['Heald', 'Attack', 'Deffense', 'SpecialAttack', 'SpecialDeffense', 'Speed']
  
  // console.log('fffffffffffffffffffffffff',pokemon)
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
                  color: typesPokemon[theme].colors.textWhite,
                  width: '100px',
                  //  backgroundColor:'green'
                }}
              >
                {
                  stat === 'Heald' 
                  ? (generate.getStat(pokemon[trainer], stat) * pokemon[trainer].heald)/100
                  :generate.getStat(pokemon[trainer], stat)
                }
                

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
                <Component color={typesPokemon[theme].colors.textWhite} />
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
        className='flex-all-center border-radius-mid relative '
        style={{
          height: '180px',
          width: '200px',
          backgroundColor: typesPokemon[theme].colors.background
          // backgroundColor: trainer==='user'? colors.Battle.selectorPokemon.background.blue: colors.Battle.selectorPokemon.background.red

        }}
      >
        <h2
          className='absolute title-details percentage-100-width'
          style={{
            width: '101%',
            fontSize: '25px',
            textAlign: 'center',
            padding: '10% 0%',
            // color: trainer==='user'? colors.Battle.selectorPokemon.background.blueIcons: colors.Battle.selectorPokemon.background.redIcons,
            color: typesPokemon[theme].colors.background,
            backgroundColor: typesPokemon[theme].colors.tertiary,
            top: '5%',
            opacity: 1
          }}
        >
          {pokemon[trainer]?.name?.substring(0, 12)}
        </h2>

        <Image
          className='absolute'
          style={{
            zIndex: 2,
          }}
          src={imagesPokemon.official(pokemon[trainer]?.noPokedex, pokemon[trainer]?.shiny)} width={150} height={150} alt="pokemon User selected" />

      </div>
      <div className="flex-all-center absolute "
        style={{
          bottom: '-5%',
          right: '10%',
          backgroundColor: typesPokemon[theme].colors.background,
          height: '60px',
          width: '160px',
          borderRadius: '30px',

        }}
      >
        <ShowType
          type1={pokemon[trainer]?.type1}
          type2={pokemon[trainer]?.type2}
          fill={typesPokemon[theme].colors.primary}
          scale='0.5'
          disposition='row'
        ></ShowType>
      </div>
    </div>
  )
}

export default StadisticInBattle