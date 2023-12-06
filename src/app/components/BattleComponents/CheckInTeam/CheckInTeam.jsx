import React from "react";
import { valuesPokemon } from "@/Assets/funcions";
import Link from "next/link";

function CheckInTeam({ globalState, methods }) {
  return (
    <div>
      {globalState.teamUser.length === 0 ||
      globalState.teamUser.length > valuesPokemon.componentBattle.size.team
        ? (<div>
          <h1>
            {" "}
            {`U dont have a PokemonTeam`}
          </h1>
          <h3>{`build your Pokémon team and come back to compete.`}</h3>
  
          <div>
          <Link href={`/?id=${globalState.user._id}`}> go to Home </Link>
          <Link href={`/cards?id=${globalState.user._id}`}> go to Cards </Link>
          </div>
        </div>)
        : (<div>
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
        </div>)}
      
    </div>
  );
}

export default CheckInTeam;
