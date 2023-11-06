import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { valuesPokemon } from "@/Assets/funcions";

//? COMPONENT
import Card from "../Card/Card";
import CardEmpty from "../CardEmpty/CardEmpty";
import CardsSelector from "../CardsSelector/CardsSelector";
import CardDetail from "../CardDetail/CardDetail";

function RenderCards() {
  const globalState = useSelector((state) => state.valueState);

  const initialState = {
    index: 1,
    sizeRender: valuesPokemon.componentRenderCards.sizeRender,
    selected: 0,
  };
  const [pokemonRender, setPokemonRender] = useState([]);

  const [state, setState] = useState(initialState);

  const changeselect = (value) => {
    setState({ ...state, selected: value });
  };

  useEffect(() => {
    getRenderPokemon();
  }, [state.index]);

  const getRenderPokemon = () => {
    const pokemonsRender = [];
    for (let i = 0; i < state.sizeRender; i++) {
      const iterator = -state.sizeRender + i + state.index * state.sizeRender;
      let pokemon = globalState?.pokemonsUser.slice().reverse()[iterator];
      //console.log(iterator, typeof iterator,pokemon)
      if (pokemon) {
        pokemonsRender.push(
          <button key={pokemon?._id} onClick={() => changeselect(iterator)}>
            <Card pokemon={pokemon} />
          </button>
        );
      } else {
        pokemonsRender.push(
          <button
            key={`${Math.random() * i}cardEmpty${Math.random() * i}`}
            onClick={() => {}}
          >
            <CardEmpty />;
          </button>
        );
      }
    }
    setPokemonRender(pokemonsRender);
  };
  const handlerSelector = (value) => {
    if (
      0 < value &&
      value <= Math.ceil(globalState.pokemonsUser.length / state.sizeRender)
    )
      return setState({ ...state, index: value });
  };

  return (
    <section>
      RenderCards
      <div>
        <div>{pokemonRender}</div>
        <div>
          <CardsSelector
            index={state.index}
            totalCards={globalState.pokemonsUser.length}
            handlerSelector={handlerSelector}
          />
        </div>
      </div>
      <div>
        <h1>pokemon selected: { globalState.pokemonsUser.slice().reverse()[state.selected]?.name}</h1>
        <CardDetail
          pokemon={
            globalState.pokemonsUser.slice().reverse()[state.selected]
          }
        />
      </div>
    </section>
  );
}

export default RenderCards;
