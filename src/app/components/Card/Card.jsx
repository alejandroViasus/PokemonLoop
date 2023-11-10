import React from 'react'
import CardButtonTeam from '../CardButtonTeam/CardButtonTeam'

function Card({pokemon}) {
  return (
    <div>
      <CardButtonTeam pokemon={pokemon}/>
      <CardButtonTeam pokemon={pokemon} porperty={'favorite'}/>
        <h3>{pokemon.name}</h3>
    </div>
  )
}

export default Card