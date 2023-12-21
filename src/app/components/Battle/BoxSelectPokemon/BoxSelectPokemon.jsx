import React from "react";
import ShowSelectorPokemonTeam from "../ShowSelectorPokemonTeam/ShowSelectorPokemonTeam";

const BoxSelectPokemon = ({ battleState, methods }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        backgroundColor: "rgba(22, 22, 22, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "70%",
          backgroundColor: "rgba(100, 100, 222, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShowSelectorPokemonTeam
            team={battleState.team.user}
            methods={methods}
            trainer="user"
            selector={battleState.select.pokemon.user}
          />
          <ShowSelectorPokemonTeam
            team={battleState.team.rival}
            methods={methods}
            trainer="rival"
            selector={battleState.select.pokemon.rival}
          />
        </div>
        <button onClick={() => methods.changeActualPhase(4)}>
          Start Battle
        </button>
      </div>
    </div>
  );
};

export default BoxSelectPokemon;
