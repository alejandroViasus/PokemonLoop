import React from 'react'
import { valuesPokemon } from '@/Assets/funcions'
import arrowTest from '../../../../../public/Assets/icons/ArrowDirectionTest.svg'
import Image from 'next/image';


function PokemonInBattleField({battleState,user}) {
const angle = battleState.cardsVector[user][battleState.selectorCardVector[user]].angle
    const width= valuesPokemon.componentBattle.size.pokemonBaseSize*battleState.team[user][battleState.selectorPokemon[user]].height;
    const positionX=valuesPokemon.componentBattle.initialPosition[user].x
    const positionY=valuesPokemon.componentBattle.initialPosition[user].y
  return (
    <div
    style={{
        position: "absolute",
        width: `${width}px`,
        height: `${width}px`,
        backgroundColor: `rgba(22,22,22,0.2)`,
        transform: `translateX(${positionX}px) translateY(${positionY}px)`,
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        //boxShadow:`0px 0px 200px 100px rgba(0, 0, 0, 0.2)`
        //filter:` drop-shadow(30px 50px 2px rgb(0 0 0 / 0.4))`
      }}
      >
        <div
        style={{
            position: "absolute",
            transform: `rotate(${angle}deg)`,
            opacity:'0.3'
        }}
        >
        <Image src={arrowTest} width={width} height={width} alt={`arrowTest`}/>
        </div>
        {/* <h3>{user}</h3> */}
        </div>
  )
}

export default PokemonInBattleField