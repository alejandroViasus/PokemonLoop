import React, { useState, useEffect } from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

//? COMPONENTS
import ShowType from "../ShowType/ShowType";

function ShowEffectiveness({ type1, type2, Effectiveness = "2" }) {
  const initialState = {
    effective: [],
    ineffective: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (type1 !== undefined) {
      //console.log(`type ${type1}`, typesPokemon[type1].effectiveness);
      //console.log(`type ${type2}`, typesPokemon[type1]?.effectiveness);

      const keys = Object.keys(typesPokemon[type1].effectiveness);
      console.log(keys);
      const effective = [];
      const ineffective = [];

      keys.map((type) => {
        if (
          typesPokemon[type1].effectiveness[type] == "2" ||
          typesPokemon[type2].effectiveness[type] == "2"
        ) {
          effective.push(type);
        } else if (
          typesPokemon[type1].effectiveness[type] == "0.5" ||
          typesPokemon[type2].effectiveness[type] == "0.5"
        ) {
          ineffective.push(type);
        }
      });
      console.log("efective", effective);
      console.log("inefective", ineffective);

      setState({effective,ineffective})
    }
  }, [type1, type2]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        {state.ineffective?.map((type) => {
          return (
            <ShowType
              key={`ineffective${type}${index}`}
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
