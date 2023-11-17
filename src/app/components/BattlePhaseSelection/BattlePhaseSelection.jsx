'use client '
import React ,{useState,useEffect} from 'react'

import { globalStateFormat } from '@/Assets/globalStateFormat'

function BattlePhaseSelection({localState}) {

const initialState={
  
} 


  console.log(localState)
  return (
    <div
    style={{
      display:'flex',
      position:'absolute',
      top:0,
      left:0,
      width:'100VW', 
      height:'100vh',
      backgroundColor:'rgba(22,22,22,0.8)',
      zIndex:'5',
    }}
    >
      <div>

      </div>
    </div>
  )
}

export default BattlePhaseSelection