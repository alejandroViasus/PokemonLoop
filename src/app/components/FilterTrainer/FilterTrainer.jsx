import React, { useEffect, useState } from "react";
import { trainers } from "@/Assets/trainers";

//?----------- COMPONENTS
import FilterTrainerButton from "../FilterTrainerButton/FilterTrainerButton";

function FilterTrainer({ trainer = "None", handlerTrainer }) {
  const initialState = {
    showFilter: false,
    trainer: trainer,
  };
  const [state, setState] = useState(initialState);

  const allTrainers = Object.keys(trainers);
  const sizeButton = 100;

  const handleState = (valueTrainer) => {
    setState({
      ...state,
      showFilter: !state.showFilter,
      trainer: valueTrainer,
    });
  };

  const showFilter = allTrainers.map((trainer,index) => {
    const setKey=`image-select-${trainer}${Math.random()*index}`;
    return (
      <FilterTrainerButton
      key={setKey}
        trainer={trainer}
        handleState={handleState}
      ></FilterTrainerButton>
    );
  });

  useEffect(() => {
    handlerTrainer(state.trainer);
  }, [state.trainer]);

  return (
    <section>
      {state.showFilter ? (
        showFilter
      ) : (
        <FilterTrainerButton
          trainer={state.trainer}
          handleState={handleState}
          format="vs"
        ></FilterTrainerButton>
      )}
    </section>
  );
}

export default FilterTrainer;
