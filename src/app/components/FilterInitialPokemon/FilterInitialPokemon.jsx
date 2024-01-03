import React, { useState, useEffect } from "react";
import { valuesPokemon } from "@/Assets/funcions";
import { typesPokemon } from "@/Assets/typesPokemon";

function FilterInitialPokemon({
  stateP,
  handlerInitialRegion,
  handlerInitialIndexPokemon,
  theme = "Normal",
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

 

  
  const stylesButtonTitle = {
    border: "0px",
    backgroundColor: `${
      state.showRegions
        ? typesPokemon[theme].colors.tertiary
        : typesPokemon[theme].colors.secondary
    }`,
    gap: "16px",
    padding: "10px 15px",
  };

  const titleP = {
    color: `${typesPokemon[theme].colors.textWhite}`,
    
  };
  
  const boxRegions = {
    backgroundColor: `${typesPokemon[theme].colors.primary}`,
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    right: "-380px",
    top: "-165px",
    zIndex: "9",
    gap: "8px",
  };
  
  const buttonRegions={
    backgroundColor:typesPokemon[theme].colors.secondary,
    border:'0px',
    width:'100%',
    padding:'8px 16px'
  }
  const allRegions = keyRegions.map((region) => {
    return (
      <button
        className="font-button-in border-radius-mid hover-scale cursor-pointer"
        key={`buttonRegion${region}`}
        value={region}
        onClick={handleRegion}
        style={buttonRegions}
      >
        {region}
      </button>
    );
  });

  return (
    <div className="relative">
      {state.showRegions ? (
        <div
          className="absolute flex-all-center border-radius-big"
          style={boxRegions}
        >
          {allRegions}
        </div>
      ) : null}

      <button
        className="title-x percentage-100-width font-quicksand border-radius-big flex-all-center"
        style={stylesButtonTitle}
        onClick={habdleShowRegion}
      >
        <p className="font-button-in" style={titleP}>
          {state.region}
        </p>

        <div
          style={{
            width: "0",
            height: "0",
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            transform: state.showRegions ? "rotate(0deg)" : "rotate(180deg)",
            borderBottom: `15px solid ${
              state.showRegions
                ? typesPokemon[theme].colors.background
                : typesPokemon[theme].colors.primary
            }`,
          }}
        ></div>
      </button>
    </div>
  );
}

export default FilterInitialPokemon;

// import React, { useState, useEffect } from "react";
// import { valuesPokemon } from "@/Assets/funcions";

// function FilterInitialPokemon({
//   stateP,
//   handlerInitialRegion,
//   handlerInitialIndexPokemon,
// }) {
//   const [state, setState] = useState({
//     showRegions: false,
//     region: stateP.region,
//   });

//   useEffect(() => {
//     handlerInitialRegion(state.region);
//   }, [state.region]);
//   const keyRegions = Object.keys(valuesPokemon.inicialesPokemon);
//   //console.log(keyRegions)

//   const habdleShowRegion = () => {
//     setState({ ...state, showRegions: !state.showRegions });
//   };

//   const handleRegion = (e) => {
//     //console.log(e.target.value)
//     setState({ ...state, region: e.target.value, showRegions: false });
//   };

//   const allRegions = keyRegions.map((region) => {
//     return (
//       <button key={`buttonRegion${region}`} value={region} onClick={handleRegion}>
//         {region}
//       </button>
//     );
//   });

//   return (
//     <div>
//       {state.showRegions ? (
//         allRegions
//       ) : (
//         <button onClick={habdleShowRegion}>{state.region}</button>
//       )}
//     </div>
//   );
// }

// export default FilterInitialPokemon;
