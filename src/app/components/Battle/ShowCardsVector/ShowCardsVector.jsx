import React from "react";
import CardVector from "../../CardVector/CardVector";
import { valuesPokemon } from "@/Assets/funcions";

function ShowCardsVector({ battleState, methods, user = "user" }) {
  //   const cardSelected =
  //     battleState.vectorCards[user][battleState.select.cardVector[user]];

  //   const showCards = (card, index) => {
  //     return (
  //       <div key={`vector_${index}_${card.angle}_${card.power}`}>
  //         {battleState.turn.user ? (
  //           <CardVector
  //             card={card}
  //             index={index}
  //             battleState={battleState}
  //             methods={methods}
  //           />
  //         ) : (
  //           <div>emptyCard</div>
  //         )}
  //       </div>
  //     );
  //   };

  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         backgroundColor: "green",
  //         gap: "2%",
  //       }}
  //     >
  //       <div style={{ display: "flex" }}>
  //         <button onClick={() => methods.changeActualPhase(5)}>
  //           endMode
  //         </button>
  //         <CardVector
  //           key={`vector_selector_${cardSelected.angle}`}
  //           card={cardSelected}
  //           index={battleState.select.cardVector[user]}
  //           battleState={battleState}
  //           methods={methods}
  //         />
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           backgroundColor: "green",
  //           gap: "2%",
  //         }}
  //       >
  //         {battleState.vectorCards[user].map(showCards)}
  //       </div>
  //     </div>
  //   );
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: "0px",
        left: "0px",
        backgroundColor: "rgba(22,22,22,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: "rgba(222,222,222,1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3%",
        }}
      >
        <div
          style={{
            width: "auto",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3%",
          }}
        >
          {battleState.vectorCards.user.map((card, index) => {
            return (
              <CardVector
                card={card}
                index={index}
                battleState={battleState}
                methods={methods}
              />
            );
          })}
        </div>
        <div
          style={{
            width: "auto",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => methods.changeActualPhase(5)}>
            <CardVector
              card={
                battleState.vectorCards.user[battleState.select.cardVector.user]
              }
              index={
                battleState.select.cardVector.user
              }
              battleState={battleState}
              methods={methods}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowCardsVector;
