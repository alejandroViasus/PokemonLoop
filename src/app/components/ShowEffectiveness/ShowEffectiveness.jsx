import React, { useState, useEffect } from "react";
import { typesPokemon } from "@/Assets/typesPokemon";

//? COMPONENTS
import ShowType from "../ShowType/ShowType";

function ShowEffectiveness({ type1, type2, Effectiveness = "2", theme }) {
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

  const sizeIcon = 25;

  const icons = state.effective?.map((type, index) => {
    return (
      <div
        className="flex-all-center"
        style={{
          width: `${sizeIcon}px`,
          height: `${sizeIcon}px`,
          //backgroundColor: 'yellow'
        }}
      >
        <div
          style={{
            scale: '0.2'
          }}
        >

          <ShowType
            key={`effective${type}${index}`}
            type1={type}
            type2={type}
            fill={`${typesPokemon[theme].colors.background}`}
          ></ShowType>
        </div>

      </div>
    );
  })



  return (
    <div
      className="flex-all-center"
      style={{
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        //backgroundColor: 'red',
        scale: '1'
      }}
    >
      <h1
        className="title-details"
        style={{
          fontSize:'25px'
        }}
      >{state.title}</h1>
      <div
        className="flex-all-center"
        style={{
          scale: 1,
          justifyContent: 'flex-start',
          backgroundColor: `${typesPokemon[theme].colors.primary}`,
          padding: '5px 20px',
          borderRadius: '40px',
          height:'35px',
        }}>
        {icons.length > 0 ? icons : <h6 className="title-details" style={{fontSize:'30px', color:`${typesPokemon[theme].colors.background}`}}>None</h6>}
      </div>
    </div>
  );
}

export default ShowEffectiveness;
