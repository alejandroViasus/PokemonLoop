import React from "react";
import CardVector from "../../CardVector/CardVector";

function ShowCardsVector({ battleState, methods, user = "user" }) {
  const cardSelected =
    battleState.cardsVector[user][battleState.selectorCardVector[user]];

  const showCards = (card, index) => {
    return (
      <CardVector
        key={`vector_${index}_${card.angle}`}
        card={card}
        index={index}
        battleState={battleState}
        methods={methods}
      />
    );
  };
  //console.log("battleState in Show", battleState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        gap: "2%",
      }}
    >
          <button onClick={()=>methods.changeInGame('inBattle')}>endMode</button>
      <div>
        <CardVector
          key={`vector_selector_${cardSelected.angle}`}
          card={cardSelected}
          index={battleState.selectorCardVector[user]}
          battleState={battleState}
          methods={methods}
        />
      </div>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        gap: "2%",
      }}
      >{battleState.cardsVector[user].map(showCards)}</div>
      
    </div>
  );
}

export default ShowCardsVector;
