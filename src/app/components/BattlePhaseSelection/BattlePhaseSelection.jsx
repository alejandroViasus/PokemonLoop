"use client ";
import React, { useState, useEffect } from "react";

import { globalStateFormat } from "@/Assets/globalStateFormat";

//?components
import BattlePhaseSelectionteam from "../BattlePhaseSelectionteam/BattlePhaseSelectionteam";
import CardBaseMini from "../CardBaseMini/CardBaseMini";

function BattlePhaseSelection({ localState, handlerSelect, handlerPhase }) {
  const initialState = {};

  //console.log(localState);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100VW",
        height: "100vh",
        backgroundColor: "rgba(22,22,22,0.8)",
        zIndex: "1",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          height: "50%",
          backgroundColor: "rgba(222,222,222,1)",

          zIndex: "1",
        }}
      >
        <div>
          <div>
            {localState.battlefield?.pokemonSelectedUser ? (
              <>
                {" "}
                Selected{" "}
                <CardBaseMini
                  pokemon={localState.battlefield?.pokemonSelectedUser}
                  handlerSelect={() => {}}
                />
              </>
            ) : null}
          </div>
          <BattlePhaseSelectionteam
            teamPokemon={localState?.trainer.team}
            handlerSelect={handlerSelect}
          />
        </div>
        <div>
          {localState.battlefield?.pokemonSelectedRival ? (
            <>
              {" "}
              Selected{" "} Rival
              <CardBaseMini
                pokemon={localState.battlefield?.pokemonSelectedRival}
                handlerSelect={() => {}}
              />
            </>
          ) : null}
          <BattlePhaseSelectionteam
            teamPokemon={localState?.rival.team}
            handlerSelect={() => {}}
          />
        </div>
      </div>
      <div>
        <button onClick={() => handlerPhase("delay")}> StartBattle </button>
      </div>
    </div>
  );
}

export default BattlePhaseSelection;
