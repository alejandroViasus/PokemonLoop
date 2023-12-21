import React from "react";

function TeasterTurn({ battleState, methods }) {
   console.log(battleState) 
  return <div>

    <button onClick={()=>console.log(battleState)}> BattleState </button>
    
  </div>;
}

export default TeasterTurn;
