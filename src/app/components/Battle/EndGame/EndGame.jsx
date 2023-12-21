import React, { useState, useEffect } from "react";

function EndGame({ battleState }) {
  const initialState = {
    trainers: ["user", "rival"],
    countAliveTeam: {
      user: [],
      rival: [],
    },
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const newState = { ...state };
    state.trainers.map((trainer) => {
        battleState.team[trainer].map((pokemon,index)=>{
            console.log(trainer,'pokemonHeald' ,pokemon.heald, 'index:', index)
            if(pokemon.heald>0){
                newState.countAliveTeam[trainer].push(pokemon.name)
            }
        })
    });
    console.log(state)
    setState(newState)
  }, []);

  return <div>EndGame A {battleState.turn.loser}  {state.countAliveTeam.rival.length} vs {state.countAliveTeam.user.length}</div>;
}

export default EndGame;
