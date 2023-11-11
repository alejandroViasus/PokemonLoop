import React, { useState, useEffect } from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

//? COMPONENTS
import ShowType from "../ShowType/ShowType";

function ShowEffectiveness({ type1, type2, Effectiveness = "2" }) {
  const initialState = {
    effective: [],
    title: "",
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (type1 !== undefined) {
      //console.log(`type ${type1}`, typesPokemon[type1].effectiveness);
      //console.log(`type ${type2}`, typesPokemon[type1]?.effectiveness);

      const keys = Object.keys(typesPokemon[type1].effectiveness);
      //console.log(keys);
      const effective = [];

      keys.map((type) => {
        if (
          typesPokemon[type1].effectiveness[type] == Effectiveness ||
          typesPokemon[type2].effectiveness[type] == Effectiveness
        ) {
          effective.push(type);
        }
      });
      let title = Effectiveness == "2" ? "strengths" : "weaknesses";
      //console.log("efective", effective);
      //console.log("inefective", ineffective);
      setState({ effective, title });
    }
  }, [type1, type2]);

  return (
    <div>
      <h1>{state.title}</h1>
      <div style={{ display: "flex" }}>
        {state.effective?.map((type, index) => {
          return (
            <ShowType
              key={`effective${type}${index}`}
              type1={type}
              type2={type}
              fill="rgba(22,22,22,1)"
            ></ShowType>
          );
        })}
      </div>
    </div>
  );
}

export default ShowEffectiveness;
