import React, { useEffect, useState } from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

//?------ COMPONENTS

import FilterTypeButton from "../FilterTypeButton/FilterTypeButton";
import FilterTypeButtonIn from "../FilterTypeButtonIn/FilterTypeButtonIn";

function FilterType({ type = "None", handlerType }) {
  const initialState = {
    showFilter: false,
    type: type,
  };
  const [state, setState] = useState(initialState);

  const alltypes = Object.keys(typesPokemon);
  const sizeButton = 100;

  const handleState = (valueType) => {
    setState({ ...state, showFilter: !state.showFilter, type: valueType });
  };

  const showFilter = alltypes.map((type) => {
    if (type !== "None") {
      return (
        <FilterTypeButton
          key={`typeIcon${type}`}
          type={type}
          handleState={handleState}
        ></FilterTypeButton>
      );
    }
  });

  //console.log(state);

  useEffect(() => {
    handlerType(state.type);
  }, [state.type]);

  return (
    <section className="content-filterType">
      {state.showFilter ? (
        <div className="selectorType ">
          <div className="box border-radius-big">
            <div className="content-title">
              <h1 className="title">Select favorite type </h1>
            </div>
            <div className="types">{showFilter}</div>
          </div>
        </div>
      ) : (
        <div>
          {}
          <FilterTypeButtonIn
            type={state.type}
            handleState={handleState}
          ></FilterTypeButtonIn>
        </div>
      )}
    </section>
  );
}

export default FilterType;
