import { valuesPokemon } from "@/Assets/funcions";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function SelectorMode({ handler, phase, title, redirection ,id}) {
  const initialState =
    phase === valuesPokemon.componentBattle.phases.values[0]
      ? valuesPokemon.componentBattle.modes
      : valuesPokemon.componentBattle.boleanResponse;

  const [state, setState] = useState(initialState);
  const modes = (mode) => {
    return (
      <button
        key={`option_${mode}`}
        onClick={() => handler(mode, phase, title)}
      >
        {mode}
      </button>
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{title}</h1>
        {redirection === undefined ? (
          <div>
            {phase === valuesPokemon.componentBattle.phases.values[0] ? (
              <div>{state.map(modes)}</div>
            ) : null}
            {phase === valuesPokemon.componentBattle.phases.values[1] ? (
              <div>{state.map(modes)}</div>
            ) : null}
          </div>
        ) : (
            <div>
                {Object.keys(redirection).map((link)=>{
                  console.log(redirection[link].url)
                    return (<Link key={`redirection_${link}`} href={`${redirection[link].url}?id=${id}`}>{redirection[link].title}</Link>)
                })}
            </div>
        )}
      </div>
    </div>
  );
}

export default SelectorMode;
