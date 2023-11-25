import React from 'react'
import CardBaseMini from '../CardBaseMini/CardBaseMini'
function BattlePhaseSelectionteam({teamPokemon , handlerSelect,user='rival'}) {
  return (
    <div>
        {teamPokemon.map((pokemon)=>{
            return(
                <CardBaseMini
              key={`${pokemon._id}`}
              pokemon={pokemon}
              handlerSelect={handlerSelect}
              user='user'
            />
            )
        })}
        </div>
  )
}

export default BattlePhaseSelectionteam