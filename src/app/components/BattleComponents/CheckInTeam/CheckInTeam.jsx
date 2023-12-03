import React from "react";
import { valuesPokemon } from "@/Assets/funcions";
import Link from "next/link";

function CheckInTeam({ globalState, methods }) {
  return (
    <div>
      <h1>
        {" "}
        {`U PokemonTeam is Small ${globalState.teamUser.length}/ ${valuesPokemon.componentBattle.size.team}`}
      </h1>
      <h3>{`do you want to continue ?`}</h3>

      <div>
        <button
          onClick={() => methods.changeValidation("continue", "team")}
        >{`Yes`}</button>
        <button
          onClick={() => methods.changeValidation("no", "team")}
        >{`No`}</button>
      </div>
    </div>
  );
}

export default CheckInTeam;
