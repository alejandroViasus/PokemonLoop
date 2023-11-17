import React, { useState, useEffect } from "react";
import { generate } from "@/Assets/funcions";

function ShowStacks({ pokemon }) {
  const setValue = (item, offset) => {
    if (item < offset) {
      return item + 1;
    } else {
      return item;
    }
  };

  const setPercentage = (item, offset) => {
    return ((item / offset) * 100).toFixed(2);
  };

  const initialState = {
    actualValues: {
      statHeald: 0,
      statAttack: 0,
      statDeffense: 0,
      statSpecialAttack: 0,
      statSpecialDeffense: 0,
      statSpeed: 0,
    },
    reference: {
      statHeald: generate.getStackReference(pokemon, "Heald") || 0,
      statAttack: generate.getStackReference(pokemon, "Attack") || 0,
      statDeffense: generate.getStackReference(pokemon, "Deffense") || 0,
      statSpecialAttack:
        generate.getStackReference(pokemon, "SpecialAttack") || 0,
      statSpecialDeffense:
        generate.getStackReference(pokemon, "SpecialDeffense") || 0,
      statSpeed: generate.getStackReference(pokemon, "Speed") || 0,
    },
    referencePercentage: {
      statHeald:
        setPercentage(
          generate.getStat(pokemon, "Heald"),
          generate.getStackReference(pokemon, "Heald")
        ) || 0,
      statAttack:
        setPercentage(
          generate.getStat(pokemon, "Attack"),
          generate.getStackReference(pokemon, "Attack")
        ) || 0,
      statDeffense:
        setPercentage(
          generate.getStat(pokemon, "Deffense"),
          generate.getStackReference(pokemon, "Deffense")
        ) || 0,
      statSpecialAttack:
        setPercentage(
          generate.getStat(pokemon, "SpecialAttack"),
          generate.getStackReference(pokemon, "SpecialAttack")
        ) || 0,
      statSpecialDeffense:
        setPercentage(
          generate.getStat(pokemon, "SpecialDeffense"),
          generate.getStackReference(pokemon, "SpecialDeffense")
        ) || 0,
      statSpeed:
        setPercentage(
          generate.getStat(pokemon, "Speed"),
          generate.getStackReference(pokemon, "Speed")
        ) || 0,
    },
    limit: {
      statHeald: generate.getStat(pokemon, "Heald") || 0,
      statAttack: generate.getStat(pokemon, "Attack") || 0,
      statDeffense: generate.getStat(pokemon, "Deffense") || 0,
      statSpecialAttack: generate.getStat(pokemon, "SpecialAttack") || 0,
      statSpecialDeffense: generate.getStat(pokemon, "SpecialDeffense") || 0,
      statSpeed: generate.getStat(pokemon, "Speed") || 0,
    },

    position: {
      statHeald: 0,
      statAttack: 0,
      statDeffense: 0,
      statSpecialAttack: 0,
      statSpecialDeffense: 0,
      statSpeed: 0,
    },
    timmer: 12,
    complete: false,
    interval: 0,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
  }, [pokemon]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setState((prevState) => {
        if (prevState.complete !== true) {
          return {
            ...prevState,

            interval: prevState.interval + 0.5,
          };
        } else {
          clearInterval(intervalId);
          return prevState;
        }
      });
    }, state.timmer);
  }, [state.complete]);

  useEffect(() => {
    setState({
      ...state,
      actualValues: {
        statHeald: setValue(
          state.actualValues.statHeald,
          state.referencePercentage.statHeald
        ),
        statAttack: setValue(
          state.actualValues.statAttack,
          state.referencePercentage.statAttack
        ),
        statDeffense: setValue(
          state.actualValues.statDeffense,
          state.referencePercentage.statDeffense
        ),
        statSpecialAttack: setValue(
          state.actualValues.statSpecialAttack,
          state.referencePercentage.statSpecialAttack
        ),
        statSpecialDeffense: setValue(
          state.actualValues.statSpecialDeffense,
          state.referencePercentage.statSpecialDeffense
        ),
        statSpeed: setValue(
          state.actualValues.statSpeed,
          state.referencePercentage.statSpeed
        ),
      },
      complete: verification(),
    });
  }, [state.interval]);

  const verification = () => {
    if (
      state.actualValues.statHeald >= state.referencePercentage.statHeald &&
      state.actualValues.statAttack >= state.referencePercentage.statAttack &&
      state.actualValues.statDeffense >=
        state.referencePercentage.statDeffense &&
      state.actualValues.statSpecialAttack >=
        state.referencePercentage.statSpecialAttack &&
      state.actualValues.statSpecialDeffense >=
        state.referencePercentage.statSpecialDeffense &&
      state.actualValues.statSpeed >= state.referencePercentage.statSpeed
    ) {
      return true;
    } else {
      return false;
    }
  };

  //console.log(state);
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "400px",
          backgroundColor: "rgba(22,22,22,0.1)",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${50 - state.actualValues.statHeald / 2}%`,
            left: `50%`,
          }}
        >
          <p>{state.actualValues.statHeald}</p>
        </div>

        <div
          style={{
            position: "absolute",
            left: `${50 + (50 * state.actualValues.statAttack) / 100}%`,
            top: `${25 + (25 - (25 * state.actualValues.statAttack) / 100)}%`,
          }}
        >
          {state.actualValues.statAttack}
        </div>

        <div
          style={{
            position: "absolute",
            left: `${50 + 50 * (state.actualValues.statDeffense / 100)}% `,
            top: `${50 + 25 * (state.actualValues.statDeffense / 100)}%`,
          }}
        >
          {state.actualValues.statDeffense}
        </div>
        <div
          style={{
            position: "absolute",
            left: `50% `,
            top: `${50 + 50 * (state.actualValues.statSpecialAttack / 100)}%`,
          }}
        >
          {state.actualValues.statSpecialAttack}
        </div>

        <div
          style={{
            position: "absolute",
            left: `${
              50 - 50 * (state.actualValues.statSpecialDeffense / 100)
            }%  `,
            top: ` ${
              50 + 25 * (state.actualValues.statSpecialDeffense / 100)
            }%`,
          }}
        >
          {state.actualValues.statSpecialDeffense}
        </div>

        <div
          style={{
            position: "absolute",
            left: `0%`,
            top: `0%`,
          }}
        >
          {state.interval}
        </div>
        <div
          style={{
            position: "absolute",
            left: `${50 - 50 * (state.actualValues.statSpeed / 100)}%   `,
            top: ` ${50 - 25 * (state.actualValues.statSpeed / 100)}%`,
          }}
        >
          {state.actualValues.statSpeed}
        </div>

        <div
          style={{
            position: "absolute",

            left: "5%",
            top: "5%",
            height: "90%",
            width: "90%",
            clipPath: `polygon(
      50% 0%, 
      100% 25%, 
      100% 75%, 
      50% 100%, 
      0% 75%, 
      0% 25%
    )`,
            backgroundColor: "rgba(222,222,222,0.1)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            left: "5%",
            top: "5%",
            height: "90%",
            width: "90%",
            clipPath: `polygon(

        50% ${50 - state.actualValues.statHeald / 2}%, 
      ${50 + (50 * state.actualValues.statAttack) / 100}% 
      ${25 + (25 - (25 * state.actualValues.statAttack) / 100)}%, 
       ${50 + 50 * (state.actualValues.statDeffense / 100)}% 
      ${50 + 25 * (state.actualValues.statDeffense / 100)}%, 

      50% ${50 + 50 * (state.actualValues.statSpecialAttack / 100)}%, 
      ${50 - 50 * (state.actualValues.statSpecialDeffense / 100)}% 
      ${50 + 25 * (state.actualValues.statSpecialDeffense / 100)}%, 
      ${50 - 50 * (state.actualValues.statSpeed / 100)}% 
      ${50 - 25 * (state.actualValues.statSpeed / 100)}%
          )`,
            backgroundColor: "rgba(22,22,22,0.3)",
          }}
        ></div>
      </div>
    </>
  );
}

export default ShowStacks;
