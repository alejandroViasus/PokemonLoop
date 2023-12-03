import React from "react";
import { valuesPokemon } from "@/Assets/funcions";
import Link from "next/link";

function RedirectionTeam({ globalState, methods }) {
  return (
    <div>
      <h1>
        {" "}
        {`U PokemonTeam is Small ${globalState.teamUser.length}/ ${valuesPokemon.componentBattle.size.team}`}
      </h1>
      <h3>what do u want ?</h3>

      <div>
        <button
          onClick={() => methods.changeValidation("continue", "team")}
        >{`Continue`}</button>
        <p>or</p>
        <div>
          {/*//! Links de navegacion para los componentes home y cards*/}
          <Link href={`/?id=${globalState.user._id}`}> go to Home </Link>
          <Link href={`/cards?id=${globalState.user._id}`}> go to Cards </Link>
        </div>
      </div>
    </div>
  );
}

export default RedirectionTeam;
