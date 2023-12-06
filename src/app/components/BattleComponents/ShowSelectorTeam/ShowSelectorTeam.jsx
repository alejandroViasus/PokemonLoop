import React from "react";
import CardBaseMini from "../../CardBaseMini/CardBaseMini";

function ShowSelectorTeam({ battleState, methods, user }) {
  //console.log("inSelection", battleState, user);
  return (
    <div>
      <h3>{`team ${user}`}</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        {battleState.team[user].map((pokemon, index) => {
          return (
            <CardBaseMini
              key={`${pokemon._id}`}
              pokemon={pokemon}
              user={user}
              index={index}
              globalIndex={battleState.selectorPokemon[user]}
              handlerSelect={methods.selector.pokemon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowSelectorTeam;
