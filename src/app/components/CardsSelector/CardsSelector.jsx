import React, { useState, useEffect } from "react";
import { valuesPokemon } from "@/Assets/funcions";

//? Components
import CardsSelectorItem from "../CardsSelectorItem/CardsSelectorItem";
function CardsSelector({
  index = valuesPokemon.componentRenderCards.initialIndex,
  handlerSelector,
  totalCards = valuesPokemon.componentRenderCards.sizeRender,
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
        <CardsSelectorItem key={`item${i}${i*Math.random()}`} index={i} handlerSelector={handlerSelector} />
      );
    }
    setState({ ...state, miniItems });
  }, [index, totalCards]);

  return (
    <div>
      {/* <button onClick={() => handlerSelector(index - 1)}>prev</button> */}
      {state.miniItems.length > 1 ? state.miniItems : null}
      {/* <button onClick={() => handlerSelector(index + 1)}>Next</button> */}
    </div>
  );
}

export default CardsSelector;
