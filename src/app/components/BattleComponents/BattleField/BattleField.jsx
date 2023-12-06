import React from 'react'
import ShowCardsVector from '../ShowCardsVector/ShowCardsVector'
import AreaBattleField from '../AreaBattleField/AreaBattleField'

function BattleField({battleState, methods}) {
  //console.log('in BttleState',battleState)
  return (
    <div
    style={{
      position:'relative',
      width: `100vw`,
      height:`100vh`,
      backgroundColor:`rgba(222,222,222,0.2)`,
      overflow:'hidden',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
  }}>
        <section> header </section>
        <section> <AreaBattleField battleState={battleState} methods={methods}/> </section>
        <section
         style={{
          position:'absolute',
          backgroundColor:`rgba(222,222,222,0.2)`,
          bottom:'0%'
      }}
        > <ShowCardsVector battleState={battleState} methods={methods}/> </section>
    </div>
  )
}

export default BattleField