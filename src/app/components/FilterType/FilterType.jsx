import React, { useEffect, useState } from "react";
import { typesPokemon } from "@/Assets/typesPokemon";
import Image from "next/image";

//?------ COMPONENTS

import FilterTypeButton from "../FilterTypeButton/FilterTypeButton";

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
    return (
      <FilterTypeButton
      key={`typeIcon${type}`}
        type={type}
        handleState={handleState}
      ></FilterTypeButton>
    );
  });

  //console.log(state);

  useEffect(() => {
    handlerType(state.type);
  }, [state.type]);

  return (
    <section>
      {state.showFilter ? (
        showFilter
      ) : (
        <FilterTypeButton
          type={state.type}
          handleState={handleState}
        ></FilterTypeButton>
      )}
    </section>
  );
}

export default FilterType;
