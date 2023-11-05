import React, { useState, useEffect } from "react";
import { valuesPokemon } from "@/Assets/funcions";

function FilterInitialPokemon({
  stateP,
  handlerInitialRegion,
  handlerInitialIndexPokemon,
}) {
  const [state, setState] = useState({
    showRegions: false,
    region: stateP.region,
  });

  useEffect(() => {
    handlerInitialRegion(state.region);
  }, [state.region]);
  const keyRegions = Object.keys(valuesPokemon.inicialesPokemon);
  //console.log(keyRegions)

  const habdleShowRegion = () => {
    setState({ ...state, showRegions: !state.showRegions });
  };

  const handleRegion = (e) => {
    //console.log(e.target.value)
    setState({ ...state, region: e.target.value, showRegions: false });
  };

  const allRegions = keyRegions.map((region) => {
    return (
      <button key={`buttonRegion${region}`} value={region} onClick={handleRegion}>
        {region}
      </button>
    );
  });

  return (
    <div>
      {state.showRegions ? (
        allRegions
      ) : (
        <button onClick={habdleShowRegion}>{state.region}</button>
      )}
    </div>
  );
}

export default FilterInitialPokemon;
