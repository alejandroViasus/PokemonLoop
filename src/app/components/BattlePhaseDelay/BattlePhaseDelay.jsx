import React, { useState, useEffect } from "react";


function BattlePhaseDelay({ handlerPhase }) {
  const initialState = {
    value: 3,
    timer: 1000,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state.value === 0) {
      // Cuando llega a cero, ejecuta handlerPhase y actualiza el estado para mostrar 'Fight !!'
      handlerPhase("fight");
      setState((prevState) => ({ ...prevState, value: "Fight !!" }));
    } else {
      // Si no ha llegado a cero, actualiza el estado en un segundo y reduce el valor
      const timerId = setInterval(() => {
        setState((prevState) => ({ ...prevState, value: prevState.value - 1 }));
      }, state.timer);

      // Limpia el temporizador al desmontar el componente o cuando value llega a cero
      return () => clearInterval(timerId);
    }
  }, [state.value, state.timer, handlerPhase]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: '30%',
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "40%",
          backgroundColor: "rgba(22,22,22,0.8)",
          color: "rgba(222,222,222,1)",
        }}
      >
        <h1>{state.value} !</h1>
      </div>
    </div>
  );
}

export default BattlePhaseDelay;
