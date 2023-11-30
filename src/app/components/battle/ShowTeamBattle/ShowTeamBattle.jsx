import React from "react";

//Components

import CardBaseMini from "../../CardBaseMini/CardBaseMini";

function ShowTeamBattle({ state, user, handlerSelect }) {
  return (
    <div>
      {state[user].teamPokemon.length > 0 ? (
        <div>
          <div>
            <CardBaseMini
              pokemon={
                state[user]?.teamPokemon[state.game[user].idpokemonSelect]
              }
              handlerSelect={() => {}}
              user={user}
            />
          </div>
          <h1>{user}</h1>
          <div
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            {state[user].teamPokemon?.map((pokemon, index) => {
              const key = `pokemonSelected_${user}_${index}_${Math.random()}`;
              //console.log(key);
              return (
                //   <div key={`pokemonSelected${user}_${index}`}>{pokemon.name}</div>
                <CardBaseMini
                  key={key}
                  pokemon={pokemon}
                  handlerSelect={handlerSelect}
                  user={user}
                  index={index}
                  globalIndex={state.game[user].idpokemonSelect}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ShowTeamBattle;
