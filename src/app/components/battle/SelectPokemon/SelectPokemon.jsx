import React from 'react'

import { useSelector} from "react-redux";

//Compoennt
import ShowTeamBattle from '../ShowTeamBattle/ShowTeamBattle';

function SelectPokemon({state , handler,handlerSelect}) {
  console.log('in SelectorPokemon:',state)
  return (

    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(22,22,22,0.8)",
      }}
      >
      <div
        style={{
          width: "100%",
          height: "50%",
          backgroundColor: "rgba(222,222,222,1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        >
          <div>  {state.general.bioma}  </div>
       <div
       style={{
        height:'90%',
        width:'100%',
        backgroundColor: "rgba(22,22,22,0.1)",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'5%'
       }}
       >
        <ShowTeamBattle key={'BoxSelectorBattle_user'} state={state} user={'user'} handlerSelect={handlerSelect}/>
        <ShowTeamBattle  key={'BoxSelectorBattle_Rival'} state={state} user={'rival'} handlerSelect={handlerSelect}/>
       </div>
        <button onClick={()=>handler('Complete', 'selectPokemon')}> Start Battle</button>
      </div>
    </div>
    
  )
}

export default SelectPokemon