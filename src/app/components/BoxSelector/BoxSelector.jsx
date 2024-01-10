import React, { useState, useEffect } from "react";
import { pokemonGet, valuesPokemon, generate } from "@/Assets/funcions";
import { useSelector } from "react-redux";
import { pokemonFormat } from "@/Assets/globalStateFormat";

//? Components
import BoxSelectorItem from "../BoxSelectorItem/BoxSelectorItem";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function BoxSelector({handlerDone}) {
  const globalState = useSelector((state) => state.valueState);

  const generatePokemons = () => {
    let listPokemons = [];
    for (let i = 0; i < valuesPokemon.componentBox.size; i++) {
      listPokemons.push(pokemonGet.noPokedex(globalState.user.level));
    }
    return listPokemons;
  };

  const initialState = {
    listPokemons: generatePokemons(),
    trade: false,
    pokemonSelected: 0,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state.pokemonSelected !== 0 && state.trade == true) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${state.pokemonSelected}`)
        .then((resp) => resp.json())
        .then((dataPokemon) => {
          let newPokemon = pokemonFormat;
          //console.log("............", newPokemon);
          newPokemon = generate.newPokemon(dataPokemon, globalState.user);
          //console.log("NEW_POKEMON_GENERATE", newPokemon);
          fetch("/api/pokemon/create-pokemon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPokemon),
          })
            .then((resp) => resp.json())
            .then((data) => console.log("pokemonCreado", data))
            .catch((err) => console.log("%__2__%%", err));
        })
        .catch((err) => console.log("%__1__%%", err));
    }
  }, [state.trade]);

  const handlerSelected = (value) => {
    //console.log(value);
    handlerDone()
    setState({ ...state, pokemonSelected: value, trade: true });
  };
  //console.log(state);
  return (
    <div>

      {state.listPokemons?.map((noPokedex, index) => {
        return (
          <BoxSelectorItem
            key={`card${noPokedex}.${index}`}
            noPokedex={noPokedex}
            pokemonSelected={state.pokemonSelected}
            handlerSelected={handlerSelected}
          />
        );
      })}
    </div>
  );
}

export default BoxSelector;
