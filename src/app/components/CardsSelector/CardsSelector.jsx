import React, { useState, useEffect } from "react";
import { valuesPokemon } from "@/Assets/funcions";
import { typesPokemon } from "@/Assets/typesPokemon";

//? Components
import CardsSelectorItem from "../CardsSelectorItem/CardsSelectorItem";
function CardsSelector({
  index = valuesPokemon.componentRenderCards.initialIndex,
  handlerSelector,
  totalCards = valuesPokemon.componentRenderCards.sizeRender,
  theme = 'None'
}) {
  const initialState = {
    miniItems: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // console.log("selector",valuesPokemon.componentRenderCards.initialIndex,totalCards);
    const miniItems = [];
    for (
      let i = valuesPokemon.componentRenderCards.initialIndex;
      i <=
      Math.ceil(totalCards / valuesPokemon.componentRenderCards.sizeRender);
      i++
    ) {
      miniItems.push(
        <CardsSelectorItem key={`item${i}${i * Math.random()}`} index={i} actualIndex={index} handlerSelector={handlerSelector} theme={theme} />
      );
    }
    setState({ ...state, miniItems });
  }, [index, totalCards]);

  return (

    <div
      className="flex-all-center"
      style={{
        backgroundColor: 'rgba(22,22,22,0)',
        padding: ' 10px 20px',
        gap: '10px',
        borderRadius: '20px'
      }}
    >
      {/* <button onClick={() => handlerSelector(index - 1)}>prev</button> */}
      {state.miniItems.length > 1 ? state.miniItems : null}
      {/* <button onClick={() => handlerSelector(index + 1)}>Next</button> */}
    </div>
  );
}

export default CardsSelector;
