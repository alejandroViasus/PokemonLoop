import React from 'react'
import ShowSelectorTeam from '../ShowSelectorTeam/ShowSelectorTeam'
import { battle } from '@/app/battle/battlek'

function SelectPokemonTeam({battleState,methods}) {
  return (
    <div>
      <div>
        <ShowSelectorTeam battleState={battleState} methods={methods} user={'user'}/>
        <ShowSelectorTeam battleState={battleState} methods={methods} user={'rival'}/>
      </div>
      <button onClick={()=>methods.changePhaseAndInGame(battle.phases[2],battle.inGame[1])}> Start Battle </button>
    </div>
  )
}

export default SelectPokemonTeam