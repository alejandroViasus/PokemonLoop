import React from "react";

const modesGame = [
  { title: "Trainer vs Rival (CPU)", disabled: false, value: "CPU" },
  { title: "Trainer vs Trainer (PvP)", disabled: true, value: "" },
  { title: "League", disabled: true, value: "" },
];
function SelectMode({ globalState, methods }) {
  return (
    <div>
      <h1>{`Select Mode`}</h1>
      <div>
        {modesGame.map((mode,index) => {
          return (
            <button
            key={`mode_value_${mode.value}_${index}`}
              onClick={() => methods.changeValidation(mode.value, "mode")}
              disabled={mode.disabled}
            >
              {mode.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectMode;
