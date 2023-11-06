import React from "react";

function BoxSelectorItem({ noPokedex, pokemonSelected, handlerSelected }) {
  return (
    <button
      onClick={() => {
       // console.log(noPokedex);
        if (pokemonSelected === 0) {
          handlerSelected(noPokedex);
        }
      }}
      style={{
        color: pokemonSelected === noPokedex ? "red" : "blue",
      }}
    >
      {/* AQUI VA UNA CARD */}
      {pokemonSelected !== 0 ? <div>{noPokedex}</div> : <div>000</div>}
    </button>
  );
}

export default BoxSelectorItem;
