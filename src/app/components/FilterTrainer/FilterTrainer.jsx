import React, { useEffect, useState } from "react";
import { trainers } from "@/Assets/trainers";

//?----------- COMPONENTS
import FilterTrainerButton from "../FilterTrainerButton/FilterTrainerButton";
import FilterTrainerButtonIn from "../FilterTrainerButtonIn/FilterTrainerButtonIn";

function FilterTrainer({ trainer = "None", handlerTrainer, type = "None" }) {
  const initialState = {
    showFilter: false,
    trainer: trainer,
    indexTrainer: 0,
    sizeShowCards: 17,
  };
  const [state, setState] = useState(initialState);

  const allTrainers = Object.keys(trainers);
  const sizeButton = 100;
  const sizeSelectorIndex = 20;

  const handleState = (valueTrainer) => {
    setState({
      ...state,
      showFilter: !state.showFilter,
      trainer: valueTrainer,
    });
  };

  const indexSelector = [];

  for (
    let i = 0;
    i < Math.ceil(allTrainers.length / state.sizeShowCards);
    i++
  ) {


    indexSelector.push(
      <button
        className="button-selector"
        style={{
          backgroundColor:
            i === state.indexTrainer
              ? "rgba(240, 240, 255, 1)"
              : "rgba(160, 210, 255, 1)",
          height: `${sizeSelectorIndex}px`,
          width: `${sizeSelectorIndex}px`,
          borderRadius: `${sizeSelectorIndex}px`,
          border: "0px",
          scale: i === state.indexTrainer ? "1.2" : "1",
        }}
        key={`key_selector_${i}`}
        onClick={() => {
          setState({ ...state, indexTrainer: i });
        }}
      ></button>
    );
  }

  const showFilter = allTrainers.map((trainer, index) => {
    const setKey = `image-select-${trainer}${Math.random() * index}`;

    if (
      index > state.sizeShowCards * state.indexTrainer &&
      index < state.sizeShowCards * (state.indexTrainer + 1) &&
      trainer
    ) {
      return (
        <FilterTrainerButton
          key={setKey}
          trainer={trainer}
          handleState={handleState}
          type={type}
        ></FilterTrainerButton>
      );
    }
  });

  useEffect(() => {
    handlerTrainer(state.trainer);
  }, [state.trainer]);

  return (
    <section className="content-filter-type">
      {state.showFilter ? (
        <div className="content-alert-standard">
          <div
            className="bg-panel"
            onClick={() =>
              setState({ ...state, showFilter: !state.showFilter })
            }
          ></div>
          <div className="panel-info">
            <div className="content-title">
              <h1 className="title">Select trainer image </h1>
            </div>
            <div className="info">{showFilter}</div>
            <div
              className="selector flex-all-center"
              style={{
                width: "100%",
                height: "10%",
                //backgroundColor:'green',
                gap: "16px",
              }}
            >
              {indexSelector.map((button) => button)}
            </div>
          </div>
        </div>
      ) : (
        <FilterTrainerButtonIn
          trainer={state.trainer}
          handleState={handleState}
          format="image"
          type={type}
        ></FilterTrainerButtonIn>
      )}
    </section>
  );
}

export default FilterTrainer;
