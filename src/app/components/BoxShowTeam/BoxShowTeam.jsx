import React from "react";

import ShowCardMiniTeam from "../ShowCardMiniTeam/ShowCardMiniTeam";

function BoxShowTeam({ localState }) {
 // console.log(localState);

  const teamPokemon = [];

  return (
    <div
      className="flex-all-center"
      style={{
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {localState.teamUser?.map((dataPokemon) => {
        return (
          <ShowCardMiniTeam
            key={`mini-team-${dataPokemon._id}`}
            pokemon={dataPokemon}
            theme={localState.user.theme}
          />
        );
      })}
    </div>
  );
}

export default BoxShowTeam;
