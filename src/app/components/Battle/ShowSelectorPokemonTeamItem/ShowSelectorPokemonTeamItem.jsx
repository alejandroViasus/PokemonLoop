import React from 'react'

function ShowSelectorPokemonTeamItem({methods,trainer,pokemon,index,selector}) {
  return (
    <div>
        <button
        disabled={pokemon.heald===0}
        style={{backgroundColor:`${selector===index?`rgba(222,100,10,1)`:`rgba(50,200,200)`}`}}
        onClick={()=>{trainer==='user'?methods.selector.pokemon(index,trainer):()=>{}}}
        >{pokemon.name}</button>
    </div>
  )
}

export default ShowSelectorPokemonTeamItem