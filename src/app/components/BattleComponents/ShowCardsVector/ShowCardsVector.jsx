import React from "react";
import CardVector from "../../CardVector/CardVector";
import { valuesPokemon } from "@/Assets/funcions";

function ShowCardsVector({ battleState, methods, user = "user" }) {
  const cardSelected =
    battleState.cardsVector[user][battleState.selectorCardVector[user]];

  const showCards = (card, index) => {
    return (
      <div key={`vector_${index}_${card.angle}`}>
        {battleState.inGame === "selectionCard" ? (
          <CardVector
            card={card}
            index={index}
            battleState={battleState}
            methods={methods}
          />
        ) : (
          <div>emptyCard</div>
        )}
      </div>
    );
  };
  //console.log("battleState in Show", battleState);

  // let lastKey = null;
  // document.addEventListener("keyup", function (event) {
  //   if (lastKey === event.key) {
  //     return; // Ignora el evento si la tecla es la misma que la última tecla presionada
  //   }
  //   lastKey = event.key;
  //   valuesPokemon.componentBattle.groupCards.shortCuts.cards.map((keyWord) => {
  //     console.log(` tecla ${event.key} `);
  //     if (event.key.toUpperCase() === keyWord.key) {
  //       //console.log(`La tecla Enter fue presionada ${keyWord.key} index =>${keyWord.value} `);
  //       methods.selector.cardVector(keyWord.value);
  //     }
  //   });
  // });

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
      <div style={{ display: "flex" }}>
        <button onClick={() => methods.changeInGame("inBattle")}>
          endMode
        </button>
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
      >
        {battleState.cardsVector[user].map(showCards)}
      </div>
    </div>
  );
}

export default ShowCardsVector;
