import React, { useState, useEffect } from "react";
import { handlerVersion } from "@/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { valuesPokemon } from "@/Assets/funcions";

function CardButtonTeam({ pokemon, porperty = "team" }) {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);

  const initialState = {
    team: pokemon.team || false,
    favorite: pokemon.favorite || false,
  };

  const [state, setState] = useState(initialState);
  const [actualTeam, setActualTeam] = useState(globalState.teamUser);
  const [disabledButton, setDisabledButton] = useState(true);
  useEffect(() => {
    if (pokemon._id !== undefined) {
      fetch(`/api/pokemon/get/getById?id=${pokemon._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          //console.log("data", data.data.team);
          setState(data.data);
        });
    }
  }, [globalState.version, pokemon._id]);

  let disabsledButton = false;

  useEffect(() => {
    setActualTeam(globalState.teamUser);
  }, [globalState.teamUser]);

  useEffect(() => {
    setDisabledButton(
      (actualTeam.length >= valuesPokemon.componentBattle.sizeTeam &&
        pokemon.team === false &&
        porperty === "team") ||
        pokemon.team === false
    );
  }, [actualTeam]);

  const handleChange = () => {
    if (
      actualTeam.length < valuesPokemon.componentBattle.sizeTeam ||
      state.team === true ||
      porperty === "favorite"
    ) {
      let updatePokemon = { ...state, [porperty]: !state[porperty] };
      fetch(`/api/pokemon/put/putById?id=${state._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePokemon),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("data", data.data);
          const version = `v${data.data._id}${porperty}${
            data.data[porperty] ? "true" : "false"
          }`;
          //console.log("version", version);
          dispatch(handlerVersion({ state: globalState, version }));
        });
    }
  };

  //console.log("buton Team", state.name,state.team);

  return (
    <div>
      {state === null ? null : (
        <div>
          <div>
            {actualTeam.length}/{valuesPokemon.componentBattle.sizeTeam}
          </div>
          <button
            onClick={handleChange}
            disabled={
              ((!state?.team &&
                actualTeam.length >= valuesPokemon.componentBattle.sizeTeam) && porperty === "team")
            }
          >
            {state[porperty] ? `${porperty}` : "...." || ""}
          </button>
        </div>
      )}
    </div>
  );
}

export default CardButtonTeam;

// import React, { useState, useEffect } from "react";
// import { handlerVersion } from "@/store/slice";
// import { useSelector, useDispatch } from "react-redux";

// function CardButtonTeam({ pokemon,porperty='team' }) {
//   const dispatch = useDispatch();
//   const globalState = useSelector((state) => state.valueState);

//   const initialState = {
//     team: pokemon.team,
//   };

//   const [state, setState] = useState(initialState);
//   useEffect(() => {
//     fetch(`/api/pokemon/get/getById?id=${pokemon._id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("data", data.data.team);
//         setState(data.data);
//       });
//   }, [globalState.version]);

//   useEffect(() => {}, []);

//   const handleChange = () => {
//     let updatePokemon = { ...state, team: !state.team };
//     fetch(`/api/pokemon/put/putById?id=${state._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatePokemon),
//     })
//       .then((response) => response.json())
//       .then((data) => {

//         //console.log("data", data.data._id);
//         const version= `v${data.data._id}${data.data.team?"true":"false"}`
//         //console.log("version", version);
//         dispatch(handlerVersion({state:globalState,version}))
//       })
//   };

//   return (
//     <div>
//       <button onClick={handleChange}>{state.team ? "team" : "...."}</button>
//     </div>
//   );
// }

// export default CardButtonTeam;
